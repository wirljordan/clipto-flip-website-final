"use client"

import { useState } from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import mixpanel from '@/lib/mixpanel';

interface PersonalDetails {
  firstName: string
  lastName: string
  email: string
  phone: string
}

interface ShippingDetails {
  address: string
  city: string
  state: string
  zipCode: string
  country: string
}

interface PaymentFormProps {
  amount: number
  personalDetails: PersonalDetails
  shippingDetails: ShippingDetails
  selectedColor: string
  shippingOption: string
  videoFileName: string
  socialMediaPermission: boolean
  selectedProduct: string
}

const cardElementOptions = {
  style: {
    base: {
      fontSize: '16px',
      color: '#424770',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#9e2146',
    },
  },
  hidePostalCode: true,
}

export default function PaymentForm({ 
  amount, 
  personalDetails,
  shippingDetails,
  selectedColor, 
  shippingOption,
  videoFileName,
  socialMediaPermission,
  selectedProduct
}: PaymentFormProps) {
  const stripe = useStripe()
  const elements = useElements()
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setIsProcessing(true)

    try {
      // Create payment intent
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: amount * 100, // Convert to cents
          currency: 'usd',
          shippingOption,
        }),
      })

      const { clientSecret, error } = await response.json()

      if (error) {
        console.error('Payment intent error:', error)
        setIsProcessing(false)
        return
      }

      // Confirm payment
      const { error: paymentError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement)!,
        },
      })

      if (paymentError) {
        console.error('Payment error:', paymentError.message)
      } else {
        // Generate a random order ID with just numbers
        const orderId = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0')
        
        // Combine personal and shipping details for customer info
        const customerInfo = {
          ...personalDetails,
          streetAddress: shippingDetails.address,
          city: shippingDetails.city,
          state: shippingDetails.state,
          zipCode: shippingDetails.zipCode,
          country: shippingDetails.country
        }
        
        // Save order data to Supabase
        try {
          const saveResponse = await fetch('/api/save-order', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              orderId,
              customerInfo,
              videoUrl: videoFileName, // Using filename instead of URL
              selectedColor,
              shippingOption,
              totalAmount: amount,
              paymentStatus: 'completed',
              socialMediaPermission,
              selectedProduct
            }),
          })

          const saveResult = await saveResponse.json()
          
          if (!saveResult.success) {
            console.error('Failed to save order data:', saveResult.error)
            // Continue anyway since payment was successful
          }
        } catch (saveError) {
          console.error('Error saving order data:', saveError)
          // Continue anyway since payment was successful
        }
        // Track completed order in Mixpanel
        mixpanel.track('Order Completed', { orderId, amount });
        // Redirect to thank you page
        router.push(`/thank-you?orderId=${orderId}&totalAmount=${amount}`)
      }
    } catch (error) {
      console.error('Payment failed:', error)
    }

    setIsProcessing(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="p-3 md:p-4 border-4 border-black rounded-xl bg-white">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-lg md:text-xl font-bold">💳</span>
          <span className="text-base md:text-lg font-bold">Pay with debit/credit card</span>
        </div>
        <p className="text-xs md:text-sm text-gray-600">Secure payment powered by Stripe</p>
      </div>
      
      <div className="p-3 md:p-4 border-4 border-black rounded-xl bg-white">
        <CardElement options={cardElementOptions} />
      </div>

      <Button
        type="submit"
        disabled={!stripe || isProcessing}
        className="mobile-button w-full bg-orange-400 hover:bg-orange-500 text-black font-black text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-full border-2 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all disabled:opacity-50"
        style={{ backgroundColor: "#FF6B6B" }}
      >
        {isProcessing ? 'Processing...' : 'Place Order'}
      </Button>
    </form>
  )
} 
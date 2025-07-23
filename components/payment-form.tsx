"use client"

import { useState } from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

interface CustomerInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  streetAddress: string
  city: string
  state: string
  zipCode: string
  country: string
}

interface PaymentFormProps {
  amount: number
  shippingOption: string
  selectedColor: string
  videoUrl: string
  customerInfo: CustomerInfo
  onSuccess: () => void
  onError: (error: string) => void
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
  shippingOption, 
  selectedColor, 
  videoUrl, 
  customerInfo, 
  onSuccess, 
  onError 
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
          shippingOption,
        }),
      })

      const { clientSecret, error } = await response.json()

      if (error) {
        onError(error)
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
        onError(paymentError.message || 'Payment failed')
      } else {
        // Generate a random order ID with just numbers
        const orderId = Math.floor(Math.random() * 1000000000).toString().padStart(9, '0')
        
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
              videoUrl,
              selectedColor,
              shippingOption,
              totalAmount: amount,
              paymentStatus: 'completed'
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

        // Redirect to thank you page
        router.push(`/thank-you?orderId=${orderId}&totalAmount=${amount}`)
      }
    } catch (error) {
      onError('Payment failed. Please try again.')
    }

    setIsProcessing(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="p-4 border-2 border-gray-300 rounded-lg bg-gray-50">
        <div className="flex items-center space-x-2 mb-2">
          <span className="text-lg font-bold">💳</span>
          <span className="text-lg font-bold">Pay with debit/credit card</span>
        </div>
        <p className="text-sm text-gray-600">Secure payment powered by Stripe</p>
      </div>
      
      <div className="p-4 border-2 border-black rounded-lg">
        <CardElement options={cardElementOptions} />
      </div>

      <Button
        type="submit"
        disabled={!stripe || isProcessing}
        className="w-full bg-orange-400 hover:bg-orange-500 text-black font-black text-xl px-8 py-4 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all disabled:opacity-50"
        style={{ backgroundColor: "#FF6B6B" }}
      >
        {isProcessing ? 'Processing...' : 'Place Order'}
      </Button>
    </form>
  )
} 
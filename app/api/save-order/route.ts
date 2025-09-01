import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '../../../lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      orderId,
      customerInfo,
      videoUrl,
      selectedColor,
      shippingOption,
      totalAmount,
      paymentStatus,
      socialMediaPermission,
      selectedProduct,
      currency
    } = body

    // Convert amount to cents (Stripe format) if it's a decimal
    const totalAmountInCents = typeof totalAmount === 'number' && totalAmount % 1 !== 0 
      ? Math.round(totalAmount * 100) 
      : totalAmount

    // Save order data to Supabase
    const { data, error } = await supabase
      .from('orders')
      .insert([{
        order_id: orderId,
        customer_info: customerInfo,
        video_url: videoUrl,
        selected_color: selectedColor,
        shipping_option: shippingOption,
        total_amount: totalAmountInCents,
        payment_status: paymentStatus,
        social_media_permission: socialMediaPermission,
        selected_product: selectedProduct,
        currency: currency,
        created_at: new Date().toISOString()
      }])

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to save order to database' },
        { status: 500 }
      )
    }

    console.log('Order saved successfully:', data)

    return NextResponse.json({ 
      success: true, 
      message: 'Order saved successfully',
      orderId 
    })

  } catch (error) {
    console.error('Error saving order:', error)
    return NextResponse.json(
      { error: 'Failed to save order' },
      { status: 500 }
    )
  }
} 
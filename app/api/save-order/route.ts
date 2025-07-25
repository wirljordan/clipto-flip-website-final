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
      paymentStatus
    } = body

    // Save order data to Supabase
    const { data, error } = await supabase
      .from('orders')
      .insert([{
        order_id: orderId,
        customer_info: customerInfo,
        video_url: videoUrl,
        selected_color: selectedColor,
        shipping_option: shippingOption,
        total_amount: totalAmount,
        payment_status: paymentStatus,
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
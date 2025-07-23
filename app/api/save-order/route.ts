import { NextRequest, NextResponse } from 'next/server'

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

    // Here you would typically save to Supabase
    // For now, we'll log the data and return success
    console.log('Order Data to save:', {
      orderId,
      customerInfo,
      videoUrl,
      selectedColor,
      shippingOption,
      totalAmount,
      paymentStatus,
      createdAt: new Date().toISOString()
    })

    // TODO: Replace with actual Supabase insert
    // const { data, error } = await supabase
    //   .from('orders')
    //   .insert([{
    //     order_id: orderId,
    //     customer_info: customerInfo,
    //     video_url: videoUrl,
    //     selected_color: selectedColor,
    //     shipping_option: shippingOption,
    //     total_amount: totalAmount,
    //     payment_status: paymentStatus,
    //     created_at: new Date().toISOString()
    //   }])

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
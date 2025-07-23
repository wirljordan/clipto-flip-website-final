import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
})

export async function POST(request: NextRequest) {
  try {
    const { amount, currency, shippingOption } = await request.json()

    // Calculate total amount based on shipping option
    let totalAmount = amount // Base price $29.99
    if (shippingOption === "express") {
      totalAmount += 1500 // Add $15.00 for express shipping (in cents)
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalAmount,
      currency: currency || "usd",
      automatic_payment_methods: {
        enabled: true,
      },
      metadata: {
        shipping_option: shippingOption,
      },
    })

    return NextResponse.json({
      clientSecret: paymentIntent.client_secret,
    })
  } catch (error) {
    console.error("Error creating payment intent:", error)
    return NextResponse.json(
      { error: "Failed to create payment intent" },
      { status: 500 }
    )
  }
}

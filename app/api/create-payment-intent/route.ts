import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
})

export async function POST(request: NextRequest) {
  try {
    const { amount, currency, shippingOption } = await request.json()

    // Calculate total amount based on shipping option
    let totalAmount = amount // Amount is already in smallest currency unit (cents/pence)
    if (shippingOption === "express") {
      // Add express shipping cost in the appropriate currency
      if (currency === "cad") {
        totalAmount += 2000 // Add $20.00 CAD for express shipping (in cents)
      } else if (currency === "eur") {
        totalAmount += 1500 // Add €15.00 for express shipping (in cents)
      } else {
        totalAmount += 1500 // Add $15.00 USD for express shipping (in cents)
      }
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

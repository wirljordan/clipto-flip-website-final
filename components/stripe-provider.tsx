"use client"

import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_live_51KPZPXFtbhkTH7daRZ8yhuYxOI2vKGCqbtZd7HEjNZwokaBer22K9J2NaIUx8k4GdPT3gFmrnJXsTp0U2XcICCXY00LVfTQcTD')

export default stripePromise 
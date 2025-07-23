"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

function ThankYouContent() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("orderId")

  return (
    <div className="min-h-screen bg-yellow-400" style={{ backgroundColor: "#FECB23" }}>
      {/* Main container with thick black border */}
      <div className="min-h-screen border-8 border-black m-4 rounded-3xl overflow-hidden" style={{ backgroundColor: "#FECB23" }}>
        {/* Header */}
        <header className="flex items-center justify-between p-6 border-b-8 border-black" style={{ backgroundColor: "#FECB23" }}>
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center" style={{ backgroundColor: "#FECB23" }}>
              <Image
                src="/logo.png"
                alt="CLIPTO FLIP Logo"
                width={120}
                height={80}
                className="object-contain"
                style={{ mixBlendMode: "darken" }}
              />
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-2xl font-black text-black hover:text-gray-700 transition-colors">
              HOME
            </Link>
            <Link href="#" className="text-2xl font-black text-black hover:text-gray-700 transition-colors">
              ABOUT
            </Link>
            <Link href="/contact" className="text-2xl font-black text-black hover:text-gray-700 transition-colors">
              CONTACT
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center px-8 py-16 space-y-12">
          {/* Success Message */}
          <div className="text-center space-y-8">
            <div className="text-8xl mb-8">🎉</div>
            <h1 className="text-5xl md:text-6xl font-black text-black leading-tight">
              Thank You!
            </h1>
            <p className="text-xl md:text-2xl font-bold text-black max-w-2xl mx-auto leading-relaxed">
              Your order has been successfully placed and payment has been processed.
            </p>
            
            {orderId && (
              <div className="bg-white rounded-2xl border-4 border-black p-6 shadow-lg">
                <h2 className="text-2xl font-black text-black mb-4">Order Details</h2>
                <p className="text-lg font-bold text-black">
                  Order ID: <span className="text-blue-600">{orderId}</span>
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Please save this order ID for your records.
                </p>
              </div>
            )}
          </div>

          {/* What's Next */}
          <div className="bg-gray-100 rounded-3xl border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-4xl w-full">
            <h2 className="text-3xl font-black text-black text-center mb-6">What's Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-4">
                <div className="text-4xl">📧</div>
                <h3 className="text-xl font-black text-black">Email Confirmation</h3>
                <p className="text-sm font-bold text-gray-700">
                  You'll receive an email confirmation with your order details within the next few minutes.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl">🎨</div>
                <h3 className="text-xl font-black text-black">Flipbook Creation</h3>
                <p className="text-sm font-bold text-gray-700">
                  Our team will start creating your custom flipbook right away.
                </p>
              </div>
              <div className="text-center space-y-4">
                <div className="text-4xl">📦</div>
                <h3 className="text-xl font-black text-black">Shipping</h3>
                <p className="text-sm font-bold text-gray-700">
                  Your flipbook will be shipped to your address once it's ready.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <Link href="/">
              <Button
                className="bg-orange-400 hover:bg-orange-500 text-black font-black text-xl px-8 py-3 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                style={{ backgroundColor: "#FF6B6B" }}
              >
                BACK TO HOME
              </Button>
            </Link>
            <Link href="/upload">
              <Button
                className="bg-black hover:bg-gray-800 text-white font-black text-xl px-8 py-3 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                CREATE ANOTHER
              </Button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  )
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-yellow-400 flex items-center justify-center" style={{ backgroundColor: "#FECB23" }}>
        <div className="text-2xl font-black text-black">Loading...</div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  )
} 
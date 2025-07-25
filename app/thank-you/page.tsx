"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileNav, MobileBottomNav } from "@/components/mobile-nav"

function ThankYouContent() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get("orderId")
  const totalAmount = searchParams.get("totalAmount")

  return (
    <div className="min-h-screen bg-yellow-400" style={{ backgroundColor: "#FECB23" }}>
      {/* Main container with thick black border */}
      <div className="min-h-screen border-4 md:border-8 border-black m-2 md:m-4 rounded-2xl md:rounded-3xl overflow-hidden" style={{ backgroundColor: "#FECB23" }}>
        {/* Header */}
        <header className="flex items-center justify-between p-2 md:p-3 border-b-2 md:border-b-4 border-black" style={{ backgroundColor: "#FECB23" }}>
          {/* Logo */}
          <Link href="/" className="touch-target">
            <div className="flex items-center" style={{ backgroundColor: "#FECB23" }}>
              <Image
                src="/logo.png"
                alt="CLIPTO FLIP Logo"
                width={60}
                height={40}
                className="md:w-[90px] md:h-[60px] object-contain"
                style={{ mixBlendMode: "darken" }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-2xl font-black text-black hover:text-gray-700 transition-colors">
              HOME
            </Link>
            <Link href="/about" className="text-2xl font-black text-black hover:text-gray-700 transition-colors">
              ABOUT
            </Link>
            <Link href="/contact" className="text-2xl font-black text-black hover:text-gray-700 transition-colors">
              CONTACT
            </Link>
          </nav>

          {/* Mobile Navigation */}
          <MobileNav />
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center px-4 md:px-8 py-8 md:py-16 space-y-8 md:space-y-12 pb-20 md:pb-0">
          {/* Success Message */}
          <div className="text-center space-y-6 md:space-y-8">
            <div className="text-6xl md:text-8xl mb-6 md:mb-8">🎉</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight">
              Thank You!
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-black max-w-2xl mx-auto leading-relaxed">
              Your order has been successfully placed and payment has been processed.
            </p>
            
            {orderId && (
              <div className="mobile-card bg-white rounded-2xl border-4 border-black p-4 md:p-6 shadow-lg">
                <h2 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4">Order Details</h2>
                <p className="text-base md:text-lg font-bold text-black">
                  Order ID: <span className="text-blue-600">{orderId}</span>
                </p>
                {totalAmount && (
                  <p className="text-base md:text-lg font-bold text-black mt-2">
                    Total Amount: <span className="text-green-600">${totalAmount} USD</span>
                  </p>
                )}
                <p className="text-xs md:text-sm text-gray-600 mt-2">
                  Please save this order ID for your records.
                </p>
              </div>
            )}
          </div>

          {/* What's Next */}
          <div className="mobile-card bg-gray-100 rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-4xl w-full">
            <h2 className="text-2xl md:text-3xl font-black text-black text-center mb-4 md:mb-6">What's Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
              <div className="text-center space-y-3 md:space-y-4">
                <div className="text-3xl md:text-4xl">📧</div>
                <h3 className="text-lg md:text-xl font-black text-black">Email Confirmation</h3>
                <p className="text-xs md:text-sm font-bold text-gray-700">
                  You'll receive an email confirmation with your order details within the next few minutes.
                </p>
              </div>
              <div className="text-center space-y-3 md:space-y-4">
                <div className="text-3xl md:text-4xl">🎨</div>
                <h3 className="text-lg md:text-xl font-black text-black">Flipbook Creation</h3>
                <p className="text-xs md:text-sm font-bold text-gray-700">
                  Our team will start creating your custom flipbook right away.
                </p>
              </div>
              <div className="text-center space-y-3 md:space-y-4">
                <div className="text-3xl md:text-4xl">📦</div>
                <h3 className="text-lg md:text-xl font-black text-black">Shipping</h3>
                <p className="text-xs md:text-sm font-bold text-gray-700">
                  Your flipbook will be shipped to your address once it's ready.
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row gap-4">
            <Link href="/">
              <Button
                className="mobile-button bg-orange-400 hover:bg-orange-500 text-black font-black text-lg md:text-xl px-6 md:px-8 py-3 rounded-full border-2 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                style={{ backgroundColor: "#FF6B6B" }}
              >
                BACK TO HOME
              </Button>
            </Link>
            <Link href="/upload">
              <Button
                className="mobile-button bg-orange-400 hover:bg-orange-500 text-black font-black text-lg md:text-xl px-6 md:px-8 py-3 rounded-full border-2 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                style={{ backgroundColor: "#FF6B6B" }}
              >
                🎁 Create Your Flipbook
              </Button>
            </Link>
          </div>
        </main>

        {/* Mobile Bottom Navigation */}
        <MobileBottomNav />
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
"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

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
            <Link href="/upload">
              <Button
                className="bg-orange-400 hover:bg-orange-500 text-black font-black text-xl px-8 py-3 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                style={{ backgroundColor: "#FF6B6B" }}
              >
                🎁 Create Your Flipbook
              </Button>
            </Link>
          </nav>
          
          {/* Mobile Navigation */}
          <MobileNav />
        </header>

        {/* Main Content */}
        <main className="px-4 md:px-8 py-8 md:py-12 flex-1">
          <div className="max-w-4xl mx-auto">
            {/* Success Message */}
            <div className="text-center mb-12 md:mb-16">
              <div className="text-6xl md:text-8xl mb-6">🎉</div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6">
                Thank You!
              </h1>
              <p className="text-xl md:text-2xl text-black">
                Your order has been placed successfully. We're excited to create your flipbook!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Order Details */}
              <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-2xl md:text-3xl font-black text-black mb-6 text-center">
                  Order Details
                </h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-lg md:text-xl text-gray-700">Order ID:</span>
                    <span className="text-lg md:text-xl font-black text-black">{orderId || 'N/A'}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg md:text-xl text-gray-700">Total Amount:</span>
                    <span className="text-lg md:text-xl font-black text-black">
                      ${totalAmount ? parseFloat(totalAmount).toFixed(2) : '0.00'}
                    </span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-lg md:text-xl text-gray-700">Status:</span>
                    <span className="text-lg md:text-xl font-black text-green-600">Confirmed</span>
                  </div>
                </div>
              </div>

              {/* What's Next */}
              <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-2xl md:text-3xl font-black text-black mb-6 text-center">
                  What's Next?
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl md:text-3xl">📧</div>
                    <div>
                      <h3 className="text-lg md:text-xl font-black text-black mb-2">Confirmation Email</h3>
                      <p className="text-base md:text-lg text-gray-700">
                        You'll receive a confirmation email with your order details shortly.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl md:text-3xl">🎨</div>
                    <div>
                      <h3 className="text-lg md:text-xl font-black text-black mb-2">Processing</h3>
                      <p className="text-base md:text-lg text-gray-700">
                        We'll start creating your flipbook within 24 hours of receiving your order.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="text-2xl md:text-3xl">📦</div>
                    <div>
                      <h3 className="text-lg md:text-xl font-black text-black mb-2">Shipping</h3>
                      <p className="text-base md:text-lg text-gray-700">
                        Your flipbook will be shipped within 5-7 business days.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="text-center mt-12 md:mt-16 space-y-4 md:space-y-6">
              <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
                <Link href="/upload">
                  <Button
                    className="mobile-button bg-orange-400 hover:bg-orange-500 text-black font-black text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                    style={{ backgroundColor: "#FF6B6B" }}
                  >
                    🎁 Create Another Flipbook
                  </Button>
                </Link>
                
                <Link href="/">
                  <Button
                    className="mobile-button bg-gray-600 hover:bg-gray-700 text-white font-black text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                  >
                    🏠 Back to Home
                  </Button>
                </Link>
              </div>
              
              <p className="text-base md:text-lg text-gray-700">
                Questions about your order? <Link href="/contact" className="font-black text-black hover:underline">Contact us</Link>
              </p>
            </div>
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
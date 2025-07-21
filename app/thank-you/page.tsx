"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"

export default function ThankYouPage() {
  const searchParams = useSearchParams()
  const orderId = searchParams.get('orderId')

  return (
    <div className="min-h-screen bg-yellow-400" style={{ backgroundColor: "#FECB23" }}>
      {/* Main container with thick black border */}
      <div className="min-h-screen border-8 border-black m-4 rounded-3xl overflow-hidden">
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
            <Link href="#" className="text-2xl font-black text-black hover:text-gray-700 transition-colors">
              CONTACT
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center px-8 py-16 space-y-12">
          {/* Thank You Card */}
          <div className="bg-gray-100 rounded-3xl border-8 border-black p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-4xl w-full text-center">
            <div className="space-y-8">
              {/* Success Icon */}
              <div className="mx-auto w-24 h-24 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-4xl">✓</span>
              </div>

              {/* Thank You Message */}
              <div>
                <h1 className="text-4xl md:text-5xl font-black text-black leading-tight mb-4">
                  Thank You for Your Order!
                </h1>
                <p className="text-xl font-bold text-gray-700">
                  Your flipbook is being created with love and care.
                </p>
              </div>

              {/* Order Details */}
              <div className="bg-white rounded-2xl border-4 border-black p-6">
                <h2 className="text-2xl font-black text-black mb-4">Order Details</h2>
                <div className="space-y-3 text-left">
                  <div className="flex justify-between">
                    <span className="font-bold">Order ID:</span>
                    <span className="font-mono">{orderId || 'CLIPTO-' + Math.random().toString(36).substr(2, 9).toUpperCase()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Status:</span>
                    <span className="text-green-600 font-bold">Payment Confirmed</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Processing Time:</span>
                    <span>3-5 business days</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-bold">Shipping:</span>
                    <span>10-45 days (Standard)</span>
                  </div>
                </div>
              </div>

              {/* What's Next */}
              <div className="bg-white rounded-2xl border-4 border-black p-6">
                <h2 className="text-2xl font-black text-black mb-4">What's Next?</h2>
                <div className="space-y-4 text-left">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">1️⃣</span>
                    <div>
                      <span className="font-bold">Video Processing:</span>
                      <p className="text-gray-600">We'll convert your video into individual frames</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">2️⃣</span>
                    <div>
                      <span className="font-bold">Flipbook Creation:</span>
                      <p className="text-gray-600">Each frame gets printed and bound into your custom flipbook</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">3️⃣</span>
                    <div>
                      <span className="font-bold">Quality Check:</span>
                      <p className="text-gray-600">We ensure every page is perfect before shipping</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">4️⃣</span>
                    <div>
                      <span className="font-bold">Shipping:</span>
                      <p className="text-gray-600">Your flipbook will be carefully packaged and shipped to you</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-2xl border-4 border-black p-6">
                <h2 className="text-2xl font-black text-black mb-4">Need Help?</h2>
                <p className="text-gray-700 mb-4">
                  We'll send you email updates about your order. If you have any questions, don't hesitate to reach out!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button
                      className="bg-orange-400 hover:bg-orange-500 text-black font-black text-xl px-8 py-4 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                      style={{ backgroundColor: "#FF6B6B" }}
                    >
                      Contact Support
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button
                      className="bg-gray-600 hover:bg-gray-700 text-white font-black text-xl px-8 py-4 rounded-full border-4 border-black transition-all"
                    >
                      Back to Home
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 
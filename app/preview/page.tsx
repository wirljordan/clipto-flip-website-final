"use client"

import { useState, useEffect, Suspense } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import PaymentForm from "@/components/payment-form"
import { Elements } from "@stripe/react-stripe-js"
import stripePromise from "@/components/stripe-provider"

function PreviewPageContent() {
  const [videoData, setVideoData] = useState<string>("")
  const [videoFileName, setVideoFileName] = useState<string>("")
  const [selectedColor, setSelectedColor] = useState("#FF6B6B")
  const [shippingOption, setShippingOption] = useState("standard")
  const [selectedCountry, setSelectedCountry] = useState("US")
  const [personalDetails, setPersonalDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: ""
  })
  const [shippingDetails, setShippingDetails] = useState({
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: ""
  })
  const router = useRouter()

  useEffect(() => {
    // Retrieve video data from sessionStorage
    const storedVideo = sessionStorage.getItem('uploadedVideo')
    const storedFileName = sessionStorage.getItem('videoFileName')
    
    if (storedVideo && storedFileName) {
      setVideoData(storedVideo)
      setVideoFileName(storedFileName)
    } else {
      // Redirect to upload if no video data
      router.push('/upload')
    }
  }, [router])

  const colorOptions = [
    { name: "Coral", value: "#FF6B6B" },
    { name: "Blue", value: "#4ECDC4" },
    { name: "Purple", value: "#9B59B6" },
    { name: "Green", value: "#2ECC71" },
    { name: "Orange", value: "#F39C12" },
    { name: "Pink", value: "#E91E63" }
  ]

  const shippingOptions = [
    { value: "standard", label: "Standard Shipping (10-20 days)", price: 0 },
    { value: "express", label: "Express Shipping (3-7 days)", price: 15 }
  ]

  const countries = [
    { code: "US", name: "United States", currency: "USD", symbol: "$" },
    { code: "CA", name: "Canada", currency: "CAD", symbol: "C$" },
    { code: "EU", name: "European Union", currency: "EUR", symbol: "€" }
  ]

  const basePrice = 29.99
  const selectedShipping = shippingOptions.find(option => option.value === shippingOption)
  const selectedCountryData = countries.find(country => country.code === selectedCountry)
  const totalPrice = basePrice + (selectedShipping?.price || 0)

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
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-4">
                Preview Your Flipbook
              </h1>
              <p className="text-lg md:text-xl text-black">
                Review your video and customize your flipbook
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Left Column - Video Preview and Customization */}
              <div className="space-y-8">
                {/* Video Preview */}
                <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h2 className="text-2xl md:text-3xl font-black text-black mb-6 text-center">
                    Your Video Preview
                  </h2>
                  
                  {videoData ? (
                    <div className="space-y-4">
                      <video
                        src={videoData}
                        controls={false}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full rounded-xl border-4 border-black shadow-lg"
                        style={{ backgroundColor: "#FECB23" }}
                      />
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-lg md:text-xl text-gray-600">No video selected</p>
                    </div>
                  )}
                </div>

                {/* Color Selection */}
                <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h2 className="text-2xl md:text-3xl font-black text-black mb-6 text-center">
                    Choose Cover Color
                  </h2>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {colorOptions.map((color) => (
                      <button
                        key={color.value}
                        onClick={() => setSelectedColor(color.value)}
                        className={`touch-target p-4 rounded-full border-4 transition-all ${
                          selectedColor === color.value
                            ? 'border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                            : 'border-gray-300 hover:border-black'
                        }`}
                        style={{ backgroundColor: color.value }}
                      >
                        <div className="text-center">
                          <span className="text-sm md:text-base font-black text-black">{color.name}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Shipping Options */}
                <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h2 className="text-2xl md:text-3xl font-black text-black mb-6 text-center">
                    Shipping Options
                  </h2>
                  
                  <div className="space-y-4">
                    {shippingOptions.map((option) => (
                      <label
                        key={option.value}
                        className={`touch-target flex items-center p-4 rounded-2xl border-4 cursor-pointer transition-all ${
                          shippingOption === option.value
                            ? 'border-black bg-yellow-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                            : 'border-gray-300 hover:border-black'
                        }`}
                      >
                        <input
                          type="radio"
                          name="shipping"
                          value={option.value}
                          checked={shippingOption === option.value}
                          onChange={(e) => setShippingOption(e.target.value)}
                          className="mr-4 w-5 h-5"
                        />
                        <div className="flex-1">
                          <div className="font-black text-black">{option.label}</div>
                          <div className="text-gray-600">
                            {option.price === 0 ? 'Free' : `+$${option.price.toFixed(2)}`}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Pricing and Forms */}
              <div className="space-y-8">
                {/* Pricing */}
                <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h2 className="text-2xl md:text-3xl font-black text-black mb-6 text-center">
                    Pricing
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg md:text-xl text-gray-700">Flipbook</span>
                      <span className="text-lg md:text-xl font-black text-black">{selectedCountryData?.symbol}{basePrice.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-lg md:text-xl text-gray-700">Shipping</span>
                      <span className="text-lg md:text-xl font-black text-black">
                        {selectedShipping?.price === 0 ? 'Free' : `${selectedCountryData?.symbol}${selectedShipping?.price.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="border-t-4 border-black pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xl md:text-2xl font-black text-black">Total</span>
                        <span className="text-xl md:text-2xl font-black text-black">{selectedCountryData?.symbol}{totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Personal Details */}
                <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h2 className="text-2xl md:text-3xl font-black text-black mb-6 text-center">
                    Personal Details
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm md:text-base font-black text-black mb-2">First Name</label>
                      <input
                        type="text"
                        value={personalDetails.firstName}
                        onChange={(e) => setPersonalDetails({...personalDetails, firstName: e.target.value})}
                        className="w-full p-3 md:p-4 border-4 border-black rounded-xl text-base md:text-lg"
                        style={{ fontSize: '16px' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm md:text-base font-black text-black mb-2">Last Name</label>
                      <input
                        type="text"
                        value={personalDetails.lastName}
                        onChange={(e) => setPersonalDetails({...personalDetails, lastName: e.target.value})}
                        className="w-full p-3 md:p-4 border-4 border-black rounded-xl text-base md:text-lg"
                        style={{ fontSize: '16px' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm md:text-base font-black text-black mb-2">Email</label>
                      <input
                        type="email"
                        value={personalDetails.email}
                        onChange={(e) => setPersonalDetails({...personalDetails, email: e.target.value})}
                        className="w-full p-3 md:p-4 border-4 border-black rounded-xl text-base md:text-lg"
                        style={{ fontSize: '16px' }}
                      />
                    </div>
                    <div>
                      <label className="block text-sm md:text-base font-black text-black mb-2">Phone</label>
                      <input
                        type="tel"
                        value={personalDetails.phone}
                        onChange={(e) => setPersonalDetails({...personalDetails, phone: e.target.value})}
                        className="w-full p-3 md:p-4 border-4 border-black rounded-xl text-base md:text-lg"
                        style={{ fontSize: '16px' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Details */}
                <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h2 className="text-2xl md:text-3xl font-black text-black mb-6 text-center">
                    Shipping Address
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm md:text-base font-black text-black mb-2">Address</label>
                      <input
                        type="text"
                        value={shippingDetails.address}
                        onChange={(e) => setShippingDetails({...shippingDetails, address: e.target.value})}
                        className="w-full p-3 md:p-4 border-4 border-black rounded-xl text-base md:text-lg"
                        style={{ fontSize: '16px' }}
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm md:text-base font-black text-black mb-2">City</label>
                        <input
                          type="text"
                          value={shippingDetails.city}
                          onChange={(e) => setShippingDetails({...shippingDetails, city: e.target.value})}
                          className="w-full p-3 md:p-4 border-4 border-black rounded-xl text-base md:text-lg"
                          style={{ fontSize: '16px' }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm md:text-base font-black text-black mb-2">State</label>
                        <input
                          type="text"
                          value={shippingDetails.state}
                          onChange={(e) => setShippingDetails({...shippingDetails, state: e.target.value})}
                          className="w-full p-3 md:p-4 border-4 border-black rounded-xl text-base md:text-lg"
                          style={{ fontSize: '16px' }}
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm md:text-base font-black text-black mb-2">ZIP Code</label>
                        <input
                          type="text"
                          value={shippingDetails.zipCode}
                          onChange={(e) => setShippingDetails({...shippingDetails, zipCode: e.target.value})}
                          className="w-full p-3 md:p-4 border-4 border-black rounded-xl text-base md:text-lg"
                          style={{ fontSize: '16px' }}
                        />
                      </div>
                      <div>
                        <label className="block text-sm md:text-base font-black text-black mb-2">Country</label>
                        <select
                          value={selectedCountry}
                          onChange={(e) => setSelectedCountry(e.target.value)}
                          className="w-full p-3 md:p-4 border-4 border-black rounded-xl text-base md:text-lg"
                          style={{ fontSize: '16px' }}
                        >
                          {countries.map((country) => (
                            <option key={country.code} value={country.code}>
                              {country.name}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Payment Form */}
                <PaymentForm 
                  amount={totalPrice}
                  personalDetails={personalDetails}
                  shippingDetails={shippingDetails}
                  selectedColor={selectedColor}
                  shippingOption={shippingOption}
                  videoFileName={videoFileName}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default function PreviewPage() {
  return (
    <Elements stripe={stripePromise}>
      <Suspense fallback={
        <div className="min-h-screen bg-yellow-400 flex items-center justify-center" style={{ backgroundColor: "#FECB23" }}>
          <div className="text-2xl font-black text-black">Loading...</div>
        </div>
      }>
        <PreviewPageContent />
      </Suspense>
    </Elements>
  )
}

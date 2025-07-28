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
  const [socialMediaPermission, setSocialMediaPermission] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState("signature")
  const router = useRouter()

  const countries = [
    // North America
    { code: "US", name: "United States", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "CA", name: "Canada", currency: "CAD", symbol: "C$", basePrice: 44.00 },
    { code: "MX", name: "Mexico", currency: "USD", symbol: "$", basePrice: 39.99 },
    
    // Europe
    { code: "GB", name: "United Kingdom", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "DE", name: "Germany", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "FR", name: "France", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "IT", name: "Italy", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "ES", name: "Spain", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "NL", name: "Netherlands", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "BE", name: "Belgium", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "AT", name: "Austria", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "CH", name: "Switzerland", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "SE", name: "Sweden", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "NO", name: "Norway", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "DK", name: "Denmark", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "FI", name: "Finland", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "PL", name: "Poland", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "CZ", name: "Czech Republic", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "HU", name: "Hungary", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "RO", name: "Romania", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "BG", name: "Bulgaria", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "HR", name: "Croatia", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "SI", name: "Slovenia", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "SK", name: "Slovakia", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "LT", name: "Lithuania", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "LV", name: "Latvia", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "EE", name: "Estonia", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "LU", name: "Luxembourg", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "MT", name: "Malta", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "CY", name: "Cyprus", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "IE", name: "Ireland", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "PT", name: "Portugal", currency: "EUR", symbol: "€", basePrice: 29.99 },
    { code: "GR", name: "Greece", currency: "EUR", symbol: "€", basePrice: 29.99 },
    
    // Asia Pacific
    { code: "AU", name: "Australia", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "NZ", name: "New Zealand", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "JP", name: "Japan", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "KR", name: "South Korea", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "SG", name: "Singapore", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "HK", name: "Hong Kong", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "TW", name: "Taiwan", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "IN", name: "India", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "TH", name: "Thailand", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "MY", name: "Malaysia", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "PH", name: "Philippines", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "VN", name: "Vietnam", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "ID", name: "Indonesia", currency: "USD", symbol: "$", basePrice: 39.99 },
    
    // South America
    { code: "BR", name: "Brazil", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "AR", name: "Argentina", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "CL", name: "Chile", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "CO", name: "Colombia", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "PE", name: "Peru", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "VE", name: "Venezuela", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "EC", name: "Ecuador", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "UY", name: "Uruguay", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "PY", name: "Paraguay", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "BO", name: "Bolivia", currency: "USD", symbol: "$", basePrice: 39.99 },
    
    // Africa
    { code: "ZA", name: "South Africa", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "EG", name: "Egypt", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "NG", name: "Nigeria", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "KE", name: "Kenya", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "GH", name: "Ghana", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "MA", name: "Morocco", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "TN", name: "Tunisia", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "DZ", name: "Algeria", currency: "USD", symbol: "$", basePrice: 39.99 },
    
    // Middle East
    { code: "IL", name: "Israel", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "AE", name: "United Arab Emirates", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "SA", name: "Saudi Arabia", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "TR", name: "Turkey", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "QA", name: "Qatar", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "KW", name: "Kuwait", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "BH", name: "Bahrain", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "OM", name: "Oman", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "JO", name: "Jordan", currency: "USD", symbol: "$", basePrice: 39.99 },
    { code: "LB", name: "Lebanon", currency: "USD", symbol: "$", basePrice: 39.99 }
  ]

  const productOptions = [
    {
      id: "classic",
      name: "🎞 Classic FlipBook",
      subtitle: "Simple & Stunning",
      description: "Premium photo prints\nSturdy cardstock cover\nA simple, thoughtful keepsake",
      prices: {
        USD: 39.99,
        CAD: 44.99,
        EUR: 29.99
      }
    },
    {
      id: "signature",
      name: "✨ Signature FlipBook",
      subtitle: "Our Best Seller",
      description: "Premium photo prints\nWrapped in soft-touch faux leather\nA refined, gift-ready favorite",
      prices: {
        USD: 44.99,
        CAD: 49.99,
        EUR: 34.99
      }
    },
    {
      id: "deluxe",
      name: "🎁 Deluxe FlipBook",
      subtitle: "Gift-Boxed & Gorgeous",
      description: "Everything in Signature\nSleek black gift box with black shredded tissue\nThe ultimate \"wow\" moment",
      prices: {
        USD: 59.99,
        CAD: 64.99,
        EUR: 49.99
      }
    }
  ]

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

    // Auto-detect country
    const detectCountry = async () => {
      try {
        const response = await fetch('https://ipapi.co/json/')
        const data = await response.json()
        console.log('Detected country:', data.country_code) // Debug log
        
        // Check if the detected country is in our list
        const detectedCountry = countries.find(country => country.code === data.country_code)
        if (detectedCountry) {
          setSelectedCountry(data.country_code)
          console.log('Set country to:', data.country_code) // Debug log
        } else {
          // Default to US if country not found
          setSelectedCountry('US')
          console.log('Country not found, defaulting to US') // Debug log
        }
      } catch (error) {
        console.log('Could not detect country, defaulting to US:', error)
        setSelectedCountry('US')
      }
    }

    detectCountry()
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

  const selectedCountryData = countries.find(country => country.code === selectedCountry)
  const selectedProductData = productOptions.find(product => product.id === selectedProduct)
  const currency = selectedCountryData?.currency || "USD"
  const productPrice = selectedProductData?.prices[currency as keyof typeof selectedProductData.prices] || 39.99
  const selectedShipping = shippingOptions.find(option => option.value === shippingOption)
  const socialMediaDiscount = socialMediaPermission ? 5 : 0
  const totalPrice = productPrice + (selectedShipping?.price || 0) - socialMediaDiscount

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

            {/* Main content grid: Restructured Layout */}
            <div className="space-y-8">
              {/* Top Row: Video Preview and Choose Your FlipBook */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Video Preview */}
                <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h2 className="text-2xl md:text-3xl font-black text-black mb-6 text-center">
                    Your Video Preview
                  </h2>
                  <div className="relative">
                    <video
                      src={videoData}
                      controls={false}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full rounded-xl border-4 border-black"
                      style={{ backgroundColor: "#FECB23" }}
                    />
                  </div>
                </div>

                {/* Product Selection */}
                <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h2 className="text-2xl md:text-3xl font-black text-black mb-6 text-center">
                    Choose Your FlipBook
                  </h2>
                  <div className="space-y-4">
                    {productOptions.map((product) => (
                      <label
                        key={product.id}
                        className={`touch-target flex flex-col p-4 rounded-2xl border-4 cursor-pointer transition-all relative ${
                          selectedProduct === product.id
                            ? 'border-black bg-yellow-100 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]'
                            : 'border-gray-300 hover:border-black'
                        }`}
                      >
                        <input
                          type="radio"
                          name="product"
                          value={product.id}
                          checked={selectedProduct === product.id}
                          onChange={(e) => setSelectedProduct(e.target.value)}
                          className="sr-only"
                        />
                        
                        {/* Best Seller Badge */}
                        {product.id === 'signature' && (
                          <div className="absolute -bottom-2 -right-2 bg-yellow-400 border-2 border-black px-2 py-1 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] z-10">
                            <span className="text-xs font-black text-black">⭐ Best Seller</span>
                          </div>
                        )}
                        
                        <div className="flex-1">
                          <div className="flex justify-between items-start mb-3">
                            <div className="flex-1">
                              <div className="font-black text-black text-lg md:text-xl">{product.name}</div>
                              <div className="text-gray-600 text-sm md:text-base">{product.subtitle}</div>
                            </div>
                            <div className="text-right ml-4">
                              <div className="font-black text-black text-xl md:text-2xl">
                                {selectedCountryData?.symbol}{product.prices[currency as keyof typeof product.prices].toFixed(2)}
                              </div>
                            </div>
                          </div>
                          
                          <div className="text-sm md:text-base text-gray-700 whitespace-pre-line mb-3">
                            {product.description}
                          </div>
                          
                          {/* Additional descriptive text */}
                          {product.id === 'classic' && (
                            <div className="text-xs md:text-sm text-gray-500 italic">
                              Perfect for everyday memories and casual gifts
                            </div>
                          )}
                          {product.id === 'signature' && (
                            <div className="text-xs md:text-sm text-gray-500 italic">
                              Most popular choice - loved for its premium feel
                            </div>
                          )}
                          {product.id === 'deluxe' && (
                            <div className="text-xs md:text-sm text-gray-500 italic">
                              Great for gifting - creates unforgettable moments
                            </div>
                          )}
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              {/* Second Row: Choose Cover Color and Order Summary */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Color Selection */}
                <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h2 className="text-2xl md:text-3xl font-black text-black mb-6 text-center">
                    Choose Cover Color
                  </h2>
                  <div className="grid grid-cols-3 gap-4">
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

                {/* Order Summary */}
                <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h2 className="text-2xl md:text-3xl font-black text-black mb-6 text-center">
                    Order Summary
                  </h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg md:text-xl text-black font-bold">
                        {selectedProductData?.name}
                      </span>
                      <span className="text-lg md:text-xl text-black font-black">
                        {selectedCountryData?.symbol}{productPrice.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-base md:text-lg text-black">
                        {shippingOption === 'express' ? 'Express Shipping' : 'Standard Shipping'}
                      </span>
                      <span className="text-base md:text-lg text-black font-bold">
                        {shippingOption === 'express' ? `+${selectedCountryData?.symbol}15.00` : 'Free'}
                      </span>
                    </div>
                    {socialMediaPermission && (
                      <div className="flex justify-between items-center text-green-600">
                        <span className="text-base md:text-lg font-bold">
                          Social Media Discount
                        </span>
                        <span className="text-base md:text-lg font-black">
                          -{selectedCountryData?.symbol}5.00
                        </span>
                      </div>
                    )}
                    <div className="border-t-2 border-black pt-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xl md:text-2xl text-black font-black">
                          Total
                        </span>
                        <span className="text-xl md:text-2xl text-black font-black">
                          {selectedCountryData?.symbol}{totalPrice.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Third Row: Personal Details and Shipping Address */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Personal Details */}
                <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h2 className="text-2xl md:text-3xl font-black text-black mb-6 text-center">
                    Personal Details
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm md:text-base font-bold text-black mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={personalDetails.firstName}
                        onChange={(e) => setPersonalDetails({...personalDetails, firstName: e.target.value})}
                        className="w-full p-3 md:p-4 border-4 border-black rounded-xl bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm md:text-base font-bold text-black mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        value={personalDetails.lastName}
                        onChange={(e) => setPersonalDetails({...personalDetails, lastName: e.target.value})}
                        className="w-full p-3 md:p-4 border-4 border-black rounded-xl bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm md:text-base font-bold text-black mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={personalDetails.email}
                        onChange={(e) => setPersonalDetails({...personalDetails, email: e.target.value})}
                        className="w-full p-3 md:p-4 border-4 border-black rounded-xl bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm md:text-base font-bold text-black mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={personalDetails.phone}
                        onChange={(e) => setPersonalDetails({...personalDetails, phone: e.target.value})}
                        className="w-full p-3 md:p-4 border-4 border-black rounded-xl bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your phone number"
                        required
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
                      <label htmlFor="address" className="block text-sm md:text-base font-bold text-black mb-2">
                        Address *
                      </label>
                      <input
                        type="text"
                        id="address"
                        value={shippingDetails.address}
                        onChange={(e) => setShippingDetails({...shippingDetails, address: e.target.value})}
                        className="w-full p-3 md:p-4 border-4 border-black rounded-xl bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your address"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="city" className="block text-sm md:text-base font-bold text-black mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        id="city"
                        value={shippingDetails.city}
                        onChange={(e) => setShippingDetails({...shippingDetails, city: e.target.value})}
                        className="w-full p-3 md:p-4 border-4 border-black rounded-xl bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your city"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="state" className="block text-sm md:text-base font-bold text-black mb-2">
                        State/Province *
                      </label>
                      <input
                        type="text"
                        id="state"
                        value={shippingDetails.state}
                        onChange={(e) => setShippingDetails({...shippingDetails, state: e.target.value})}
                        className="w-full p-3 md:p-4 border-4 border-black rounded-xl bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your state/province"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="zipCode" className="block text-sm md:text-base font-bold text-black mb-2">
                        ZIP/Postal Code *
                      </label>
                      <input
                        type="text"
                        id="zipCode"
                        value={shippingDetails.zipCode}
                        onChange={(e) => setShippingDetails({...shippingDetails, zipCode: e.target.value})}
                        className="w-full p-3 md:p-4 border-4 border-black rounded-xl bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your ZIP/postal code"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Shipping Options and Social Media Permission */}
              <div className="space-y-8">
                {/* Shipping Options */}
                <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h2 className="text-2xl md:text-3xl font-black text-black mb-6 text-center">
                    Shipping Options
                  </h2>
                  <div className="space-y-4">
                    <label className="touch-target flex items-center p-4 rounded-2xl border-4 cursor-pointer transition-all">
                      <input
                        type="radio"
                        name="shipping"
                        value="standard"
                        checked={shippingOption === 'standard'}
                        onChange={(e) => setShippingOption(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`w-6 h-6 rounded-full border-4 mr-4 flex-shrink-0 ${
                        shippingOption === 'standard' 
                          ? 'border-black bg-black' 
                          : 'border-gray-300'
                      }`}>
                        {shippingOption === 'standard' && (
                          <div className="w-2 h-2 bg-white rounded-full m-auto"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="font-black text-black text-lg md:text-xl">Standard Shipping (10-20 days)</div>
                        <div className="text-gray-600 text-base md:text-lg">Free</div>
                      </div>
                    </label>
                    
                    <label className="touch-target flex items-center p-4 rounded-2xl border-4 cursor-pointer transition-all">
                      <input
                        type="radio"
                        name="shipping"
                        value="express"
                        checked={shippingOption === 'express'}
                        onChange={(e) => setShippingOption(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`w-6 h-6 rounded-full border-4 mr-4 flex-shrink-0 ${
                        shippingOption === 'express' 
                          ? 'border-black bg-black' 
                          : 'border-gray-300'
                      }`}>
                        {shippingOption === 'express' && (
                          <div className="w-2 h-2 bg-white rounded-full m-auto"></div>
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="font-black text-black text-lg md:text-xl">Express Shipping (3-7 days)</div>
                        <div className="text-gray-600 text-base md:text-lg">+{selectedCountryData?.symbol}15.00</div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Social Media Permission Checkbox */}
                <div className="flex items-start space-x-3 p-3 border-2 border-black rounded-xl bg-yellow-100">
                  <input
                    type="checkbox"
                    id="socialMediaPermission"
                    checked={socialMediaPermission}
                    onChange={(e) => setSocialMediaPermission(e.target.checked)}
                    className="w-5 h-5 border-2 border-black rounded mt-1"
                  />
                  <div>
                    <label htmlFor="socialMediaPermission" className="text-sm md:text-base text-black font-bold block">
                      🎉 Yes, you can feature my flipbook — give me $5 off!
                    </label>
                    <p className="text-xs text-gray-600 mt-1">
                      We may showcase your flipbook in a short social video.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Form - Full Width at Bottom */}
            <div className="mt-4 md:mt-6">
              <PaymentForm 
                amount={totalPrice}
                personalDetails={personalDetails}
                shippingDetails={shippingDetails}
                selectedColor={selectedColor}
                shippingOption={shippingOption}
                videoFileName={videoFileName}
                socialMediaPermission={socialMediaPermission}
                selectedProduct={selectedProduct}
              />
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

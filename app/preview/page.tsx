"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSearchParams } from "next/navigation"
import { useState, useEffect, Suspense } from "react"
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js"
import PaymentForm from "@/components/payment-form"
import stripePromise from "@/components/stripe-provider"
import mixpanel from '@/lib/mixpanel';

function PreviewPageContent() {
  const searchParams = useSearchParams()
  const videoUrl = searchParams.get("video")
  const [selectedColor, setSelectedColor] = useState("white")
  const [shippingOption, setShippingOption] = useState("standard")
  const [paymentError, setPaymentError] = useState("")
  const [customerInfo, setCustomerInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: ''
  })

  const basePrice = 29.99
  const totalAmount = shippingOption === "express" ? basePrice + 15 : basePrice

  const handlePaymentError = (error: string) => {
    setPaymentError(error)
  }

  useEffect(() => {
    mixpanel.track('Preview Page Visit');
  }, []);

  return (
    <div className="min-h-screen bg-yellow-400" style={{ backgroundColor: "#FECB23" }}>
      <div className="min-h-screen border-8 border-black m-4 rounded-3xl overflow-hidden">
        <header className="flex items-center justify-between p-6 border-b-8 border-black" style={{ backgroundColor: "#FECB23" }}>
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
        <main className="flex flex-col items-center justify-center px-8 py-16 space-y-12">
          <div className="bg-gray-100 rounded-3xl border-8 border-black p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-6xl w-full">
            <div className="text-center space-y-8">
              <h1 className="text-4xl md:text-5xl font-black text-black leading-tight">
                Your Video Preview
              </h1>
              <div className="bg-black rounded-2xl p-4 relative">
                {videoUrl ? (
                  <>
                    <video 
                      controls 
                      className="w-full rounded-xl"
                      src={videoUrl}
                    >
                      Your browser does not support the video tag.
                    </video>
                    <Link href="/upload">
                      <button className="absolute top-6 right-6 bg-white hover:bg-gray-100 text-black font-black text-sm px-4 py-2 rounded-full border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all">
                        Replace video
                      </button>
                    </Link>
                  </>
                ) : (
                  <div className="w-full h-64 bg-gray-800 rounded-xl flex items-center justify-center">
                    <p className="text-white text-xl">No video selected</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-3xl border-8 border-black p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-6xl w-full">
            <div className="space-y-8">
              <h2 className="text-3xl font-black text-black text-center">Order Your Flipbook</h2>
              <div className="bg-white rounded-2xl border-4 border-black p-6">
                <h3 className="text-2xl font-black text-black mb-4">Pricing</h3>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold">Flipbook Creation</span>
                  <span className="text-2xl font-black">$29.99</span>
                </div>
              </div>
              <div className="bg-white rounded-2xl border-4 border-black p-6">
                <h3 className="text-2xl font-black text-black mb-4">Choose a flipbook cover color:</h3>
                <div className="grid grid-cols-7 gap-3 mb-3">
                  <div 
                    className={`w-12 h-12 bg-white border-4 rounded-full cursor-pointer flex items-center justify-center transition-all ${selectedColor === "white" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("white")}
                  ></div>
                  <div 
                    className={`w-12 h-12 bg-yellow-200 border-4 rounded-full cursor-pointer transition-all ${selectedColor === "yellow-200" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("yellow-200")}
                  ></div>
                  <div 
                    className={`w-12 h-12 bg-yellow-400 border-4 rounded-full cursor-pointer transition-all ${selectedColor === "yellow-400" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("yellow-400")}
                  ></div>
                  <div 
                    className={`w-12 h-12 bg-pink-200 border-4 rounded-full cursor-pointer transition-all ${selectedColor === "pink-200" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("pink-200")}
                  ></div>
                  <div 
                    className={`w-12 h-12 bg-blue-200 border-4 rounded-full cursor-pointer transition-all ${selectedColor === "blue-200" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("blue-200")}
                  ></div>
                  <div 
                    className={`w-12 h-12 bg-green-200 border-4 rounded-full cursor-pointer transition-all ${selectedColor === "green-200" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("green-200")}
                  ></div>
                  <div 
                    className={`w-12 h-12 bg-purple-200 border-4 rounded-full cursor-pointer transition-all ${selectedColor === "purple-200" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("purple-200")}
                  ></div>
                </div>
                <div className="grid grid-cols-7 gap-3">
                  <div 
                    className={`w-12 h-12 bg-orange-300 border-4 rounded-full cursor-pointer transition-all ${selectedColor === "orange-300" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("orange-300")}
                  ></div>
                  <div 
                    className={`w-12 h-12 bg-red-400 border-4 rounded-full cursor-pointer transition-all ${selectedColor === "red-400" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("red-400")}
                  ></div>
                  <div 
                    className={`w-12 h-12 bg-blue-600 border-4 rounded-full cursor-pointer transition-all ${selectedColor === "blue-600" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("blue-600")}
                  ></div>
                  <div 
                    className={`w-12 h-12 bg-yellow-500 border-4 rounded-full cursor-pointer transition-all ${selectedColor === "yellow-500" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("yellow-500")}
                  ></div>
                  <div 
                    className={`w-12 h-12 bg-green-600 border-4 rounded-full cursor-pointer transition-all ${selectedColor === "green-600" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("green-600")}
                  ></div>
                  <div 
                    className={`w-12 h-12 bg-amber-700 border-4 rounded-full cursor-pointer transition-all ${selectedColor === "amber-700" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("amber-700")}
                  ></div>
                  <div 
                    className={`w-12 h-12 bg-black border-4 rounded-full cursor-pointer transition-all ${selectedColor === "black" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("black")}
                  ></div>
                </div>
              </div>
              <div className="bg-white rounded-2xl border-4 border-black p-6">
                <h3 className="text-2xl font-black text-black mb-4">Shipping Options</h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3">
                    <input 
                      type="radio" 
                      name="shipping" 
                      value="standard" 
                      checked={shippingOption === "standard"}
                      onChange={(e) => setShippingOption(e.target.value)}
                      className="w-5 h-5" 
                    />
                    <span className="text-lg font-bold">Standard Shipping (10-45 days) - FREE</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input 
                      type="radio" 
                      name="shipping" 
                      value="express" 
                      checked={shippingOption === "express"}
                      onChange={(e) => setShippingOption(e.target.value)}
                      className="w-5 h-5" 
                    />
                    <span className="text-lg font-bold">Express Shipping (3-7 days) - $15.00</span>
                  </label>
                </div>
              </div>
              <div className="bg-white rounded-2xl border-4 border-black p-6">
                <h3 className="text-2xl font-black text-black mb-4">Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    value={customerInfo.firstName}
                    onChange={(e) => setCustomerInfo({...customerInfo, firstName: e.target.value})}
                    className="p-3 border-2 border-black rounded-lg font-bold"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    value={customerInfo.lastName}
                    onChange={(e) => setCustomerInfo({...customerInfo, lastName: e.target.value})}
                    className="p-3 border-2 border-black rounded-lg font-bold"
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                    className="p-3 border-2 border-black rounded-lg font-bold"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone" 
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    className="p-3 border-2 border-black rounded-lg font-bold"
                  />
                </div>
              </div>
              <div className="bg-white rounded-2xl border-4 border-black p-6">
                <h3 className="text-2xl font-black text-black mb-4">Shipping Address</h3>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Street Address" 
                    value={customerInfo.streetAddress}
                    onChange={(e) => setCustomerInfo({...customerInfo, streetAddress: e.target.value})}
                    className="w-full p-3 border-2 border-black rounded-lg font-bold"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="City" 
                      value={customerInfo.city}
                      onChange={(e) => setCustomerInfo({...customerInfo, city: e.target.value})}
                      className="p-3 border-2 border-black rounded-lg font-bold"
                    />
                    <input 
                      type="text" 
                      placeholder="State/Province" 
                      value={customerInfo.state}
                      onChange={(e) => setCustomerInfo({...customerInfo, state: e.target.value})}
                      className="p-3 border-2 border-black rounded-lg font-bold"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input 
                      type="text" 
                      placeholder="ZIP/Postal Code" 
                      value={customerInfo.zipCode}
                      onChange={(e) => setCustomerInfo({...customerInfo, zipCode: e.target.value})}
                      className="p-3 border-2 border-black rounded-lg font-bold"
                    />
                    <select 
                      value={customerInfo.country}
                      onChange={(e) => setCustomerInfo({...customerInfo, country: e.target.value})}
                      className="p-3 border-2 border-black rounded-lg font-bold bg-white"
                    >
                      <option value="">Select Country</option>
                      <option value="US">United States</option>
                      <option value="CA">Canada</option>
                      <option value="GB">United Kingdom</option>
                      <option value="AU">Australia</option>
                      <option value="DE">Germany</option>
                      <option value="FR">France</option>
                      <option value="JP">Japan</option>
                      <option value="MX">Mexico</option>
                      <option value="BR">Brazil</option>
                      <option value="IN">India</option>
                      <option value="IT">Italy</option>
                      <option value="ES">Spain</option>
                      <option value="NL">Netherlands</option>
                      <option value="SE">Sweden</option>
                      <option value="NO">Norway</option>
                      <option value="DK">Denmark</option>
                      <option value="FI">Finland</option>
                      <option value="CH">Switzerland</option>
                      <option value="AT">Austria</option>
                      <option value="BE">Belgium</option>
                      <option value="IE">Ireland</option>
                      <option value="NZ">New Zealand</option>
                      <option value="SG">Singapore</option>
                      <option value="HK">Hong Kong</option>
                      <option value="KR">South Korea</option>
                      <option value="TW">Taiwan</option>
                      <option value="TH">Thailand</option>
                      <option value="MY">Malaysia</option>
                      <option value="PH">Philippines</option>
                      <option value="VN">Vietnam</option>
                      <option value="ID">Indonesia</option>
                      <option value="SA">Saudi Arabia</option>
                      <option value="AE">United Arab Emirates</option>
                      <option value="IL">Israel</option>
                      <option value="TR">Turkey</option>
                      <option value="PL">Poland</option>
                      <option value="CZ">Czech Republic</option>
                      <option value="HU">Hungary</option>
                      <option value="RO">Romania</option>
                      <option value="BG">Bulgaria</option>
                      <option value="HR">Croatia</option>
                      <option value="SI">Slovenia</option>
                      <option value="SK">Slovakia</option>
                      <option value="LT">Lithuania</option>
                      <option value="LV">Latvia</option>
                      <option value="EE">Estonia</option>
                      <option value="LU">Luxembourg</option>
                      <option value="PT">Portugal</option>
                      <option value="GR">Greece</option>
                      <option value="CY">Cyprus</option>
                      <option value="MT">Malta</option>
                      <option value="IS">Iceland</option>
                      <option value="LI">Liechtenstein</option>
                      <option value="MC">Monaco</option>
                      <option value="SM">San Marino</option>
                      <option value="VA">Vatican City</option>
                      <option value="AD">Andorra</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="bg-white rounded-2xl border-4 border-black p-6">
                <h3 className="text-2xl font-black text-black mb-4">Payment</h3>
                {paymentError && (
                  <div className="mb-4 p-4 bg-red-100 border-2 border-red-500 rounded-xl">
                    <p className="text-red-700 font-bold text-lg">{paymentError}</p>
                  </div>
                )}
                <div className="flex justify-between items-center mb-6 p-4 bg-gray-50 rounded-lg">
                  <span className="text-2xl font-black">Total:</span>
                  <span className="text-3xl font-black">${totalAmount.toFixed(2)}</span>
                </div>
                <PaymentForm
                  amount={totalAmount}
                  shippingOption={shippingOption}
                  selectedColor={selectedColor}
                  videoUrl={videoUrl || ''}
                  customerInfo={customerInfo}
                  onSuccess={() => {}}
                  onError={handlePaymentError}
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

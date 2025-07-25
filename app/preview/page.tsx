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
import { MobileNav, MobileBottomNav } from "@/components/mobile-nav"
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
  const [currency, setCurrency] = useState('usd');
  const [price, setPrice] = useState(29.99);

  // List of EU country codes
  const EU_COUNTRIES = [
    'AT','BE','BG','HR','CY','CZ','DK','EE','FI','FR','DE','GR','HU','IE','IT','LV','LT','LU','MT','NL','PL','PT','RO','SK','SI','ES','SE'
  ];

  const basePrice = 29.99
  const totalAmount = shippingOption === "express" ? price + 15 : price;

  const handlePaymentError = (error: string) => {
    setPaymentError(error)
  }

  useEffect(() => {
    mixpanel.track('Preview Page Visit');
  }, []);

  // Auto-detect country from IP and set currency/price
  useEffect(() => {
    if (!customerInfo.country) {
      fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
          if (data && data.country_code) {
            setCustomerInfo(info => ({
              ...info,
              country: data.country_code
            }));
            // Set currency and price
            if (data.country_code === 'US') {
              setCurrency('usd');
              setPrice(29.99);
            } else if (data.country_code === 'CA') {
              setCurrency('cad');
              setPrice(39.99);
            } else if (EU_COUNTRIES.includes(data.country_code)) {
              setCurrency('eur');
              setPrice(34.99);
            } else {
              setCurrency('usd');
              setPrice(29.99);
            }
          }
        })
        .catch(() => {});
    }
  }, []);

  // If user manually changes country, update currency/price
  useEffect(() => {
    if (customerInfo.country) {
      if (customerInfo.country === 'US') {
        setCurrency('usd');
        setPrice(29.99);
      } else if (customerInfo.country === 'CA') {
        setCurrency('cad');
        setPrice(39.99);
      } else if (EU_COUNTRIES.includes(customerInfo.country)) {
        setCurrency('eur');
        setPrice(34.99);
      } else {
        setCurrency('usd');
        setPrice(29.99);
      }
    }
  }, [customerInfo.country]);

  return (
    <div className="min-h-screen bg-yellow-400" style={{ backgroundColor: "#FECB23" }}>
      <div className="min-h-screen border-4 md:border-8 border-black m-2 md:m-4 rounded-2xl md:rounded-3xl overflow-hidden">
        <header className="flex items-center justify-between p-2 md:p-3 border-b-2 md:border-b-4 border-black" style={{ backgroundColor: "#FECB23" }}>
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
          <MobileNav />
        </header>
        <main className="flex flex-col items-center justify-center px-4 md:px-8 py-8 md:py-16 space-y-8 md:space-y-12 pb-20 md:pb-0">
          <div className="mobile-card bg-gray-100 rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-6xl w-full">
            <div className="text-center space-y-6 md:space-y-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight">
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
                      <button className="absolute top-4 right-4 md:top-6 md:right-6 bg-white hover:bg-gray-100 text-black font-black text-sm px-3 py-2 md:px-4 md:py-2 rounded-full border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all touch-target">
                        Replace video
                      </button>
                    </Link>
                  </>
                ) : (
                  <div className="w-full h-48 md:h-64 bg-gray-800 rounded-xl flex items-center justify-center">
                    <p className="text-white text-lg md:text-xl">No video selected</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="mobile-card bg-gray-100 rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-6xl w-full">
            <div className="space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl font-black text-black text-center">Order Your Flipbook</h2>
              <div className="bg-white rounded-2xl border-4 border-black p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4">Pricing</h3>
                <div className="flex justify-between items-center">
                  <span className="text-lg md:text-xl font-bold">Flipbook Creation</span>
                  <span className="text-xl md:text-2xl font-black">{currency === 'eur' ? '€' : '$'}{price.toFixed(2)} {currency.toUpperCase()}</span>
                </div>
              </div>
              <div className="bg-white rounded-2xl border-4 border-black p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4">Choose a flipbook cover color:</h3>
                <div className="grid grid-cols-4 md:grid-cols-7 gap-2 md:gap-3 mb-3">
                  <div 
                    className={`w-10 h-10 md:w-12 md:h-12 bg-white border-4 rounded-full cursor-pointer flex items-center justify-center transition-all touch-target ${selectedColor === "white" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("white")}
                  ></div>
                  <div 
                    className={`w-10 h-10 md:w-12 md:h-12 bg-yellow-200 border-4 rounded-full cursor-pointer transition-all touch-target ${selectedColor === "yellow-200" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("yellow-200")}
                  ></div>
                  <div 
                    className={`w-10 h-10 md:w-12 md:h-12 bg-yellow-400 border-4 rounded-full cursor-pointer transition-all touch-target ${selectedColor === "yellow-400" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("yellow-400")}
                  ></div>
                  <div 
                    className={`w-10 h-10 md:w-12 md:h-12 bg-pink-200 border-4 rounded-full cursor-pointer transition-all touch-target ${selectedColor === "pink-200" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("pink-200")}
                  ></div>
                  <div 
                    className={`w-10 h-10 md:w-12 md:h-12 bg-blue-200 border-4 rounded-full cursor-pointer transition-all touch-target ${selectedColor === "blue-200" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("blue-200")}
                  ></div>
                  <div 
                    className={`w-10 h-10 md:w-12 md:h-12 bg-green-200 border-4 rounded-full cursor-pointer transition-all touch-target ${selectedColor === "green-200" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("green-200")}
                  ></div>
                  <div 
                    className={`w-10 h-10 md:w-12 md:h-12 bg-purple-200 border-4 rounded-full cursor-pointer transition-all touch-target ${selectedColor === "purple-200" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("purple-200")}
                  ></div>
                </div>
                <div className="grid grid-cols-4 md:grid-cols-7 gap-2 md:gap-3">
                  <div 
                    className={`w-10 h-10 md:w-12 md:h-12 bg-orange-300 border-4 rounded-full cursor-pointer transition-all touch-target ${selectedColor === "orange-300" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("orange-300")}
                  ></div>
                  <div 
                    className={`w-10 h-10 md:w-12 md:h-12 bg-red-400 border-4 rounded-full cursor-pointer transition-all touch-target ${selectedColor === "red-400" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("red-400")}
                  ></div>
                  <div 
                    className={`w-10 h-10 md:w-12 md:h-12 bg-blue-600 border-4 rounded-full cursor-pointer transition-all touch-target ${selectedColor === "blue-600" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("blue-600")}
                  ></div>
                  <div 
                    className={`w-10 h-10 md:w-12 md:h-12 bg-yellow-500 border-4 rounded-full cursor-pointer transition-all touch-target ${selectedColor === "yellow-500" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("yellow-500")}
                  ></div>
                  <div 
                    className={`w-10 h-10 md:w-12 md:h-12 bg-green-600 border-4 rounded-full cursor-pointer transition-all touch-target ${selectedColor === "green-600" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("green-600")}
                  ></div>
                  <div 
                    className={`w-10 h-10 md:w-12 md:h-12 bg-amber-700 border-4 rounded-full cursor-pointer transition-all touch-target ${selectedColor === "amber-700" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("amber-700")}
                  ></div>
                  <div 
                    className={`w-10 h-10 md:w-12 md:h-12 bg-black border-4 rounded-full cursor-pointer transition-all touch-target ${selectedColor === "black" ? "border-blue-500 scale-110" : "border-black hover:scale-105"}`}
                    onClick={() => setSelectedColor("black")}
                  ></div>
                </div>
              </div>
              <div className="bg-white rounded-2xl border-4 border-black p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4">Shipping Options</h3>
                <div className="space-y-3">
                  <label className="flex items-center space-x-3 touch-target">
                    <input 
                      type="radio" 
                      name="shipping" 
                      value="standard" 
                      checked={shippingOption === "standard"}
                      onChange={(e) => setShippingOption(e.target.value)}
                      className="w-5 h-5" 
                    />
                    <span className="text-base md:text-lg font-bold">Standard Shipping (10-45 days) - FREE</span>
                  </label>
                  <label className="flex items-center space-x-3 touch-target">
                    <input 
                      type="radio" 
                      name="shipping" 
                      value="express" 
                      checked={shippingOption === "express"}
                      onChange={(e) => setShippingOption(e.target.value)}
                      className="w-5 h-5" 
                    />
                    <span className="text-base md:text-lg font-bold">Express Shipping (3-7 days) - $15.00</span>
                  </label>
                </div>
              </div>
              <div className="bg-white rounded-2xl border-4 border-black p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4">Personal Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                  <input 
                    type="text" 
                    placeholder="First Name" 
                    value={customerInfo.firstName}
                    onChange={(e) => setCustomerInfo({...customerInfo, firstName: e.target.value})}
                    className="p-3 border-2 border-black rounded-lg font-bold text-base"
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name" 
                    value={customerInfo.lastName}
                    onChange={(e) => setCustomerInfo({...customerInfo, lastName: e.target.value})}
                    className="p-3 border-2 border-black rounded-lg font-bold text-base"
                  />
                  <input 
                    type="email" 
                    placeholder="Email" 
                    value={customerInfo.email}
                    onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                    className="p-3 border-2 border-black rounded-lg font-bold text-base"
                  />
                  <input 
                    type="tel" 
                    placeholder="Phone" 
                    value={customerInfo.phone}
                    onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                    className="p-3 border-2 border-black rounded-lg font-bold text-base"
                  />
                </div>
              </div>
              <div className="bg-white rounded-2xl border-4 border-black p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4">Shipping Address</h3>
                <div className="space-y-3 md:space-y-4">
                  <input 
                    type="text" 
                    placeholder="Street Address" 
                    value={customerInfo.streetAddress}
                    onChange={(e) => setCustomerInfo({...customerInfo, streetAddress: e.target.value})}
                    className="w-full p-3 border-2 border-black rounded-lg font-bold text-base"
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <input 
                      type="text" 
                      placeholder="City" 
                      value={customerInfo.city}
                      onChange={(e) => setCustomerInfo({...customerInfo, city: e.target.value})}
                      className="p-3 border-2 border-black rounded-lg font-bold text-base"
                    />
                    <input 
                      type="text" 
                      placeholder="State/Province" 
                      value={customerInfo.state}
                      onChange={(e) => setCustomerInfo({...customerInfo, state: e.target.value})}
                      className="p-3 border-2 border-black rounded-lg font-bold text-base"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                    <input 
                      type="text" 
                      placeholder="ZIP/Postal Code" 
                      value={customerInfo.zipCode}
                      onChange={(e) => setCustomerInfo({...customerInfo, zipCode: e.target.value})}
                      className="p-3 border-2 border-black rounded-lg font-bold text-base"
                    />
                    <select 
                      value={customerInfo.country}
                      onChange={(e) => setCustomerInfo({...customerInfo, country: e.target.value})}
                      className="p-3 border-2 border-black rounded-lg font-bold bg-white text-base"
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
              <div className="bg-white rounded-2xl border-4 border-black p-4 md:p-6">
                <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4">Payment</h3>
                {paymentError && (
                  <div className="mb-4 p-4 bg-red-100 border-2 border-red-500 rounded-xl">
                    <p className="text-red-700 font-bold text-base md:text-lg">{paymentError}</p>
                  </div>
                )}
                <div className="flex justify-between items-center mb-4 md:mb-6 p-4 bg-gray-50 rounded-lg">
                  <span className="text-xl md:text-2xl font-black">Total:</span>
                  <span className="text-2xl md:text-3xl font-black">{currency === 'eur' ? '€' : '$'}{totalAmount.toFixed(2)} {currency.toUpperCase()}</span>
                </div>
                <PaymentForm
                  amount={totalAmount}
                  currency={currency}
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
        <MobileBottomNav />
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

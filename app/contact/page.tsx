"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
      } else {
        setError("Failed to send message. Please try again.")
      }
    } catch (err) {
      setError("Failed to send message. Please try again.")
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
            {/* Header */}
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6">
                Contact Us
              </h1>
              <p className="text-xl md:text-2xl text-black">
                Have questions? We'd love to hear from you!
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
              {/* Contact Form */}
              <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <h2 className="text-2xl md:text-3xl font-black text-black mb-6 text-center">
                  Send us a Message
                </h2>
                
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="text-4xl mb-4">✅</div>
                    <h3 className="text-xl md:text-2xl font-black text-black mb-2">Message Sent!</h3>
                    <p className="text-base md:text-lg text-gray-700">
                      Thank you for reaching out. We'll get back to you soon!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {error && (
                      <div className="p-4 bg-red-100 border-4 border-red-500 rounded-xl">
                        <p className="text-red-700 font-bold text-center">{error}</p>
                      </div>
                    )}
                    
                    <div>
                      <label htmlFor="name" className="block text-sm md:text-base font-black text-black mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 md:p-4 border-4 border-black rounded-xl text-base md:text-lg"
                        style={{ fontSize: '16px' }}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm md:text-base font-black text-black mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 md:p-4 border-4 border-black rounded-xl text-base md:text-lg"
                        style={{ fontSize: '16px' }}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm md:text-base font-black text-black mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full p-3 md:p-4 border-4 border-black rounded-xl text-base md:text-lg resize-none"
                        style={{ fontSize: '16px' }}
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="mobile-button w-full bg-orange-400 hover:bg-orange-500 text-black font-black text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                      style={{ backgroundColor: "#FF6B6B" }}
                    >
                      Send Message
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h2 className="text-2xl md:text-3xl font-black text-black mb-6 text-center">
                    Other Ways to Reach Us
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl md:text-4xl">📧</div>
                      <div>
                        <h3 className="text-lg md:text-xl font-black text-black">Email</h3>
                        <p className="text-base md:text-lg text-gray-700">hello@cliptoflip.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl md:text-4xl">⏰</div>
                      <div>
                        <h3 className="text-lg md:text-xl font-black text-black">Response Time</h3>
                        <p className="text-base md:text-lg text-gray-700">Within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="text-3xl md:text-4xl">🌍</div>
                      <div>
                        <h3 className="text-lg md:text-xl font-black text-black">Location</h3>
                        <p className="text-base md:text-lg text-gray-700">Serving customers worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                  <h2 className="text-2xl md:text-3xl font-black text-black mb-6 text-center">
                    Frequently Asked Questions
                  </h2>
                  
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg md:text-xl font-black text-black mb-2">How long does shipping take?</h3>
                      <p className="text-base md:text-lg text-gray-700">
                        Standard shipping takes 5-7 business days. Express shipping is available for faster delivery.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg md:text-xl font-black text-black mb-2">What video formats do you support?</h3>
                      <p className="text-base md:text-lg text-gray-700">
                        We support most common video formats including MP4, MOV, AVI, and more.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg md:text-xl font-black text-black mb-2">Can I customize the cover color?</h3>
                      <p className="text-base md:text-lg text-gray-700">
                        Yes! You can choose from a variety of cover colors during the ordering process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 
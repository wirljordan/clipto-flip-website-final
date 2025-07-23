"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          to: 'cliptoflip.jordan@gmail.com'
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        const error = await response.text()
        setSubmitStatus('error')
        setErrorMessage(error || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen bg-yellow-400" style={{ backgroundColor: "#FECB23" }}>
      {/* Main container with thick black border */}
      <div className="min-h-screen border-8 border-black m-4 rounded-3xl overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between p-3 border-b-4 border-black" style={{ backgroundColor: "#FECB23" }}>
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center" style={{ backgroundColor: "#FECB23" }}>
              <Image
                src="/logo.png"
                alt="CLIPTO FLIP Logo"
                width={90}
                height={60}
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
            <Link href="/about" className="text-2xl font-black text-black hover:text-gray-700 transition-colors">
              ABOUT
            </Link>
            <Link href="/contact" className="text-2xl font-black text-black hover:text-gray-700 transition-colors">
              CONTACT
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center px-8 py-16">
          <div className="max-w-2xl w-full">
            {/* Contact Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-black text-black leading-tight mb-4">
                Contact Support
              </h1>
              <p className="text-xl font-bold text-gray-700">
                Need help with your order? We're here to help!
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-100 rounded-3xl border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              {/* Success Message */}
              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-100 border-4 border-green-500 rounded-xl">
                  <p className="text-green-700 font-bold text-lg text-center">
                    ✅ Message sent successfully! We'll get back to you soon.
                  </p>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-100 border-4 border-red-500 rounded-xl">
                  <p className="text-red-700 font-bold text-lg text-center">
                    ❌ {errorMessage}
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <Label htmlFor="name" className="text-lg font-bold text-black">
                    Your Name *
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2 text-lg p-4 border-4 border-black rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <Label htmlFor="email" className="text-lg font-bold text-black">
                    Your Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2 text-lg p-4 border-4 border-black rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Subject Field */}
                <div>
                  <Label htmlFor="subject" className="text-lg font-bold text-black">
                    Subject *
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-2 text-lg p-4 border-4 border-black rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message Field */}
                <div>
                  <Label htmlFor="message" className="text-lg font-bold text-black">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2 text-lg p-4 border-4 border-black rounded-xl focus:ring-4 focus:ring-blue-500 focus:border-blue-500 min-h-[150px] resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-400 hover:bg-orange-500 text-black font-black text-xl px-8 py-4 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{ backgroundColor: "#FF6B6B" }}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>

              {/* Contact Info */}
              <div className="mt-8 p-6 bg-white rounded-2xl border-4 border-black">
                <h3 className="text-xl font-black text-black mb-4">Other Ways to Reach Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">📧</span>
                    <div>
                      <span className="font-bold">Email:</span>
                      <p className="text-gray-600">cliptoflip.jordan@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">⏰</span>
                    <div>
                      <span className="font-bold">Response Time:</span>
                      <p className="text-gray-600">Within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">🔄</span>
                    <div>
                      <span className="font-bold">Business Hours:</span>
                      <p className="text-gray-600">Monday - Friday, 9 AM - 6 PM EST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to Home */}
            <div className="text-center mt-8">
              <Link href="/">
                <Button
                  className="bg-gray-600 hover:bg-gray-700 text-white font-black text-xl px-8 py-4 rounded-full border-4 border-black transition-all"
                >
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 
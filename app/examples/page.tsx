"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"
import { useState } from "react"
import { X } from "lucide-react"

export default function ExamplesPage() {
  const [selectedExample, setSelectedExample] = useState<any>(null)

  const examples = [
    {
      title: "Sentimental flipbook gift for first time dad",
      description: "This custom flipbook captures a quiet moment between dad and daughter - a first-time fatherhood memory, printed and in motion. A meaningful keepsake he'll flip through long after the moment has passed.",
      image: "https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/example-dad-daughter.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay9leGFtcGxlLWRhZC1kYXVnaHRlci5qcGciLCJpYXQiOjE3NTM0OTQ1NTMsImV4cCI6MTc4NTAzMDU1M30.wAk97tpfkwa6jete0yt1YSVzE21GlASe2vuoCcsdW1Q",
      video: "https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/video-14-2.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay92aWRlby0xNC0yLm1wNCIsImlhdCI6MTc1Mzc0NzY0NiwiZXhwIjoxNzg1MjgzNjQ2fQ.97jnntoFd_0Pg3YB3r6gVMCJ0JdRfwFuRJqGfRS7rAw",
      bgColor: "bg-blue-100"
    },
    {
      title: "Gift for mom from son",
      description: "Take one video - maybe a small moment she didn't know you caught - and turn it into a flipbook she'll never forget. It's a personal gift from son to mom, full of motion, memory, and meaning.",
      image: "https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/example-mom-son.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay9leGFtcGxlLW1vbS1zb24uanBnIiwiaWF0IjoxNzUzNDk0NTUzLCJleHAiOjE3ODUwMzA1NTN9.wAk97tpfkwa6jete0yt1YSVzE21GlASe2vuoCcsdW1Q",
      video: "https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/video-49-2.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay92aWRlby00OS0yLm1wNCIsImlhdCI6MTc1Mzc0Nzg4NCwiZXhwIjoxNzg1MjgzODg0fQ.BEJ6KEAmA1xxSl9uUHKO7JSRc2JPRmjbuW5c0nSFEto",
      bgColor: "bg-amber-100"
    },
    {
      title: "Gift for best friend",
      description: "Remember that one night out - the bad karaoke, the street dancing, the almost-too-loud laugh? Turn that video into a flipbook your best friend will never stop flipping through. A weird, wonderful gift that says 'we really did that.'",
      image: "https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/example-best-friend.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay9leGFtcGxlLWJlc3QtZnJpZW5kLmpwZyIsImlhdCI6MTc1MzQ5NDU1MywiZXhwIjoxNzg1MDMwNTUzfQ.wAk97tpfkwa6jete0yt1YSVzE21GlASe2vuoCcsdW1Q",
      video: "https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/video-8-2.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay92aWRlby04LTIubXA0IiwiaWF0IjoxNzUzNzQ4MDg5LCJleHAiOjE3ODUyODQwODl9.iKSbG8RrcQ_en_GJrplc8W42zNVW_b1Ha_DrvV4ZZzw",
      bgColor: "bg-green-100"
    },
    {
      title: "Personalized gift for 10 year old",
      description: "Looking for a personalized gift for a 10-year-old that actually means something? Turn a fun video - a birthday dance, a silly moment, a big smile - into a custom flipbook they can hold, flip, and show off forever.",
      image: "https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/example-10-year-old.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay9leGFtcGxlLTEwLXllYXItb2xkLmpwZyIsImlhdCI6MTc1MzQ5NDU1MywiZXhwIjoxNzg1MDMwNTUzfQ.wAk97tpfkwa6jete0yt1YSVzE21GlASe2vuoCcsdW1Q",
      video: "https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/video-22-2.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay92aWRlby0yMi0yLm1wNCIsImlhdCI6MTc1Mzc0ODM5MCwiZXhwIjoxNzg1Mjg0MzkwfQ.o3WwknIsNizEBaQHKF_-99OXsI6BGgxC8BO9lJzi98o",
      bgColor: "bg-green-100"
    },
    {
      title: "Travel memory gift",
      description: "Turn your favorite travel video into a flipbook you can hold - a real souvenir made from motion, not magnets. The perfect travel memory gift for your best friend, your partner, or yourself.",
      image: "https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/example-wedding.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay9leGFtcGxlLXdlZGRpbmcuanBnIiwiaWF0IjoxNzUzNDk0NTUzLCJleHAiOjE3ODUwMzA1NTN9.wAk97tpfkwa6jete0yt1YSVzE21GlASe2vuoCcsdW1Q",
      video: "https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/video-28-2.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay92aWRlby0yOC0yLm1wNCIsImlhdCI6MTc1Mzc0ODUyNiwiZXhwIjoxNzg1Mjg0NTI2fQ.e9L-kDQuOgs99RA5y6iPhO7KU7gHfa1lyeS2O__adho",
      bgColor: "bg-pink-100"
    },
    {
      title: "A sentimental gift for dad",
      description: "A sentimental gift for dad that flips through real memories - not just photos, but full moments caught in motion. This custom flipbook turns your favorite video into something he can hold, replay, and never forget.",
      image: "https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/example-graduation.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay9leGFtcGxlLWdyYWR1YXRpb24uanBnIiwiaWF0IjoxNzUzNDk0NTUzLCJleHAiOjE3ODUwMzA1NTN9.wAk97tpfkwa6jete0yt1YSVzE21GlASe2vuoCcsdW1Q",
      video: "https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/video-13-2.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay92aWRlby0xMy0yLm1wNCIsImlhdCI6MTc1Mzc0ODY1MCwiZXhwIjoxNzg1Mjg0NjUwfQ.aKeXsNIrtOU5NL8duPLWfk_NhmCm1YrMFq3QYFS9Nxk",
      bgColor: "bg-purple-100"
    }
  ]

  return (
    <div className="min-h-screen bg-yellow-400" style={{ backgroundColor: "#FECB23" }}>
      {/* Main container with thick black border */}
      <div className="min-h-screen border-4 md:border-8 border-black m-2 md:m-4 rounded-2xl md:rounded-3xl overflow-hidden" style={{ backgroundColor: "#FECB23" }}>
        {/* Header */}
        <header className="flex items-center justify-between p-3 md:p-4 border-b-2 md:border-b-4 border-black mobile-header" style={{ backgroundColor: "#FECB23" }}>
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
            <Link href="/examples" className="text-2xl font-black text-black hover:text-gray-700 transition-colors">
              EXAMPLES
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
        <main className="px-4 md:px-8 py-8 md:py-12 mobile-section-spacing">
          <div className="max-w-6xl mx-auto">
            {/* Page Title */}
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-4 mobile-space-y-4">
                Flipbook Examples
              </h1>
              <p className="text-lg md:text-xl text-black max-w-2xl mx-auto mobile-text-spacing">
                See how others have turned their videos into meaningful flipbook gifts
              </p>
            </div>

            {/* Examples Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mobile-grid-spacing">
              {examples.map((example, index) => (
                <div 
                  key={index} 
                  className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mobile-card-spacing cursor-pointer hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all"
                  onClick={() => setSelectedExample(example)}
                >
                  {/* Image or Video */}
                  <div className={`w-full h-64 md:h-80 rounded-xl ${example.bgColor} flex items-center justify-center mb-4 md:mb-6 overflow-hidden`}>
                    {example.video ? (
                      <video
                        src={example.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-xl"
                        style={{ backgroundColor: "#FECB23" }}
                      />
                    ) : (
                      <div className="relative w-32 h-24 md:w-40 md:h-32 bg-white rounded-lg border-2 border-black shadow-lg flex items-center justify-center">
                        <div className="text-4xl md:text-5xl">📖</div>
                      </div>
                    )}
                  </div>
                  
                  {/* Content */}
                  <div className="space-y-3 md:space-y-4">
                    <h3 className="text-lg md:text-xl font-black text-black mobile-space-y-4">
                      {example.title}
                    </h3>
                    <p className="text-sm md:text-base text-gray-700 mobile-text-spacing leading-relaxed">
                      {example.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-12 md:mt-16 text-center">
              <div className="mobile-card bg-green-500 rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-8 md:p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mobile-card-spacing">
                <h2 className="text-2xl md:text-3xl font-black text-white mb-4 mobile-space-y-4">
                  Give the gift of motion
                </h2>
                <p className="text-lg md:text-xl text-white mb-6 md:mb-8 mobile-text-spacing">
                  Surprise someone special with a flipbook made from your video. A unique gift that captures memories in motion.
                </p>
                <Link href="/upload">
                  <Button
                    className="mobile-button bg-black hover:bg-gray-800 text-white font-black text-lg md:text-xl px-8 md:px-10 py-4 md:py-6 rounded-full border-4 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all"
                  >
                    Start your order
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </main>

        {/* Modal */}
        {selectedExample && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl md:rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              {/* Modal Header */}
              <div className="flex justify-between items-center p-4 md:p-6 border-b-2 border-black">
                <h2 className="text-xl md:text-2xl font-black text-black">
                  {selectedExample.title}
                </h2>
                <button
                  onClick={() => setSelectedExample(null)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="h-6 w-6 text-black" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="flex flex-col lg:flex-row">
                {/* Left Section - Visual Content */}
                <div className="lg:w-1/2 p-4 md:p-6">
                  <div className={`w-full h-64 md:h-80 rounded-xl ${selectedExample.bgColor} flex items-center justify-center overflow-hidden`}>
                    {selectedExample.video ? (
                      <video
                        src={selectedExample.video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover rounded-xl"
                        style={{ backgroundColor: "#FECB23" }}
                      />
                    ) : (
                      <div className="relative w-48 h-36 md:w-56 md:h-40 bg-white rounded-lg border-2 border-black shadow-lg flex items-center justify-center">
                        <div className="text-6xl md:text-7xl">📖</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Section - Text and CTA */}
                <div className="lg:w-1/2 p-4 md:p-6 flex flex-col justify-between">
                  <div className="space-y-4 md:space-y-6">
                    <h3 className="text-2xl md:text-3xl font-black text-black">
                      {selectedExample.title}
                    </h3>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                      {selectedExample.description}
                    </p>
                    
                    {/* Features List */}
                    <div className="space-y-2 md:space-y-3">
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-sm md:text-base text-black">High-quality print on premium paper</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-sm md:text-base text-black">Customizable cover colors</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-sm md:text-base text-black">Fast shipping worldwide</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                        <span className="text-sm md:text-base text-black">Bulk discounts available</span>
                      </div>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="mt-6 md:mt-8">
                    <Link href="/upload">
                      <Button
                        className="w-full bg-black hover:bg-gray-800 text-white font-black text-lg md:text-xl px-8 py-4 rounded-xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                      >
                        Make your flipbook
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export default function AboutPage() {
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
            {/* Hero Section */}
            <div className="text-center mb-12 md:mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black mb-6">
                About ClipToFlip
              </h1>
              <p className="text-xl md:text-2xl text-black max-w-4xl mx-auto">
                We turn your precious video moments into beautiful, hand-held flipbooks that bring memories to life.
              </p>
            </div>

            {/* Story Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center mb-16 md:mb-20">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-black text-black">
                  Our Story
                </h2>
                <p className="text-lg md:text-xl text-black leading-relaxed">
                  ClipToFlip was born from a simple idea: what if we could turn those fleeting video moments into something tangible, something you could hold in your hands and flip through whenever you wanted to relive a special memory?
                </p>
                <p className="text-lg md:text-xl text-black leading-relaxed">
                  We believe that memories are meant to be shared, touched, and experienced in a way that goes beyond a screen. That's why we've created a process that transforms your videos into beautiful, high-quality flipbooks that capture every frame of your most precious moments.
                </p>
              </div>
              <div className="flex justify-center">
                <Image
                  src="https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/Untitled%20design-9.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay9VbnRpdGxlZCBkZXNpZ24tOS5tcDQiLCJpYXQiOjE3NTMyMjUwMDYsImV4cCI6MjA2ODU4NTAwNn0.lnunTceuXcFT7MO2IUFd_9qVIK8HC2JjY7o3oWOAsiI"
                  alt="Flipbook Preview"
                  width={400}
                  height={300}
                  className="rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                />
              </div>
            </div>

            {/* Mission Section */}
            <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-8 md:p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-16 md:mb-20">
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
                  Our Mission
                </h2>
                <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                  To help people preserve and share their most meaningful moments in a unique, tangible format that brings joy and nostalgia every time it's flipped through. We want to make it easy for anyone to transform their digital memories into something physical and lasting.
                </p>
              </div>
            </div>

            {/* Values Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 md:mb-20">
              <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
                <div className="text-4xl md:text-5xl mb-4">✨</div>
                <h3 className="text-xl md:text-2xl font-black text-black mb-4">Quality</h3>
                <p className="text-base md:text-lg text-gray-700">
                  We use premium materials and careful craftsmanship to ensure every flipbook is built to last and look beautiful.
                </p>
              </div>
              
              <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
                <div className="text-4xl md:text-5xl mb-4">💝</div>
                <h3 className="text-xl md:text-2xl font-black text-black mb-4">Personal Touch</h3>
                <p className="text-base md:text-lg text-gray-700">
                  Every flipbook is unique, just like your memories. We treat each order with the care and attention it deserves.
                </p>
              </div>
              
              <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] text-center">
                <div className="text-4xl md:text-5xl mb-4">🚀</div>
                <h3 className="text-xl md:text-2xl font-black text-black mb-4">Innovation</h3>
                <p className="text-base md:text-lg text-gray-700">
                  We're constantly improving our process to make it easier and more enjoyable to create your perfect flipbook.
                </p>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-black text-black mb-6">
                Ready to Create Your Flipbook?
              </h2>
              <p className="text-lg md:text-xl text-black mb-8">
                Turn your favorite video into a beautiful, lasting memory today.
              </p>
              <Link href="/upload">
                <Button
                  className="mobile-button bg-orange-400 hover:bg-orange-500 text-black font-black text-xl md:text-2xl px-8 md:px-12 py-4 md:py-6 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                  style={{ backgroundColor: "#FF6B6B" }}
                >
                  🎁 Start Creating Now
                </Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 
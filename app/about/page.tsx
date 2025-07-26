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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Image - above on mobile, left on desktop */}
              <div className="flex justify-center order-1 lg:order-1">
                <Image
                  src="https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/ChatGPT%20Image%20Jul%2023,%202025%20at%2004_37_59%20PM.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay9DaGF0R1BUIEltYWdlIEp1bCAyMywgMjAyNSBhdCAwNF8zN181OSBQTS5wbmciLCJpYXQiOjE3NTM0OTQ1NTMsImV4cCI6MTc4NTAzMDU1M30.wAk97tpfkwa6jete0yt1YSVzE21GlASe2vuoCcsdW1Q"
                  alt="ClipToFlip Flipbook"
                  width={400}
                  height={300}
                  className="rounded-2xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
                />
              </div>

              {/* Text - below on mobile, right on desktop */}
              <div className="space-y-6 order-2 lg:order-2">
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
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 
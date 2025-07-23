import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-yellow-400" style={{ backgroundColor: "#FECB23" }}>
      {/* Main container with thick black border */}
      <div className="min-h-screen border-8 border-black m-4 rounded-3xl overflow-hidden" style={{ backgroundColor: "#FECB23" }}>
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
            <Link href="#" className="text-2xl font-black text-black hover:text-gray-700 transition-colors">
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
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center px-8 py-16 space-y-12">
          {/* Flipbook Illustration */}
          <div className="flex items-center justify-center">
            <video
              src="https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/Untitled%20design-9.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay9VbnRpdGxlZCBkZXNpZ24tOS5tcDQiLCJpYXQiOjE3NTMyMjUwMDYsImV4cCI6MjA2ODU4NTAwNn0.lnunTceuXcFT7MO2IUFd_9qVIK8HC2JjY7o3oWOAsiI"
              width={500}
              height={400}
              className="object-contain"
              style={{ 
                backgroundColor: 'transparent',
                background: 'transparent'
              }}
              autoPlay
              loop
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Main Heading */}
          <div className="text-center space-y-6">
            <h1 className="text-6xl md:text-7xl font-black text-black leading-tight">
              Turn your video
              <br />
              into a flipbook
            </h1>

            <h2 className="text-3xl md:text-4xl font-black text-black mb-2">Your favorite video, now a gift they’ll never forget</h2>
            <p className="text-xl md:text-2xl text-black max-w-3xl mx-auto leading-relaxed mb-2">
              We turn your clips into custom flipbooks — perfect for birthdays, weddings, or just because.
            </p>
            <p className="italic text-lg md:text-xl text-black max-w-2xl mx-auto mb-2">Made to flip. Made to last.</p>
          </div>

          {/* CTA Button */}
          <Link href="/upload">
            <Button
              className="bg-orange-400 hover:bg-orange-500 text-black font-black text-xl px-8 py-3 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
              style={{ backgroundColor: "#FF6B6B" }}
            >
              ✨ Make One Now ✨
            </Button>
          </Link>
        </main>
      </div>
    </div>
  )
}

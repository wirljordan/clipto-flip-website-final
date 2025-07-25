import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-blue-100" style={{ backgroundColor: "#E6F3FF" }}>
      {/* Main container */}
      <div className="min-h-screen p-4 md:p-8">
        {/* Header */}
        <header className="flex items-center justify-between p-4 mb-8">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center">
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

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#" className="text-xl font-bold text-black hover:text-gray-700 transition-colors">
              HOME
            </Link>
            <Link href="/about" className="text-xl font-bold text-black hover:text-gray-700 transition-colors">
              ABOUT
            </Link>
            <Link href="/contact" className="text-xl font-bold text-black hover:text-gray-700 transition-colors">
              CONTACT
            </Link>
            <Link href="/upload">
              <Button
                className="bg-orange-400 hover:bg-orange-500 text-black font-bold text-lg px-6 py-2 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
                style={{ backgroundColor: "#FF6B6B" }}
              >
                🎁 Create Your Flipbook
              </Button>
            </Link>
          </nav>
          
          {/* Mobile CTA Button */}
          <Link href="/upload" className="md:hidden">
            <Button
              className="bg-orange-400 hover:bg-orange-500 text-black font-bold text-sm px-4 py-2 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
              style={{ backgroundColor: "#FF6B6B" }}
            >
              🎁 Create
            </Button>
          </Link>
        </header>

        {/* Main Content - Flipbook Details */}
        <main className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-black text-center mb-12">
            Flipbook Details
          </h1>
          
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Image on the left */}
            <div className="flex-1 flex items-center justify-center">
              <div className="relative">
                <Image
                  src="/placeholder.jpg"
                  alt="Person holding flipbooks"
                  width={400}
                  height={300}
                  className="rounded-lg border-2 border-black object-cover w-full max-w-md shadow-lg"
                />
              </div>
            </div>
            
            {/* Details on the right */}
            <div className="flex-1">
              <div className="bg-white rounded-lg border-2 border-black p-6 md:p-8 shadow-lg">
                <p className="text-base md:text-lg text-gray-700 mb-6">
                  Every ClipToFlip book is carefully crafted with premium materials and vibrant prints, built to last and designed to impress. Here's what makes ours special:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">📏</span>
                    <div>
                      <h3 className="text-lg font-bold text-black">10.5cm x 5cm x 1cm (4.53" x 1.97" x 0.39")</h3>
                      <p className="text-base text-gray-700">Compact, portable, and perfectly pocket-sized.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">📄</span>
                    <div>
                      <h3 className="text-lg font-bold text-black">Materials</h3>
                      <p className="text-base text-gray-700">High-quality paper with a durable, hand-bound finish.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">📖</span>
                    <div>
                      <h3 className="text-lg font-bold text-black">Pages</h3>
                      <p className="text-base text-gray-700">72 pages — each page is one video frame brought to life.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">🎨</span>
                    <div>
                      <h3 className="text-lg font-bold text-black">Customization</h3>
                      <p className="text-base text-gray-700">Choose from a range of cover colours to match your style or the occasion.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-xl">✨</span>
                    <div>
                      <h3 className="text-lg font-bold text-black">Print Quality</h3>
                      <p className="text-base text-gray-700">Crisp and vibrant prints that bring your video to life.</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-base md:text-lg text-gray-700 mt-6">
                  Every flipbook is a one-of-a-kind reflection of your video, a playful way to bring your memories back to life.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="flex justify-center mt-12">
            <Link href="/upload">
              <Button
                className="bg-orange-400 hover:bg-orange-500 text-black font-bold text-lg px-8 py-3 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
                style={{ backgroundColor: "#FF6B6B" }}
              >
                ✨ Create Your Flipbook ✨
              </Button>
            </Link>
          </div>
        </main>
        
        {/* Mobile Footer Navigation */}
        <footer className="md:hidden border-t border-gray-300 py-4 px-4 mt-12">
          <nav className="flex justify-center items-center space-x-6">
            <Link href="/" className="text-lg font-bold text-black hover:text-gray-700 transition-colors">
              HOME
            </Link>
            <Link href="/about" className="text-lg font-bold text-black hover:text-gray-700 transition-colors">
              ABOUT
            </Link>
            <Link href="/contact" className="text-lg font-bold text-black hover:text-gray-700 transition-colors">
              CONTACT
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  )
}

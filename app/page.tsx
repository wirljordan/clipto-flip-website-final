import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-yellow-400" style={{ backgroundColor: "#FECB23" }}>
      {/* Main container with thick black border */}
      <div className="min-h-screen border-4 md:border-8 border-black m-2 md:m-4 rounded-2xl md:rounded-3xl overflow-hidden" style={{ backgroundColor: "#FECB23" }}>
        {/* Header */}
        <header className="flex items-center justify-between p-2 md:p-3 border-b-2 md:border-b-4 border-black" style={{ backgroundColor: "#FECB23" }}>
          {/* Logo */}
          <Link href="/">
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
          
          {/* Mobile CTA Button */}
          <Link href="/upload" className="md:hidden">
            <Button
              className="bg-orange-400 hover:bg-orange-500 text-black font-black text-sm px-4 py-2 rounded-full border-2 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] transition-all"
              style={{ backgroundColor: "#FF6B6B" }}
            >
              🎁 Create
            </Button>
          </Link>
        </header>

        {/* Main Content */}
        <main className="flex flex-col md:flex-row items-center justify-center px-4 md:px-8 py-8 md:py-12 space-y-6 md:space-y-0 md:space-x-12 flex-1">
          {/* Flipbook Illustration */}
          <div className="flex items-center justify-center md:flex-1 video-container" style={{ backgroundColor: "#FECB23" }}>
            <video
              src="https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/Untitled%20design-9.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay9VbnRpdGxlZCBkZXNpZ24tOS5tcDQiLCJpYXQiOjE3NTMyMjUwMDYsImV4cCI6MjA2ODU4NTAwNn0.lnunTceuXcFT7MO2IUFd_9qVIK8HC2JjY7o3oWOAsiI"
              width={300}
              height={240}
              className="md:w-[400px] md:h-[320px] object-contain bg-yellow-400"
              autoPlay
              loop
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Main Heading */}
          <div className="text-center md:text-left md:flex-1 space-y-4 md:space-y-6">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-tight">
              Turn your video
              <br />
              into a flipbook
            </h1>

            <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-black mb-2">Your favorite video, now a gift they'll never forget</h2>
            <p className="text-base md:text-xl lg:text-2xl text-black max-w-3xl mx-auto leading-relaxed mb-2">
              We turn your clips into custom flipbooks — perfect for birthdays, weddings, or just because.
            </p>
            <p className="italic text-sm md:text-lg lg:text-xl text-black max-w-2xl mx-auto mb-2">Made to flip. Made to last.</p>
             
             {/* CTA Button */}
             <div className="flex justify-center md:justify-start">
               <Link href="/upload">
                 <Button
                   className="bg-orange-400 hover:bg-orange-500 text-black font-black text-lg md:text-xl px-6 md:px-8 py-2 md:py-3 rounded-full border-2 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                   style={{ backgroundColor: "#FF6B6B" }}
                 >
                   ✨ Make One Now ✨
                 </Button>
               </Link>
             </div>
           </div>
         </main>
        
        {/* How It Works Section */}
        <section className="px-4 md:px-8 py-12 md:py-16" style={{ backgroundColor: "#FECB23" }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black text-center mb-8 md:mb-12">
              Create Your Flipbook
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Step 1: Upload Your Clip */}
              <div className="bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl mb-4">📤</div>
                  <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4">Upload Your Clip</h3>
                  <p className="text-base md:text-lg text-gray-700">
                    Select a video file from your device. Horizontal videos work best.
                  </p>
                </div>
              </div>
              
              {/* Step 2: See It in Action */}
              <div className="bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl mb-4">👁️</div>
                  <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4">See It in Action</h3>
                  <p className="text-base md:text-lg text-gray-700">
                    See the exact frames that will be printed in your flipbook.
                  </p>
                </div>
              </div>
              
              {/* Step 3: Customize Your Flipbook */}
              <div className="bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl mb-4">🎨</div>
                  <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4">Customize Your Flipbook</h3>
                  <p className="text-base md:text-lg text-gray-700">
                    Choose a premium cover colour to give it that perfect finishing touch.
                  </p>
                </div>
              </div>
              
              {/* Step 4: Make It Real */}
              <div className="bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl mb-4">📋</div>
                  <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-4">Make It Real</h3>
                  <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                    Love your flipbook? Order a high-quality printed version to keep or gift to someone special.
                  </p>
                  <div className="space-y-2 md:space-y-3">
                    <Button
                      className="w-full bg-orange-400 hover:bg-orange-500 text-black font-black text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-full border-2 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                      style={{ backgroundColor: "#FF6B6B" }}
                    >
                      <span className="line-through text-sm md:text-base">$40</span> $25 - Create Your Flipbook
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Flipbook Stories Section */}
        <section className="px-4 md:px-8 py-12 md:py-16" style={{ backgroundColor: "#FECB23" }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black text-center mb-2 md:mb-4 flex items-center justify-center gap-2">
              <span role="img" aria-label="gift">🎁</span> Say it with a flipbook
            </h2>
            <p className="text-xl md:text-2xl text-black text-center mb-10 md:mb-14 max-w-2xl mx-auto font-semibold">
              Nothing says “I love you” like flipping through your favourite memories.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Card 1: Big image left */}
              <div className="bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black flex items-center justify-center overflow-hidden h-64 md:h-80">
                <img src="/flipbookhero.mp4" alt="Flipbook hands" className="object-cover w-full h-full" style={{ objectPosition: 'center' }} />
              </div>
              {/* Card 2: Text right */}
              <div className="bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center mb-2 text-2xl">💛</div>
                <h3 className="text-xl md:text-2xl font-black text-black mb-2">Say it with a flipbook</h3>
                <p className="text-base md:text-lg text-gray-700">Not just “I love you.” Say “Remember this?” Say “We were there.” Say it without saying it. Just flip.</p>
              </div>
              {/* Card 3: Text left */}
              <div className="bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 flex flex-col justify-center">
                <div className="flex items-center mb-2 text-2xl">💍</div>
                <h3 className="text-xl md:text-2xl font-black text-black mb-2">Wedding favors that don’t get left behind</h3>
                <p className="text-base md:text-lg text-gray-700">They’ll eat the cake, lose the napkin, forget the playlist. But a tiny book with that moment? That goes home in their bag.</p>
              </div>
              {/* Card 4: Big image right */}
              <div className="bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black flex items-center justify-center overflow-hidden h-64 md:h-80">
                <img src="/logo.png" alt="Flipbook wedding" className="object-cover w-full h-full" style={{ objectPosition: 'center' }} />
              </div>
            </div>
          </div>
        </section>
         
        {/* Mobile Footer Navigation */}
        <footer className="md:hidden border-t-2 border-black py-4 px-4" style={{ backgroundColor: "#FECB23" }}>
          <nav className="flex justify-center items-center space-x-6">
            <Link href="/" className="text-lg font-black text-black hover:text-gray-700 transition-colors">
              HOME
            </Link>
            <Link href="/about" className="text-lg font-black text-black hover:text-gray-700 transition-colors">
              ABOUT
            </Link>
            <Link href="/contact" className="text-lg font-black text-black hover:text-gray-700 transition-colors">
              CONTACT
            </Link>
          </nav>
        </footer>
      </div>
    </div>
  )
}

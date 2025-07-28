import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export default function HomePage() {
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
        <main className="flex flex-col md:flex-row items-center justify-center px-4 md:px-8 py-4 md:py-8 space-y-4 md:space-y-0 md:space-x-12 flex-1 mobile-content">
          {/* Flipbook Illustration */}
          <div className="flex items-center justify-center md:flex-1 video-container mobile-video-spacing" style={{ backgroundColor: "#FECB23" }}>
            <video
              src="https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/Untitled%20design-9.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay9VbnRpdGxlZCBkZXNpZ24tOS5tcDQiLCJpYXQiOjE3NTMyMjUwMDYsImV4cCI6MjA2ODU4NTAwNn0.lnunTceuXcFT7MO2IUFd_9qVIK8HC2JjY7o3oWOAsiI"
              width={300}
              height={240}
              className="md:w-[400px] md:h-[320px] object-contain bg-yellow-400 rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              autoPlay
              loop
              muted
              playsInline
            >
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Main Heading */}
          <div className="text-center md:text-left md:flex-1 space-y-2 md:space-y-6 mobile-text-spacing">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-black leading-tight mobile-space-y-4">
              Turn your video
              <br />
              into a flipbook
            </h1>

            <h2 className="text-xl md:text-3xl lg:text-4xl font-black text-black mb-2 md:mb-6 mobile-space-y-4">Your favorite video, now a gift they'll never forget</h2>
            
            <p className="text-base md:text-xl lg:text-2xl text-black max-w-3xl mx-auto leading-relaxed mb-3 md:mb-8 mobile-space-y-4 font-medium">
              We turn your clips into custom flipbooks — perfect for birthdays, weddings, or just because.
            </p>
            
            <p className="italic text-sm md:text-lg lg:text-xl text-black max-w-2xl mx-auto mb-4 md:mb-8 mobile-space-y-4 font-medium">Made to flip. Made to last.</p>
             
             {/* CTA Button */}
             <div className="flex justify-center md:justify-start mobile-button-spacing">
               <Link href="/upload">
                 <Button
                   className="mobile-button bg-orange-400 hover:bg-orange-500 text-black font-black text-lg md:text-xl px-8 md:px-10 py-4 md:py-6 rounded-full border-2 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                   style={{ backgroundColor: "#FF6B6B" }}
                 >
                   ✨ Make One Now ✨
                 </Button>
               </Link>
             </div>
           </div>
         </main>
        
        {/* How It Works Section */}
        <section className="px-4 md:px-8 py-12 md:py-12 mobile-section-spacing" style={{ backgroundColor: "#FECB23" }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black text-center mb-6 md:mb-8 mobile-space-y-6">
              Create Your Flipbook
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-6 mobile-grid-spacing">
              {/* Step 1: Upload Your Clip */}
              <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-10 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mobile-card-spacing">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl mb-6 md:mb-4">📤</div>
                  <h3 className="text-xl md:text-2xl font-black text-black mb-4 md:mb-3 mobile-space-y-4">Upload Your Clip</h3>
                  <p className="text-base md:text-lg text-gray-700 mobile-text-spacing">
                    Select a video file from your device. Horizontal videos work best.
                  </p>
                </div>
              </div>
              
              {/* Step 2: See It in Action */}
              <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mobile-card-spacing">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl mb-4 md:mb-4">👁️</div>
                  <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-3 mobile-space-y-4">See It in Action</h3>
                  <p className="text-base md:text-lg text-gray-700 mobile-text-spacing">
                    See the exact frames that will be printed in your flipbook.
                  </p>
                </div>
              </div>
              
              {/* Step 3: Customize Your Flipbook */}
              <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mobile-card-spacing">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl mb-4 md:mb-4">🎨</div>
                  <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-3 mobile-space-y-4">Customize Your Flipbook</h3>
                  <p className="text-base md:text-lg text-gray-700 mobile-text-spacing">
                    Choose a premium cover colour to give it that perfect finishing touch.
                  </p>
                </div>
              </div>
              
              {/* Step 4: Make It Real */}
              <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mobile-card-spacing">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl mb-4 md:mb-4">📋</div>
                  <h3 className="text-xl md:text-2xl font-black text-black mb-3 md:mb-3 mobile-space-y-4">Make It Real</h3>
                  <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-4 mobile-space-y-4">
                    Love your flipbook? Order a high-quality printed version to keep or gift to someone special.
                  </p>
                </div>
              </div>
            </div>
            {/* Add button below the card grid */}
            <div className="flex justify-center mt-6 md:mt-8 mobile-button-spacing">
              <Link href="/upload">
                <Button
                  className="mobile-button bg-orange-400 hover:bg-orange-500 text-black font-black text-lg md:text-xl px-8 md:px-10 py-4 md:py-6 rounded-full border-2 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                  style={{ backgroundColor: "#FF6B6B" }}
                >
                  Start with Your Clip
                </Button>
              </Link>
            </div>
          </div>
        </section>
         
        {/* Flipbook Stories Section - Horizontal Two Card Layout */}
        <section className="px-4 md:px-8 py-12 md:py-12 mobile-section-spacing" style={{ backgroundColor: "#FECB23" }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black text-center mb-16 md:mb-20 mobile-space-y-8">
              A gift that brings memories back to life
            </h2>
            
            {/* Two Cards in Separate Rows */}
            <div className="space-y-8 md:space-y-12">
              {/* First Card: Image Left, Text Right */}
              <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-8 md:p-20 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mobile-card-spacing">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  {/* Left: Image */}
                  <div className="flex-1 flex justify-center">
                    <video
                      src="https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/i-love-you.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay9pLWxvdmUteW91Lm1wNCIsImlhdCI6MTc1MzQwNjEzOCwiZXhwIjoyMDY4NzY2MTM4fQ.83HZx1xayehZ-JHg9fbfKLP09bR99jEWzwvcyeKtNKY"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="rounded-2xl border-4 border-black object-cover w-full max-w-md h-56 md:h-72 shadow-lg"
                      style={{ objectPosition: 'center' }}
                    />
                  </div>
                  
                  {/* Right: Text */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl md:text-3xl font-black text-black mb-4 mobile-space-y-4">
                      🎁 Say it with a flipbook
                    </h3>
                    <p className="text-lg md:text-xl text-gray-700 mobile-text-spacing">
                      Not just 'I love you.' Say 'Remember this?' Say 'We were there.' Say it without saying it. Just flip.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Second Card: Text Left, Image Right */}
              <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-8 md:p-20 shadow-[4px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mobile-card-spacing">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  {/* Left: Text */}
                  <div className="flex-1 text-center md:text-left order-2 md:order-1">
                    <h3 className="text-2xl md:text-3xl font-black text-black mb-4 mobile-space-y-4">
                      🎂 Wedding favors that don't get left behind
                    </h3>
                    <p className="text-lg md:text-xl text-gray-700 mobile-text-spacing">
                      They'll eat the cake, lose the napkin, forget the playlist. But a tiny book with that moment? That goes home in their bag.
                    </p>
                  </div>
                  
                  {/* Right: Image */}
                  <div className="flex-1 flex justify-center order-1 md:order-2">
                    <video
                      src="https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/prev-3.mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay9wcmV2LTMubXA0IiwiaWF0IjoxNzUzNDA2Mjk2LCJleHAiOjIwNjg3NjYyOTZ9.UNME72rdLpP2iHPA4Ab5QRoIDVIHEkl0rnrCbE0yRFU"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="rounded-2xl border-4 border-black object-cover w-full max-w-md h-56 md:h-72 shadow-lg"
                      style={{ objectPosition: 'center' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Flipbook Details Section */}
        <section className="px-6 md:px-8 py-16 md:py-12 mobile-section-spacing" style={{ backgroundColor: "#FECB23" }}>
          <div className="max-w-6xl mx-auto">
            {/* Title above the white box */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black text-center mb-6 md:mb-8 mobile-space-y-6">
              Flipbook Details
            </h2>
            
            <div className="flex justify-center">
              <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-6xl w-full mobile-card-spacing">
                <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 mobile-grid-spacing">
                  {/* Video on the left - centered */}
                  <div className="flex-1 flex items-center justify-center mobile-video-spacing">
                    <video
                      src="https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/Untitled%20(Facebook%20Video).mp4?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay9VbnRpdGxlZCAoRmFjZWJvb2sgVmlkZW8pLm1wNCIsImlhdCI6MTc1MzQ3Mjk4NSwiZXhwIjoyMDY4ODMyOTg1fQ.GxDbKtUI0El4lIcSc3baItW5WubsOfUaOoMVdvXdqRA"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="rounded-lg border-2 border-black object-cover w-full max-w-lg shadow-lg"
                      style={{ objectPosition: 'center' }}
                    />
                  </div>
                  
                  {/* Details on the right */}
                  <div className="flex-1 mobile-content">
                    <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6 mobile-text-spacing">
                      Every ClipToFlip book is carefully crafted with premium materials and vibrant prints, built to last and designed to impress. Here's what makes ours special:
                    </p>
                    
                    <div className="space-y-3 md:space-y-4 mobile-grid-spacing">
                      <div>
                        <h3 className="text-lg md:text-xl font-black text-black mb-1 mobile-space-y-4">📏 10.5cm x 5cm x 1cm (4.53" x 1.97" x 0.39")</h3>
                        <p className="text-base md:text-lg text-gray-700 mobile-text-spacing">Compact, portable, and perfectly pocket-sized.</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg md:text-xl font-black text-black mb-1 mobile-space-y-4">📄 Materials</h3>
                        <p className="text-base md:text-lg text-gray-700 mobile-text-spacing">High-quality paper with a durable, hand-bound finish.</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg md:text-xl font-black text-black mb-1 mobile-space-y-4">📖 Pages</h3>
                        <p className="text-base md:text-lg text-gray-700 mobile-text-spacing">72 pages — each page is one video frame brought to life.</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg md:text-xl font-black text-black mb-1 mobile-space-y-4">🎨 Customization</h3>
                        <p className="text-base md:text-lg text-gray-700 mobile-text-spacing">Choose from a range of cover colours to match your style or the occasion.</p>
                      </div>
                      
                      <div>
                        <h3 className="text-lg md:text-xl font-black text-black mb-1 mobile-space-y-4">✨ Print Quality</h3>
                        <p className="text-base md:text-lg text-gray-700 mobile-text-spacing">Crisp and vibrant prints that bring your video to life.</p>
                      </div>
                    </div>
                    
                    <p className="text-base md:text-lg text-gray-700 mt-4 md:mt-6 mobile-text-spacing">
                      Every flipbook is a one-of-a-kind reflection of your video, a playful way to bring your memories back to life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Customer Testimonials Section */}
        <section className="px-8 md:px-8 py-16 md:py-12 mobile-section-spacing" style={{ backgroundColor: "#FECB23" }}>
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-black text-center mb-6 md:mb-8 mobile-space-y-6">
              What Our Customers Say
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 mobile-grid-spacing">
              {/* Review 1 - Ilona */}
              <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-3 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mobile-card-spacing">
                <div className="flex items-center mb-2 mobile-space-y-4">
                  <div className="flex text-yellow-400 text-xl md:text-2xl">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="text-base md:text-lg text-gray-700 mb-2 mobile-text-spacing italic">
                  "Honestly, I'm obsessed with how these turned out! I made a flipbook from our family photoshoot and it's just so sweet. The quality's amazing and it makes me smile every time I flip through it. Such a fun way to keep those memories alive."
                </p>
                <div className="flex items-center">
                  <Image
                    src="https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/Copy%20of%20Inc-2.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay9Db3B5IG9mIEluYy0yLnBuZyIsImlhdCI6MTc1MzQ3NzU4NywiZXhwIjoyMDY4ODM3NTg3fQ.rAE0EGpgcJMXeewOXJhlHCx46BhYSyV9sVcmQCxyShs"
                    alt="Ilona M."
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <span className="font-bold text-black">Ilona M.</span>
                </div>
              </div>
              
              {/* Review 2 - Kass */}
              <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-3 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mobile-card-spacing">
                <div className="flex items-center mb-2 mobile-space-y-4">
                  <div className="flex text-yellow-400 text-xl md:text-2xl">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="text-base md:text-lg text-gray-700 mb-2 mobile-text-spacing italic">
                  "It was the perfect way to capture some incredible moments with our son during his first year! Seeing our precious memories immortalised forever was so touching and truly unique. The quality is amazing and it's become our favorite keepsake."
                </p>
                <div className="flex items-center">
                  <Image
                    src="https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/Copy%20of%20Inc-3.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay9Db3B5IG9mIEluYy0zLnBuZyIsImlhdCI6MTc1MzQ3Nzc1OCwiZXhwIjoxNzg1MDEzNzU4fQ.BKmSYjkZwIuz92gKSGpuauQeZw7lQILtbJ4WQM_Yec8"
                    alt="Kass R."
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <span className="font-bold text-black">Kass R.</span>
                </div>
              </div>
              
              {/* Review 3 - Carly */}
              <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-3 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mobile-card-spacing">
                <div className="flex items-center mb-2 mobile-space-y-4">
                  <div className="flex text-yellow-400 text-xl md:text-2xl">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="text-base md:text-lg text-gray-700 mb-2 mobile-text-spacing italic">
                  "I turned one of my favourite videos into a flip book, and I couldn't be happier with how it turned out! It's such a fun and unique way to relive special memories. The quality is great, and it feels so special to have a little moment frozen in time that I can flip through whenever I want."
                </p>
                <div className="flex items-center">
                  <Image
                    src="https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/Copy%20of%20Inc-4.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay9Db3B5IG9mIEluYy00LnBuZyIsImlhdCI6MTc1MzQ3Nzg3NSwiZXhwIjoxNzg1MDEzODc1fQ.CBYXrXhzl2QjmJKA7qQXm27MOe1VApuj7o4tiwQREYg"
                    alt="Carly T."
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <span className="font-bold text-black">Carly T.</span>
                </div>
              </div>
              
              {/* Review 4 - Jenna Abbasi */}
              <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-3 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mobile-card-spacing">
                <div className="flex items-center mb-2 mobile-space-y-4">
                  <div className="flex text-yellow-400 text-xl md:text-2xl">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="text-base md:text-lg text-gray-700 mb-2 mobile-text-spacing italic">
                  "The flipbooks was such an easy process, they turned out so cute! This is the perfect addition to my childrens memory boxes and the perfect gift to loved ones. The team is lovely, helpful and provides great advice on any help you need in the process of creating!"
                </p>
                <div className="flex items-center">
                  <Image
                    src="https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/Copy%20of%20Inc-5.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay9Db3B5IG9mIEluYy01LnBuZyIsImlhdCI6MTc1MzQ3ODA0NiwiZXhwIjoxNzg1MDE0MDQ2fQ.jmenxVMVsrqXdvzNXH4ib6BkWpr0G1tbFcaCi-i6FgA"
                    alt="Jenna A."
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <span className="font-bold text-black">Jenna A.</span>
                </div>
              </div>
              
              {/* Review 5 - Samantha Callander */}
              <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-3 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mobile-card-spacing">
                <div className="flex items-center mb-2 mobile-space-y-4">
                  <div className="flex text-yellow-400 text-xl md:text-2xl">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="text-base md:text-lg text-gray-700 mb-2 mobile-text-spacing italic">
                  "Absolutely beautiful and something I will be purchasing again and again. Truly is a special keepsake and captures your favourite memories forever. The quality is outstanding and it's become my go-to gift for special occasions."
                </p>
                <div className="flex items-center">
                  <Image
                    src="https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/Copy%20of%20Inc-6.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay9Db3B5IG9mIEluYy02LnBuZyIsImlhdCI6MTc1MzQ3ODE2MiwiZXhwIjoxNzg1MDE0MTYyfQ.M1y8W6kFdAZ6XH5e_lm8YPp-e1ElSHgwO0uP_Z7-fGg"
                    alt="Samantha C."
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <span className="font-bold text-black">Samantha C.</span>
                </div>
              </div>
              
              {/* Review 6 - Social Media Review */}
              <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-3 md:p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mobile-card-spacing">
                <div className="flex items-center mb-2 mobile-space-y-4">
                  <div className="flex text-yellow-400 text-xl md:text-2xl">
                    ⭐⭐⭐⭐⭐
                  </div>
                </div>
                <p className="text-base md:text-lg text-gray-700 mb-2 mobile-text-spacing italic">
                  "I ordered one for my boyfriend with a video from our trip to Italy. When he flipped through it, he smiled the entire time. It's such a special, one-of-a-kind gift that perfectly captures our amazing memories together."
                </p>
                <div className="flex items-center">
                  <Image
                    src="https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/Copy%20of%20Inc-7.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay9Db3B5IG9mIEluYy03LnBuZyIsImlhdCI6MTc1MzQ3ODIzNiwiZXhwIjoxNzg1MDE0MjM2fQ.QrM52pViaEFNCqMUUFNpmNWlR4UEnsUsRNtjqfmFMLk"
                    alt="Sarah L."
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full mr-3 object-cover"
                  />
                  <span className="font-bold text-black">Sarah L.</span>
                </div>
              </div>
            </div>
            
            {/* CTA Button after reviews */}
            <div className="flex justify-center mt-8 md:mt-12 mobile-button-spacing">
              <Link href="/upload">
                <Button
                  className="mobile-button bg-orange-400 hover:bg-orange-500 text-black font-black text-lg md:text-xl px-8 md:px-10 py-4 md:py-6 rounded-full border-2 md:border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] md:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] md:hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                  style={{ backgroundColor: "#FF6B6B" }}
                >
                  🎬 Turn My Video Into a Flip
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

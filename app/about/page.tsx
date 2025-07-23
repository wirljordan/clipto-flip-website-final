import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-yellow-400" style={{ backgroundColor: "#FECB23" }}>
      <div className="min-h-screen border-8 border-black m-4 rounded-3xl overflow-hidden" style={{ backgroundColor: "#FECB23" }}>
        {/* Header */}
        <header className="flex items-center justify-between p-3 border-b-4 border-black" style={{ backgroundColor: "#FECB23" }}>
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
        </header>

        {/* About Hero Image */}
        <div className="flex justify-center mb-8">
          <Image
            src="https://lfvokdiatflpxnohmofo.supabase.co/storage/v1/object/sign/flipbook/ChatGPT%20Image%20Jul%2023,%202025%20at%2004_37_59%20PM.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV85OGNkMmM5Zi1jNDJlLTQ2NTgtYTMxNi1hM2ZkNTU2MjFhMjUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmbGlwYm9vay9DaGF0R1BUIEltYWdlIEp1bCAyMywgMjAyNSBhdCAwNF8zN181OSBQTS5wbmciLCJpYXQiOjE3NTMzMDM3MjgsImV4cCI6MjA2ODY2MzcyOH0.MF50jjqw-yVZDakliyz5ipOfb6CE2xyiwsb0CQjXCIo"
            alt="Happy customer holding a flipbook"
            width={400}
            height={300}
            className="rounded-3xl shadow-xl object-cover"
            priority
          />
        </div>

        {/* About Us Section */}
        <section className="flex flex-col items-center justify-center px-8 py-16 space-y-8 bg-yellow-400 border-t-8 border-black" style={{ backgroundColor: "#FECB23" }}>
          <div className="max-w-3xl w-full text-center">
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6">About Us</h2>
            <p className="text-xl font-bold text-black mb-4">
              At ClipToFlip, we take your short videos and turn them into flippin’ awesome flipbooks — the kind you can hold, flip, and relive frame by frame.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Whether it’s a goofy dance, a pet doing something ridiculous, or a tiny slice of a wedding day — we make those seconds last forever.
            </p>
            <h3 className="text-2xl font-black text-black mt-8 mb-2">Why We Exist</h3>
            <ul className="text-lg text-gray-700 list-disc list-inside mb-4">
              <li>To turn digital moments into physical keepsakes.</li>
              <li>Some memories deserve more than just pixels.</li>
              <li>The best gifts aren’t things — they’re moments.</li>
            </ul>
            <p className="text-xl font-bold text-black mt-8 mb-2">Crafted with care. Delivered with joy.</p>
            <p className="text-lg text-gray-700">Let’s make something worth flipping.</p>
          </div>
        </section>
      </div>
    </div>
  )
} 
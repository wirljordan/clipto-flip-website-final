"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRef, useState } from "react"
import { useRouter } from "next/navigation"

export default function UploadPage() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const [error, setError] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)

  const validateVideo = (file: File): { isValid: boolean; error?: string } => {
    // Check file size (100MB = 100 * 1024 * 1024 bytes)
    const maxSize = 100 * 1024 * 1024
    if (file.size > maxSize) {
      return { isValid: false, error: "File size must be smaller than 100MB" }
    }

    // Check file type
    if (!file.type.startsWith('video/')) {
      return { isValid: false, error: "Please select a valid video file" }
    }

    return { isValid: true }
  }

  const handleFileSelect = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    setError("")
    setIsLoading(true)

    // Validate the file
    const validation = validateVideo(file)
    if (!validation.isValid) {
      setError(validation.error || "Invalid file")
      setIsLoading(false)
      return
    }

    try {
      // Create a URL for the video preview
      const videoUrl = URL.createObjectURL(file)
      
      // Navigate to preview page with video URL
      router.push(`/preview?video=${encodeURIComponent(videoUrl)}`)
    } catch (err) {
      setError("Failed to process video. Please try again.")
      setIsLoading(false)
    }
  }

  const handleSelectVideo = () => {
    fileInputRef.current?.click()
  }

  return (
          <div className="min-h-screen bg-yellow-400" style={{ backgroundColor: "#FECB23" }}>
        {/* Main container with thick black border */}
        <div className="min-h-screen border-8 border-black m-4 rounded-3xl overflow-hidden" style={{ backgroundColor: "#FECB23" }}>
        {/* Header */}
        <header className="flex items-center justify-between p-6 border-b-8 border-black" style={{ backgroundColor: "#FECB23" }}>
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center" style={{ backgroundColor: "#FECB23" }}>
              <Image
                src="/logo.png"
                alt="CLIPTO FLIP Logo"
                width={120}
                height={80}
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
            <Link href="#" className="text-2xl font-black text-black hover:text-gray-700 transition-colors">
              ABOUT
            </Link>
            <Link href="/contact" className="text-2xl font-black text-black hover:text-gray-700 transition-colors">
              CONTACT
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center px-8 py-16 space-y-12">
          {/* Upload Card */}
          <div className="bg-gray-100 rounded-3xl border-8 border-black p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-2xl w-full">
            {/* Upload Area */}
            <div className="text-center space-y-8">
              <h1 className="text-4xl md:text-5xl font-black text-black leading-tight">
                Select your video
              </h1>
              
                             {/* Drag & Drop Area */}
               <div className="border-4 border-dashed border-gray-400 rounded-2xl p-12 bg-white">
                 <p className="text-xl font-bold text-gray-600 mb-6">
                   Drag & drop your video here or click to browse
                 </p>
                 <input
                   ref={fileInputRef}
                   type="file"
                   accept="video/*"
                   onChange={handleFileSelect}
                   className="hidden"
                 />
                 <Button
                   onClick={handleSelectVideo}
                   disabled={isLoading}
                   className="bg-black hover:bg-gray-800 text-white font-black text-xl px-8 py-4 rounded-full border-4 border-black transition-all disabled:opacity-50"
                 >
                   {isLoading ? "Processing..." : "Select your video"}
                 </Button>
                 
                 {/* Error Message */}
                 {error && (
                   <div className="mt-4 p-4 bg-red-100 border-2 border-red-500 rounded-xl">
                     <p className="text-red-700 font-bold text-lg">{error}</p>
                     <p className="text-red-600 mt-2">Please try a different video file.</p>
                   </div>
                 )}
               </div>
            </div>

            {/* Requirements */}
            <div className="mt-12 space-y-4">
              <h2 className="text-2xl font-black text-black text-center mb-6">Requirements</h2>
              <div className="space-y-3">
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-blue-500 rounded border-2 border-black flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                  </div>
                  <span className="text-lg font-bold text-black">Smaller than 100MB</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-blue-500 rounded border-2 border-black flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                  </div>
                  <span className="text-lg font-bold text-black">Shorter than 30 seconds</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-6 h-6 bg-blue-500 rounded border-2 border-black flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                  </div>
                  <span className="text-lg font-bold text-black">At least 720p HD video</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
} 
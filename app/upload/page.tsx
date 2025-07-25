"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useRef, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { MobileNav, MobileBottomNav } from "@/components/mobile-nav"
import mixpanel from '@/lib/mixpanel';

export default function UploadPage() {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()
  const [error, setError] = useState<string>("")
  const [isLoading, setIsLoading] = useState(false)
  const [isDragOver, setIsDragOver] = useState(false)

  useEffect(() => {
    mixpanel.track('Upload Page Visit');
  }, []);

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

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragOver(false)
    
    const files = e.dataTransfer.files
    if (files.length > 0) {
      const file = files[0]
      // Create a synthetic event for file input
      const syntheticEvent = {
        target: { files: [file] }
      } as unknown as React.ChangeEvent<HTMLInputElement>
      handleFileSelect(syntheticEvent)
    }
  }

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
          </nav>

          {/* Mobile Navigation */}
          <MobileNav />
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center px-4 md:px-8 py-8 md:py-16 space-y-8 md:space-y-12 pb-20 md:pb-0">
          {/* Upload Card */}
          <div className="mobile-card bg-gray-100 rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] max-w-2xl w-full">
            {/* Upload Area */}
            <div className="text-center space-y-6 md:space-y-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-black leading-tight">
                Select your video
              </h1>
              
              {/* Drag & Drop Area */}
              <div 
                className={`border-4 border-dashed rounded-2xl p-6 md:p-12 bg-white transition-all duration-200 ${
                  isDragOver 
                    ? 'border-orange-400 bg-orange-50 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]' 
                    : 'border-gray-400'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="text-center space-y-4 md:space-y-6">
                  <div className="text-6xl md:text-8xl mb-4">📹</div>
                  <p className="text-lg md:text-xl font-bold text-gray-600 mb-4 md:mb-6">
                    {isDragOver ? 'Drop your video here!' : 'Drag & drop your video here or click to browse'}
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
                    className="mobile-button bg-black hover:bg-gray-800 text-white font-black text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-full border-4 border-black transition-all disabled:opacity-50"
                  >
                    {isLoading ? "Processing..." : "Select your video"}
                  </Button>
                </div>
                
                {/* Error Message */}
                {error && (
                  <div className="mt-4 md:mt-6 p-4 bg-red-100 border-2 border-red-500 rounded-xl">
                    <p className="text-red-700 font-bold text-base md:text-lg">{error}</p>
                    <p className="text-red-600 mt-2 text-sm md:text-base">Please try a different video file.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Requirements */}
            <div className="mt-8 md:mt-12 space-y-4">
              <h2 className="text-xl md:text-2xl font-black text-black text-center mb-4 md:mb-6">Requirements</h2>
              <div className="space-y-3 md:space-y-4">
                <div className="flex items-center space-x-3 md:space-x-4 p-3 bg-white rounded-xl border-2 border-black">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-500 rounded border-2 border-black flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-sm"></div>
                  </div>
                  <span className="text-base md:text-lg font-bold text-black">Smaller than 100MB</span>
                </div>
                <div className="flex items-center space-x-3 md:space-x-4 p-3 bg-white rounded-xl border-2 border-black">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-500 rounded border-2 border-black flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-sm"></div>
                  </div>
                  <span className="text-base md:text-lg font-bold text-black">Shorter than 30 seconds</span>
                </div>
                <div className="flex items-center space-x-3 md:space-x-4 p-3 bg-white rounded-xl border-2 border-black">
                  <div className="w-5 h-5 md:w-6 md:h-6 bg-blue-500 rounded border-2 border-black flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-sm"></div>
                  </div>
                  <span className="text-base md:text-lg font-bold text-black">At least 720p HD video</span>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Mobile Bottom Navigation */}
        <MobileBottomNav />
      </div>
    </div>
  )
} 
"use client"

import { useState, useRef, useCallback } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export default function UploadPage() {
  const [isDragOver, setIsDragOver] = useState(false)
  const [isUploading, setIsUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [uploadedVideo, setUploadedVideo] = useState<string>("")
  const [videoFileName, setVideoFileName] = useState<string>("")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleFileSelect = useCallback(async (file: File) => {
    if (!file) return

    // Validate file type
    if (!file.type.startsWith('video/')) {
      alert('Please select a valid video file.')
      return
    }

    // Validate file size (50MB limit)
    if (file.size > 50 * 1024 * 1024) {
      alert('File size must be less than 50MB.')
      return
    }

    setIsUploading(true)
    setUploadProgress(0)

    try {
      // Simulate upload progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => {
          if (prev >= 90) {
            clearInterval(progressInterval)
            return 90
          }
          return prev + 10
        })
      }, 200)

      // Create object URL for preview
      const videoUrl = URL.createObjectURL(file)
      
      // Simulate upload delay
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      clearInterval(progressInterval)
      setUploadProgress(100)
      
      // Store video data in sessionStorage
      sessionStorage.setItem('uploadedVideo', videoUrl)
      sessionStorage.setItem('videoFileName', file.name)
      
      setUploadedVideo(videoUrl)
      setVideoFileName(file.name)
      
      // Navigate to preview page after a short delay
      setTimeout(() => {
        router.push('/preview')
      }, 500)
      
    } catch (error) {
      console.error('Upload error:', error)
      alert('Upload failed. Please try again.')
    } finally {
      setIsUploading(false)
      setUploadProgress(0)
    }
  }, [router])

  const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragOver(false)
    
    const files = e.dataTransfer.files
    if (files.length > 0) {
      handleFileSelect(files[0])
    }
  }, [handleFileSelect])

  const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragOver(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragOver(false)
  }, [])

  const handleFileInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleFileSelect(file)
    }
  }, [handleFileSelect])

  const handleBrowseClick = () => {
    fileInputRef.current?.click()
  }

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
        <main className="px-6 md:px-8 py-12 md:py-16 flex-1 mobile-content">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12 md:mb-16 mobile-space-y-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-6 md:mb-8 mobile-space-y-6">
                Upload Your Video
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-black max-w-2xl mx-auto mobile-text-spacing">
                Select a video file to create your custom flipbook. Horizontal videos work best for the best results.
              </p>
            </div>

            {/* Upload Area */}
            <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-8 md:p-12 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mobile-card-spacing">
              {!isUploading ? (
                <div
                  className={`border-4 border-dashed rounded-2xl p-8 md:p-12 text-center transition-all ${
                    isDragOver
                      ? 'border-orange-400 bg-orange-50'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                >
                  <div className="text-6xl md:text-8xl mb-6 md:mb-8">📹</div>
                  <h2 className="text-2xl md:text-3xl font-black text-black mb-4 md:mb-6 mobile-space-y-4">
                    Drop your video here
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 mobile-text-spacing">
                    or click to browse files
                  </p>
                  
                  <div className="space-y-4 md:space-y-6 mobile-grid-spacing">
                    <div className="flex justify-center">
                      <Button
                        onClick={handleBrowseClick}
                        className="mobile-button bg-orange-400 hover:bg-orange-500 text-black font-black text-lg md:text-xl px-8 md:px-10 py-4 md:py-6 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                        style={{ backgroundColor: "#FF6B6B" }}
                      >
                        📁 Choose File
                      </Button>
                    </div>
                    
                    <div className="text-sm md:text-base text-gray-500 mobile-text-spacing text-center">
                      <p>Supported formats: MP4, MOV, AVI, WebM</p>
                      <p>Maximum file size: 50MB</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <div className="text-6xl md:text-8xl mb-6 md:mb-8">⏳</div>
                  <h2 className="text-2xl md:text-3xl font-black text-black mb-4 md:mb-6 mobile-space-y-4">
                    Uploading your video...
                  </h2>
                  
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-4 md:h-6 mb-6 md:mb-8 mobile-space-y-4">
                    <div
                      className="bg-orange-400 h-4 md:h-6 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%`, backgroundColor: "#FF6B6B" }}
                    ></div>
                  </div>
                  
                  <p className="text-base md:text-lg text-gray-600 mobile-text-spacing">
                    {uploadProgress}% complete
                  </p>
                </div>
              )}
            </div>

            {/* Instructions */}
            <div className="mt-12 md:mt-16 mobile-section-spacing">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mobile-grid-spacing">
                {/* Tips */}
                <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-8 md:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mobile-card-spacing">
                  <h3 className="text-xl md:text-2xl font-black text-black mb-6 md:mb-8 text-center mobile-space-y-4">
                    💡 Tips for Best Results
                  </h3>
                  <ul className="space-y-4 md:space-y-6 mobile-grid-spacing">
                    <li className="flex items-start space-x-3">
                      <span className="text-2xl">📱</span>
                      <span className="text-base md:text-lg text-gray-700 mobile-text-spacing">
                        Use horizontal videos for better flipbook experience
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-2xl">🎬</span>
                      <span className="text-base md:text-lg text-gray-700 mobile-text-spacing">
                        Keep videos between 5-30 seconds for optimal results
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-2xl">✨</span>
                      <span className="text-base md:text-lg text-gray-700 mobile-text-spacing">
                        Choose videos with clear, well-lit scenes
                      </span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <span className="text-2xl">🎯</span>
                      <span className="text-base md:text-lg text-gray-700 mobile-text-spacing">
                        Avoid videos with rapid movements or blur
                      </span>
                    </li>
                  </ul>
                </div>

                {/* What Happens Next */}
                <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-8 md:p-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mobile-card-spacing">
                  <h3 className="text-xl md:text-2xl font-black text-black mb-6 md:mb-8 text-center mobile-space-y-4">
                    🚀 What Happens Next
                  </h3>
                  <div className="space-y-6 md:space-y-8 mobile-grid-spacing">
                    <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
                      <div className="text-2xl md:text-3xl">1️⃣</div>
                      <h4 className="text-lg md:text-xl font-black text-black">Preview</h4>
                      <div></div>
                      <p className="text-base md:text-lg text-gray-700 mobile-text-spacing">
                        See exactly how your flipbook will look
                      </p>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
                      <div className="text-2xl md:text-3xl">2️⃣</div>
                      <h4 className="text-lg md:text-xl font-black text-black">Customize</h4>
                      <div></div>
                      <p className="text-base md:text-lg text-gray-700 mobile-text-spacing">
                        Choose your cover color and shipping options
                      </p>
                    </div>
                    <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
                      <div className="text-2xl md:text-3xl">3️⃣</div>
                      <h4 className="text-lg md:text-xl font-black text-black">Order</h4>
                      <div></div>
                      <p className="text-base md:text-lg text-gray-700 mobile-text-spacing">
                        Complete your purchase and we'll create your flipbook
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="video/*"
        onChange={handleFileInputChange}
        className="hidden"
      />
    </div>
  )
} 
"use client"

import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MobileNav } from "@/components/mobile-nav"

export default function UploadPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isDragOver, setIsDragOver] = useState(false)
  const [error, setError] = useState<string>("")
  const fileInputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      validateAndSetFile(file)
    }
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
    
    const file = e.dataTransfer.files?.[0]
    if (file) {
      validateAndSetFile(file)
    }
  }

  const validateAndSetFile = (file: File) => {
    setError("")
    
    // Check file type
    if (!file.type.startsWith('video/')) {
      setError("Please select a valid video file.")
      return
    }
    
    // Check file size (50MB limit)
    const maxSize = 50 * 1024 * 1024 // 50MB in bytes
    if (file.size > maxSize) {
      setError("File size must be less than 50MB.")
      return
    }
    
    setSelectedFile(file)
  }

  const handleSubmit = () => {
    if (selectedFile) {
      // Store the file in sessionStorage for the preview page
      const reader = new FileReader()
      reader.onload = (e) => {
        const videoData = e.target?.result as string
        sessionStorage.setItem('uploadedVideo', videoData)
        sessionStorage.setItem('videoFileName', selectedFile.name)
        router.push('/preview')
      }
      reader.readAsDataURL(selectedFile)
    }
  }

  const handleBrowseClick = () => {
    fileInputRef.current?.click()
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
        <main className="flex flex-col items-center justify-center px-4 md:px-8 py-8 md:py-12 flex-1">
          <div className="max-w-2xl w-full">
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-black mb-4">
                Upload Your Video
              </h1>
              <p className="text-lg md:text-xl text-black">
                Select a video file to create your custom flipbook
              </p>
            </div>

            {/* Upload Area */}
            <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
              <div
                className={`border-4 border-dashed border-black rounded-2xl p-8 md:p-12 text-center transition-all ${
                  isDragOver ? 'bg-yellow-100 border-yellow-500' : 'bg-gray-50'
                }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="text-6xl md:text-8xl mb-4">📹</div>
                <h3 className="text-xl md:text-2xl font-black text-black mb-4">
                  {selectedFile ? "Video Selected!" : "Drop your video here"}
                </h3>
                <p className="text-base md:text-lg text-gray-700 mb-6">
                  {selectedFile 
                    ? `Selected: ${selectedFile.name}`
                    : "or click to browse files"
                  }
                </p>
                
                {!selectedFile && (
                  <Button
                    onClick={handleBrowseClick}
                    className="mobile-button bg-orange-400 hover:bg-orange-500 text-black font-black text-lg md:text-xl px-6 md:px-8 py-3 md:py-4 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                    style={{ backgroundColor: "#FF6B6B" }}
                  >
                    Browse Files
                  </Button>
                )}
                
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="video/*"
                  onChange={handleFileSelect}
                  className="hidden"
                />
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mobile-card bg-red-100 border-4 border-red-500 rounded-2xl p-4 md:p-6 mb-6">
                <p className="text-red-700 font-bold text-center">{error}</p>
              </div>
            )}

            {/* Requirements */}
            <div className="mobile-card bg-white rounded-2xl md:rounded-3xl border-4 md:border-8 border-black p-6 md:p-8 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] md:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] mb-8">
              <h3 className="text-xl md:text-2xl font-black text-black mb-4 text-center">
                📋 Requirements
              </h3>
              <ul className="space-y-2 text-base md:text-lg text-gray-700">
                <li>• Video file (MP4, MOV, AVI, etc.)</li>
                <li>• Maximum file size: 50MB</li>
                <li>• Horizontal videos work best</li>
                <li>• Clear, well-lit footage recommended</li>
              </ul>
            </div>

            {/* Submit Button */}
            {selectedFile && (
              <div className="text-center">
                <Button
                  onClick={handleSubmit}
                  className="mobile-button bg-orange-400 hover:bg-orange-500 text-black font-black text-xl md:text-2xl px-8 md:px-12 py-4 md:py-6 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all"
                  style={{ backgroundColor: "#FF6B6B" }}
                >
                  ✨ Continue to Preview ✨
                </Button>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  )
} 
"use client"

import { useState, useEffect } from "react"
import { Menu, X, Home, Info, Mail, Upload } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Handle scroll for header styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
    // Prevent body scroll when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }

  const closeMenu = () => {
    setIsOpen(false)
    document.body.style.overflow = 'unset'
  }

  return (
    <div className="md:hidden">
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMenu}
        className="touch-target border-4 border-black bg-yellow-400 hover:bg-yellow-500 transition-all duration-200"
        aria-label="Toggle mobile menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={closeMenu}
          />
          
          {/* Menu Content */}
          <div className="fixed top-0 left-0 right-0 bg-yellow-400 border-b-8 border-black z-50 transform transition-transform duration-300 ease-in-out">
            <div className="p-6 space-y-6">
              {/* Header */}
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-black">Menu</h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeMenu}
                  className="touch-target border-4 border-black bg-yellow-400 hover:bg-yellow-500"
                  aria-label="Close menu"
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Navigation Links */}
              <nav className="space-y-4">
                <Link 
                  href="/" 
                  onClick={closeMenu}
                  className="flex items-center space-x-4 p-4 bg-white rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all touch-target"
                >
                  <Home className="h-6 w-6 text-black" />
                  <span className="text-xl font-black text-black">HOME</span>
                </Link>
                
                <Link 
                  href="/about" 
                  onClick={closeMenu}
                  className="flex items-center space-x-4 p-4 bg-white rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all touch-target"
                >
                  <Info className="h-6 w-6 text-black" />
                  <span className="text-xl font-black text-black">ABOUT</span>
                </Link>
                
                <Link 
                  href="/contact" 
                  onClick={closeMenu}
                  className="flex items-center space-x-4 p-4 bg-white rounded-2xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all touch-target"
                >
                  <Mail className="h-6 w-6 text-black" />
                  <span className="text-xl font-black text-black">CONTACT</span>
                </Link>
              </nav>

              {/* CTA Button */}
              <div className="pt-4">
                <Link href="/upload" onClick={closeMenu}>
                  <Button
                    className="w-full bg-orange-400 hover:bg-orange-500 text-black font-black text-xl py-4 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all touch-target"
                    style={{ backgroundColor: "#FF6B6B" }}
                  >
                    <Upload className="h-6 w-6 mr-2" />
                    🎁 Create Your Flipbook
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

// Bottom Navigation Bar for Mobile
export function MobileBottomNav() {
  const pathname = usePathname()

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-yellow-400 border-t-4 border-black z-50 mobile-nav">
      <div className="flex justify-around items-center px-4 py-2">
        <Link 
          href="/" 
          className={`flex flex-col items-center space-y-1 p-2 rounded-xl transition-all touch-target ${
            pathname === '/' ? 'bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : 'hover:bg-yellow-300'
          }`}
        >
          <Home className="h-5 w-5 text-black" />
          <span className="text-xs font-black text-black">HOME</span>
        </Link>
        
        <Link 
          href="/about" 
          className={`flex flex-col items-center space-y-1 p-2 rounded-xl transition-all touch-target ${
            pathname === '/about' ? 'bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : 'hover:bg-yellow-300'
          }`}
        >
          <Info className="h-5 w-5 text-black" />
          <span className="text-xs font-black text-black">ABOUT</span>
        </Link>
        
        <Link 
          href="/contact" 
          className={`flex flex-col items-center space-y-1 p-2 rounded-xl transition-all touch-target ${
            pathname === '/contact' ? 'bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : 'hover:bg-yellow-300'
          }`}
        >
          <Mail className="h-5 w-5 text-black" />
          <span className="text-xs font-black text-black">CONTACT</span>
        </Link>
        
        <Link 
          href="/upload" 
          className={`flex flex-col items-center space-y-1 p-2 rounded-xl transition-all touch-target ${
            pathname === '/upload' ? 'bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]' : 'hover:bg-yellow-300'
          }`}
        >
          <Upload className="h-5 w-5 text-black" />
          <span className="text-xs font-black text-black">CREATE</span>
        </Link>
      </div>
    </nav>
  )
}

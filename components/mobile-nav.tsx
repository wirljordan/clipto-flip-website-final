"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="border-4 border-black bg-yellow-400 hover:bg-yellow-500"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-yellow-400 border-8 border-black border-t-0 p-6 space-y-4">
          <Link href="#" className="block text-2xl font-black text-black hover:text-gray-700">
            HOME
          </Link>
          <Link href="#" className="block text-2xl font-black text-black hover:text-gray-700">
            ABOUT
          </Link>
          <Link href="#" className="block text-2xl font-black text-black hover:text-gray-700">
            CONTACT
          </Link>
          <Button
            className="w-full bg-orange-400 hover:bg-orange-500 text-black font-black text-xl py-3 rounded-full border-4 border-black"
            style={{ backgroundColor: "#FF6B6B" }}
          >
            SIGN UP
          </Button>
        </div>
      )}
    </div>
  )
}

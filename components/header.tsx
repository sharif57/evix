"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    setMobileMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/evix-logo.webp"
              alt="EVIX - Naturally Sourced Water"
              width={180}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("products")}
              className="cursor-pointer text-sm font-body text-slate-700 hover:text-[#005B8E] transition-colors"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("sustainability")}
              className="cursor-pointer text-sm font-body text-slate-700 hover:text-[#005B8E] transition-colors"
            >
              Sustainability
            </button>
            <button
              onClick={() => scrollToSection("where-to-buy")}
              className="cursor-pointer text-sm font-body text-slate-700 hover:text-[#005B8E] transition-colors"
            >
              Where to Buy
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer text-sm font-body text-slate-700 hover:text-[#005B8E] transition-colors"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile menu button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 text-[#005B8E]">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-4">
            <button
              onClick={() => scrollToSection("products")}
              className="cursor-pointer text-sm font-body text-slate-700 hover:text-[#005B8E] transition-colors py-2 text-left"
            >
              Products
            </button>
            <button
              onClick={() => scrollToSection("sustainability")}
              className="cursor-pointer text-sm font-body text-slate-700 hover:text-[#005B8E] transition-colors py-2 text-left"
            >
              Sustainability
            </button>
            <button
              onClick={() => scrollToSection("where-to-buy")}
              className="cursor-pointer text-sm font-body text-slate-700 hover:text-[#005B8E] transition-colors py-2 text-left"
            >
              Where to Buy
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="cursor-pointer text-sm font-body text-slate-700 hover:text-[#005B8E] transition-colors py-2 text-left"
            >
              Contact Us
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}

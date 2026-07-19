"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { label: "Natural Premium Water", section: "about" },
  { label: "Products", section: "products" },
  { label: "Where to Buy", section: "where-to-buy" },
  { label: "Our Services", section: "services" },
  { label: "EVIX® Cares", section: "sustainability" },
  { label: "Our Team", section: "our-team" },
  { label: "Contact Us", section: "contact" },
]

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
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="cursor-pointer text-sm font-medium text-slate-700 hover:text-[#005B8E] transition-colors whitespace-nowrap"
                dangerouslySetInnerHTML={{ __html: item.label.replace("EVIX®", "EVIX<sup>®</sup>") }}
              />
            ))}
          </nav>

          {/* Mobile menu button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-[#005B8E]">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden pt-4 pb-2 flex flex-col gap-1 border-t border-gray-100 mt-4">
            {navItems.map((item) => (
              <button
                key={item.section}
                onClick={() => scrollToSection(item.section)}
                className="cursor-pointer text-sm font-medium text-slate-700 hover:text-[#005B8E] hover:bg-[#F4F7F6] transition-colors py-3 px-2 text-left rounded-lg"
                dangerouslySetInnerHTML={{ __html: item.label.replace("EVIX®", "EVIX<sup>®</sup>") }}
              />
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}

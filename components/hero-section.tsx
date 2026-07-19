"use client"

import { useState, useEffect, useRef } from "react"
import { EvixText } from "@/components/evix-text"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const HERO_PRODUCTS = [
  {
    id: "premium-pouch",
    title: "EVIX® Premium Pouch",
    tagline: "The Signature Shape of Luxury",
    description: "Naturally sourced premium still water in our iconic, award-winning tetrahedron pouch.",
    image: "/image/evix_premium_pouch.png",
    glowColor: "rgba(0, 91, 142, 0.15)", // EVIX Blue
    borderColor: "border-[#005B8E]/30",
    accentColor: "bg-[#005B8E]",
    textColor: "text-[#005B8E]",
  },
  {
    id: "pure-hydration",
    title: "EVIX® Active Pouch",
    tagline: "Hydration for the Modern Flow",
    description: "Ultra-pure hydration designed to elevate your everyday lifestyle, wherever you are.",
    image: "/image/evix_pouch_product.png",
    glowColor: "rgba(198, 142, 113, 0.2)", // Terracotta/Copper
    borderColor: "border-[#C68E71]/30",
    accentColor: "bg-[#C68E71]",
    textColor: "text-[#C68E71]",
  },
  {
    id: "purity-pack",
    title: "EVIX® Purity Source",
    tagline: "Naturally Mineral-Rich",
    description: "Uncompromised purity sourced directly from nature, containing optimal balanced minerals.",
    image: "/image/evix_purity_natural.png",
    glowColor: "rgba(77, 124, 15, 0.12)", // Natural Sage
    borderColor: "border-[#4D7C0F]/30",
    accentColor: "bg-[#4D7C0F]",
    textColor: "text-[#4D7C0F]",
  },
  {
    id: "classic-combo",
    title: "EVIX® Classic Collection",
    tagline: "Redefining Purity Standards",
    description: "Experience our diverse range of premium sachet and bottle formats created for maximum freshness.",
    image: "/image/evix_sachet_bottle.png",
    glowColor: "rgba(0, 130, 197, 0.15)", // Light Blue
    borderColor: "border-[#0082C5]/30",
    accentColor: "bg-[#0082C5]",
    textColor: "text-[#0082C5]",
  },
]

export default function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)

  const activeProduct = HERO_PRODUCTS[activeIndex]

  const startAutoPlay = () => {
    stopAutoPlay()
    autoPlayRef.current = setInterval(() => {
      handleNext()
    }, 6000)
  }

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current)
    }
  }

  useEffect(() => {
    startAutoPlay()
    return () => stopAutoPlay()
  }, [activeIndex])

  const handleProductChange = (index: number) => {
    if (index === activeIndex || isAnimating) return
    setIsAnimating(true)
    setActiveIndex(index)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handleNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev + 1) % HERO_PRODUCTS.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  const handlePrev = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setActiveIndex((prev) => (prev - 1 + HERO_PRODUCTS.length) % HERO_PRODUCTS.length)
    setTimeout(() => setIsAnimating(false), 500)
  }

  return (
    <section 
      className="relative min-h-[calc(100dvh-5rem)] flex items-center justify-center overflow-hidden bg-[#F4F7F6] py-12 md:py-20 transition-colors duration-1000"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      {/* Background gradients shifting colors based on selected product */}
      <div 
        className="absolute inset-0 transition-opacity duration-1000" 
        style={{
          background: `radial-gradient(circle at 75% 50%, ${activeProduct.glowColor} 0%, rgba(244, 247, 246, 0.4) 60%, #F4F7F6 100%)`
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-25" />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Product Information */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-6 md:space-y-8 order-2 lg:order-1">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 border border-slate-100 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-500 shadow-sm backdrop-blur-sm">
                <span className={`w-2 h-2 rounded-full ${activeProduct.accentColor} animate-pulse`} />
                {activeProduct.tagline}
              </div>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#005B8E] font-bold tracking-wide leading-tight">
                <span>EV</span>ery you,
                <br />
                <span>EV</span>eryone,
                <br />
                <span>EV</span>eryWhere
              </h1>
            </div>

            {/* Smooth transition for descriptions */}
            <div className={`transition-all duration-500 transform ${isAnimating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
              <h2 className="text-xl md:text-2xl font-serif text-slate-800 font-medium mb-3">
                {activeProduct.title}
              </h2>
              <p className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed mx-auto lg:mx-0 font-light">
                {activeProduct.description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#products"
                className={`inline-flex items-center gap-2 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] ${activeProduct.accentColor}`}
              >
                Explore Collection
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-white/80 border border-slate-200 text-slate-700 font-semibold px-8 py-3.5 rounded-full hover:bg-white transition-all duration-300 shadow-sm"
              >
                Inquire Now
              </a>
            </div>

            {/* Interactive Thumbnail Selector (Solan de Cabras style) */}
            <div className="pt-6 md:pt-10">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                Select Product Format
              </p>
              <div className="flex justify-center lg:justify-start gap-4">
                {HERO_PRODUCTS.map((prod, idx) => (
                  <button
                    key={prod.id}
                    onClick={() => handleProductChange(idx)}
                    className={`relative w-16 h-16 rounded-xl border-2 bg-white p-1 transition-all duration-300 flex items-center justify-center overflow-hidden hover:scale-105 hover:shadow-md cursor-pointer ${
                      activeIndex === idx 
                        ? `${prod.borderColor} ring-2 ring-offset-2 ring-slate-100 scale-105` 
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img 
                      src={prod.image} 
                      alt={prod.title} 
                      className="w-full h-full object-contain p-0.5" 
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Display Stage & Visualization */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center order-1 lg:order-2">
            <div className="relative w-full max-w-md md:max-w-lg aspect-square flex items-center justify-center">
              
              {/* Product background shadow/glow ring */}
              <div 
                className="absolute inset-0 rounded-full blur-3xl opacity-60 scale-75 transition-all duration-1000"
                style={{
                  background: `radial-gradient(circle, ${activeProduct.glowColor} 0%, transparent 70%)`
                }}
              />

              {/* Slider Navigation Arrows */}
              <button 
                onClick={handlePrev}
                className="absolute left-0 z-20 p-3 rounded-full bg-white/80 border border-slate-100 text-slate-600 hover:text-[#005B8E] hover:bg-white shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
                aria-label="Previous product"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={handleNext}
                className="absolute right-0 z-20 p-3 rounded-full bg-white/80 border border-slate-100 text-slate-600 hover:text-[#005B8E] hover:bg-white shadow-md hover:scale-105 transition-all duration-300 cursor-pointer"
                aria-label="Next product"
              >
                <ChevronRight className="w-5 h-5" />
              </button>

              {/* Main Active Image Rendering */}
              <div className="relative w-4/5 h-4/5 flex items-center justify-center p-4">
                <img
                  src={activeProduct.image}
                  alt={activeProduct.title}
                  className={`w-full h-full object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.15)] animate-float transition-all duration-500 ${
                    isAnimating ? "opacity-30 scale-95 blur-sm" : "opacity-100 scale-100 blur-0"
                  }`}
                />
              </div>

              {/* Pedestal Shadow base */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-6 bg-gradient-to-t from-slate-200/50 to-transparent blur-xl rounded-full" />
            </div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" className="w-6 h-10 border-2 border-[#005B8E]/30 rounded-full flex justify-center pt-2 cursor-pointer">
          <div className="w-1 h-2 bg-[#005B8E]/50 rounded-full" />
        </a>
      </div>
    </section>
  )
}

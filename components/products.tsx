"use client"

import { useState, useEffect, useRef } from "react"
import { Package, Droplets, MapPin, Info } from "lucide-react"
import Image from "next/image"
import { EvixText } from "@/components/evix-text"

const productsData = [
  {
    id: "collection",
    title: "EVIX® Water Collection",
    image: "/evix-water-bottle-nature.webp",
    description: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 leading-relaxed">
          Born from a pristine Nigerian source, <EvixText /> delivers premium crystalline clarity and a smooth, refreshing taste that perfectly quenches your thirst.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          Our global team, spanning Nigeria, the UK, Italy, and Asia, blends global design sensibilities with uncompromising purity, transforming daily hydration into functional luxury.
        </p>
        <p className="text-lg font-medium text-[#C68E71] italic">
          Drink with purpose. Recycle. Keep Nigeria clean.
        </p>
      </div>
    ),
    specs: null
  },
  {
    id: "sachet",
    title: "The EVIX® Sachet",
    image: "/image/evix_pouch_product.png",
    description: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 leading-relaxed">
          Experience signature purity in its most versatile form. Designed for life on the move, our sleek, vibrant sachets combine elegant design with a crisp, clean finish.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          They preserve the purity of our naturally sourced water, an effortless essential for your dynamic lifestyle.
        </p>
        <p className="text-lg font-medium text-[#005B8E] italic">
          Uncompromising quality. Elevated design. For EVery You. EVery One. EVerywhere.
        </p>
      </div>
    ),
    specs: [
      { icon: Package, label: "Capacity options", value: "50cl" },
      { icon: MapPin, label: "Source", value: "Nigeria" },
      { icon: Droplets, label: "Content", value: "Naturally sourced still water" },
      { icon: Info, label: "Sachet", value: "Plastic" },
    ]
  },
  {
    id: "bottle",
    title: "The EVIX® Bottle",
    image: "/evix-pyramid-bottle-elegant-setting.webp",
    description: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 leading-relaxed">
          Commanding signature deep blue, the <EvixText /> bottle is functional luxury in its purest form. Premium plastic. Precision-embossed logo.
        </p>
        <p className="text-lg text-slate-600 leading-relaxed">
          Our rotating label design reflects the many sides of you, transforming everyday hydration into a signature experience.
        </p>
        <p className="text-lg font-medium text-[#005B8E] italic">
          Refined. Reusable. Distinct. For EVery You. EVery One. EVerywhere.
        </p>
      </div>
    ),
    specs: [
      { icon: Package, label: "Capacity options", value: "50cl, 75cl" },
      { icon: MapPin, label: "Source", value: "Nigeria" },
      { icon: Droplets, label: "Content", value: "Naturally sourced still water" },
      { icon: Info, label: "Bottle", value: "Plastic" },
    ]
  },
  {
    id: "dispenser",
    title: "The EVIX® Dispenser: Coming Soon",
    image: "/image/evix_dispenser.png",
    description: (
      <div className="space-y-4">
        <p className="text-lg text-slate-600 leading-relaxed">
          Premium hydration for your space, the ultimate upgrade, bringing signature design and unmatched purity to your home or office.
        </p>
      </div>
    ),
    specs: null
  }
]

export default function Products() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -40% 0px",
      threshold: 0.1,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("data-product-id")
          const index = productsData.findIndex((p) => p.id === id)
          if (index !== -1) {
            setActiveIndex(index)
          }
        }
      })
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)
    const elements = document.querySelectorAll("[data-product-id]")

    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
      observer.disconnect()
    }
  }, [])

  return (
    <section id="products" className="py-24 md:py-32 bg-gradient-to-b from-[#F4F7F6] to-white relative">
      {/* Decorative background elements wrapped to prevent sticky breaking */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#005B8E]/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#C68E71]/5 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#005B8E] font-bold tracking-wide">
            <EvixText /> Products
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            Discover our water collection
          </p>
        </div>

        {/* Sticky scroll layout container */}
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left Column: Sticky image viewer */}
          <div className="md:sticky md:top-28 w-full order-first md:order-first z-20">
            <div className="relative w-full aspect-[4/3] md:h-[550px] bg-gradient-to-br from-white to-[#F4F7F6] rounded-3xl overflow-hidden shadow-xl border border-slate-100/50 flex items-center justify-center">
              {/* Animated soft glow behind image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#005B8E]/5 to-[#C68E71]/5 opacity-60 pointer-events-none" />

              {productsData.map((product, idx) => (
                <div
                  key={product.id}
                  className={`absolute inset-0 w-full h-full flex items-center justify-center p-8 md:p-12 transition-all duration-700 ease-in-out ${activeIndex === idx
                    ? "opacity-100 scale-100 pointer-events-auto"
                    : "opacity-0 scale-95 pointer-events-none"
                    }`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      priority={idx === 0}
                      className="object-contain drop-shadow-[0_20px_50px_rgba(0,91,142,0.15)] transition-transform duration-700 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Visual indicators for active section */}
            <div className="hidden md:flex justify-center gap-3 mt-6">
              {productsData.map((product, idx) => (
                <button
                  key={product.id}
                  onClick={() => {
                    const el = document.getElementById(`product-${product.id}`)
                    el?.scrollIntoView({ behavior: "smooth", block: "center" })
                  }}
                  className={`h-2.5 rounded-full transition-all duration-500 ${activeIndex === idx
                    ? "w-8 bg-[#005B8E]"
                    : "w-2.5 bg-[#005B8E]/25 hover:bg-[#005B8E]/50"
                    }`}
                  aria-label={`Go to ${product.title}`}
                />
              ))}
            </div>
          </div>

          {/* Right Column: Scrollable details */}
          <div className="space-y-24 md:space-y-32 md:pb-32">
            {productsData.map((product, idx) => (
              <div
                key={product.id}
                id={`product-${product.id}`}
                data-product-id={product.id}
                className={`transition-all duration-500 min-h-[400px] flex flex-col justify-center scroll-mt-28 ${activeIndex === idx ? "opacity-100 transform translate-x-0" : "opacity-40 md:scale-98"
                  }`}
              >
                <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-slate-100 hover:border-slate-200/80 hover:shadow-xl transition-all duration-500 space-y-6">
                  {/* Category / Super-title */}
                  <span className="text-[#C68E71] font-semibold tracking-wider text-sm uppercase">
                    {idx === 0 ? "Introduction" : `Product 0${idx}`}
                  </span>

                  {/* Title */}
                  <h3 className="font-serif text-3xl md:text-4xl text-[#005B8E] font-bold tracking-wide">
                    {product.title.includes("EVIX®") ? (
                      <>
                        {product.title.split("EVIX®")[0]}
                        <EvixText />
                        {product.title.split("EVIX®")[1]}
                      </>
                    ) : (
                      product.title
                    )}
                  </h3>

                  {/* Description */}
                  <div className="text-slate-600 leading-relaxed space-y-4">
                    {product.description}
                  </div>

                  {/* Product specs if present */}
                  {product.specs && (
                    <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-6">
                      {product.specs.map((spec, specIdx) => {
                        const Icon = spec.icon
                        return (
                          <div key={specIdx} className="flex items-start gap-3">
                            <div className="p-2 rounded-lg bg-[#F4F7F6] text-[#C68E71] mt-0.5">
                              <Icon className="w-5 h-5 flex-shrink-0" />
                            </div>
                            <div>
                              <p className="font-semibold text-sm text-[#005B8E] uppercase tracking-wider">{spec.label}</p>
                              <p className="text-slate-600 text-base">{spec.value}</p>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

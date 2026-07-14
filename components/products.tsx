import { Package, Droplets, MapPin } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { EvixText } from "@/components/evix-text"

export default function Products() {
  return (
    <section id="products" className="py-24 md:py-32 bg-gradient-to-b from-[#F4F7F6] to-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#005B8E] font-bold tracking-wide">
            <EvixText /> Products
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            Discover our first pyramid-shaped bottle, inspired by Africa's pyramids
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Product image - using generated product image */}
            <div className="relative h-[500px] bg-gradient-to-br from-[#F4F7F6] to-[#005B8E]/5 flex items-center justify-center">
              <Image
                src="/image/evix_pouch_product.png"
                alt="EVIX Classic Pouch"
                fill
                className="object-contain p-8 md:p-12 transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Product details */}
            <div className="p-8 md:p-12 space-y-8">
              <div>
                <h3 className="font-serif text-4xl text-[#005B8E] font-bold tracking-wide mb-4"><EvixText /> Classic Pouch</h3>
                <p className="text-lg text-[#64748B] leading-relaxed">
                  Our signature naturally sourced still water sachet. Clean, pure, and extremely convenient. Sourced from Lagos, it features a lightweight, high-quality, recyclable pouch design that keeps water cold and fresh for any occasion.
                </p>
                <p className="text-base text-[#64748B] leading-relaxed mt-4">
                  Naturally hydrating, sustainably packaged, and crafted for a crisp, refreshing taste anytime,
                  anywhere.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Package className="w-6 h-6 text-[#C68E71] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#005B8E]">Capacity options</p>
                    <p className="text-[#64748B]">50cl</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-6 h-6 text-[#C68E71] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#005B8E]">Source</p>
                    <p className="text-[#64748B]">Lagos, Nigeria</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Droplets className="w-6 h-6 text-[#C68E71] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#005B8E]">Content</p>
                    <p className="text-[#64748B]">Naturally sourced still water</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Package className="w-6 h-6 text-[#C68E71] flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-[#005B8E]">Bottle</p>
                    <p className="text-[#64748B]">Recyclable plastic</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

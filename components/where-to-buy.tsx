import { MapPin, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EvixText } from "@/components/evix-text"

export default function WhereToBuy() {
  const stores = [
    { name: "Coming soon...", location: "Lagos" },
    { name: "Coming soon...", location: "Lagos" },
    { name: "Coming soon...", location: "Lagos" },
    { name: "Coming soon...", location: "Lagos" },
  ]

  return (
    <section id="where-to-buy" className="relative py-24 md:py-32 bg-gradient-to-b from-white to-[#F4F7F6]">
      <div className="absolute inset-0 bg-[url('/topological-map.svg')] bg-repeat opacity-20 mix-blend-multiply pointer-events-none" />
      <div className="container mx-auto px-4 max-w-5xl relative">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <ShoppingBag className="w-8 h-8 text-[#C68E71]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#005B8E] font-bold tracking-wide">
            <EvixText /> Where To Buy
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Pick up your <EvixText /> Pyramid Bottle
          </p>
        </div>

        {/* Nigeria Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#005B8E] to-[#004670] p-6">
            <h3 className="font-serif text-3xl text-white font-bold text-center">Nigeria</h3>
          </div>

          <div className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-6">
              {stores.map((store, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-6 rounded-lg bg-[#F4F7F6] hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#C68E71]/20"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#005B8E]/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#005B8E]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#005B8E] text-lg mb-1">{store.name}</h4>
                    <p className="text-[#64748B]">{store.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

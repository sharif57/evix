import { Bone, Activity, Heart, Shield, Droplet } from "lucide-react"
import { EvixText } from "@/components/evix-text"

const minerals = [
  {
    icon: Bone,
    name: "Calcium (Ca)",
    benefit: "Supports strong bones and teeth, gentle enough for babies and pregnant women.",
  },
  {
    icon: Activity,
    name: "Magnesium (Mg)",
    benefit: "Aids muscle function, energy metabolism, and relaxation, helping your body stay balanced.",
  },
  {
    icon: Shield,
    name: "Potassium (K)",
    benefit: "Supports healthy heart and nerve function, and contributes to hydration balance.",
  },
  {
    icon: Heart,
    name: "Sodium (Na)",
    benefit: "Naturally low, perfect for low-sodium diets, babies, and kidney-friendly hydration.",
  },
  {
    icon: Droplet,
    name: "Bicarbonate (HCO₃⁻)",
    benefit: "Helps digestive comfort and kidney health, may reduce risk of kidney stones with regular hydration.",
  },
]

export default function MineralComposition() {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start max-w-7xl mx-auto">
          {/* Left: Bottle image */}
          <div className="relative order-2 lg:order-1 sticky top-32">
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-radial from-[#005B8E]/10 via-transparent to-transparent blur-2xl" />

              {/* Product Purity Image */}
              <img
                src="/image/evix_purity_natural.png"
                alt="EVIX Water Pouch Natural Purity"
                className="relative w-full h-full object-cover rounded-3xl shadow-2xl border border-white/40"
              />

              {/* Accent decoration */}
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#C68E71]/20 rounded-full blur-3xl" />
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#005B8E]/10 rounded-full blur-2xl" />
            </div>
          </div>

          {/* Right: Mineral data */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#005B8E] font-bold tracking-wide">
                <EvixText /> Purity
              </h2>
              <p className="text-lg md:text-xl text-[#64748B] leading-relaxed">
                <EvixText /> is naturally sourced still water from Lagos, Nigeria, drawn from protected underground reservoirs.
                With exceptional purity, low minerals, and naturally low sodium, it is perfect for daily hydration, baby
                formula, pregnancy, kidney-friendly diets, and overall well-being.
              </p>
              <p className="text-base text-[#64748B] leading-relaxed">
                Free from additives or chemicals, each bottle is rigorously tested to exceed the highest quality
                standards. Hydrate with confidence and nourish your body, mind, and vitality.
              </p>
            </div>

            {/* Mineral list */}
            <div className="space-y-6 mt-12">
              {minerals.map((mineral, idx) => (
                <div
                  key={idx}
                  className="group flex gap-6 p-6 rounded-lg bg-[#F4F7F6] hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#C68E71]/20"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-[#005B8E]/10 flex items-center justify-center group-hover:bg-[#005B8E] transition-colors duration-300">
                    <mineral.icon className="w-7 h-7 text-[#005B8E] group-hover:text-white transition-colors duration-300" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="font-serif text-2xl text-[#005B8E] font-semibold tracking-wide">{mineral.name}</h3>
                    <p className="text-base text-[#64748B] leading-relaxed">{mineral.benefit}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quality badge */}
            <div className="mt-12 p-6 bg-gradient-to-r from-[#005B8E]/5 to-[#C68E71]/5 rounded-lg border border-[#005B8E]/10">
              <p className="text-sm font-semibold text-[#005B8E] tracking-wider uppercase mb-2">
                Mineral Composition mg/l
              </p>
              <p className="text-base text-[#64748B]">
                Sulfates & trace minerals naturally present to support overall metabolism and wellness without altering
                taste.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

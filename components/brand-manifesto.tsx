import { EvixText } from "@/components/evix-text"

export default function BrandManifesto() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F4F7F6] to-white" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/subtle-african-earth-texture-natural-stone-pattern.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        <div className="text-center space-y-12">
          {/* Quote */}
          <blockquote className="space-y-6">
            <p className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#005B8E] italic leading-tight tracking-wide">
              "Water no get enemy."
            </p>
            <cite className="block text-xl md:text-2xl text-[#C68E71] font-light tracking-wider not-italic">
              — Fela Kuti
            </cite>
          </blockquote>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C68E71]" />
            <div className="w-2 h-2 rotate-45 bg-[#C68E71]" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C68E71]" />
          </div>

          {/* Body text */}
          <div className="space-y-6">
            <p className="text-lg md:text-xl lg:text-2xl text-[#64748B] leading-relaxed font-light max-w-3xl mx-auto">
              <EvixText /> naturally sourced still water fuels your life <span>EV</span>ery day. From workouts to radiant skin, <span>EV</span>ery sip
              hydrates, energizes, and sharpens focus.
            </p>
            <p className="text-2xl md:text-3xl font-serif text-[#005B8E] font-bold tracking-wide">
              Purity is our commitment.
            </p>
            <p className="text-xl md:text-2xl text-[#64748B] font-light">
              Drink <EvixText />. <span className="text-[#C68E71] font-normal">Feel unstoppable.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

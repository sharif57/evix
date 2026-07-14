
import { EvixText } from "@/components/evix-text"

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100dvh-7rem)] flex items-center justify-center overflow-hidden bg-[#F4F7F6]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#F4F7F6] via-white to-[#F4F7F6]/50" />

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="text-center lg:text-left space-y-8">
            <p className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#64748B] tracking-wider leading-relaxed">
              <span>EV</span>ery you,
              <br />
              <span>EV</span>eryone,
              <br />
              <span>EV</span>eryWhere
            </p>
            <p className="text-lg md:text-xl text-[#64748B] max-w-xl leading-relaxed mx-auto lg:mx-0">
              <EvixText /> naturally sourced still water from Lagos. <br /> Purity is our commitment.
            </p>
          </div>

          {/* Right: 3D Bottle visualization */}
          <div className="relative flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-radial from-[#005B8E]/10 via-transparent to-transparent blur-3xl" />

              {/* Bottle mockup with pyramid shape */}
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  // src="/photorealistic-pyramid-tetrahedron-shaped-clear-wa.webp"
                  src="/image/evix_premium_pouch.png"
                  alt="EVIX Premium Water Pouch"
                  // 4/6
                  className="w-4/4 h-auto object-contain   border border-white/40 drop-shadow-2xl animate-float"
                />
              </div>

              {/* Accent elements */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-t from-[#C68E71]/20 to-transparent blur-xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-[#005B8E]/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#005B8E]/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}

import { Heart, Users, Leaf, Sparkles, Droplet, Shield } from "lucide-react"
import { EvixText } from "@/components/evix-text"

const pillars = [
  {
    icon: Shield,
    title: "THE EVIX® COMMITMENT",
    description:
      "Our commitment is absolute: protect the source, elevate the community, refine the future. We build today for the generations of tomorrow.",
  },
  {
    icon: Users,
    title: "FUTURE LEADERS",
    description:
      "Cultivating the next generation through financial literacy, literature, and peer mentorship.",
  },
  {
    icon: Sparkles,
    title: "SELF-CARE & WELLNESS",
    description:
      "Elevating the human experience through physical movement, intentional hydration, and mental clarity.",
  },
  {
    icon: Droplet,
    title: "ALKEBULAN'S MAGIC",
    description:
      "Honouring our roots by amplifying the history, culture, and enduring pride of our African continent.",
  },
  {
    icon: Leaf,
    title: "GREEN AFRICA",
    description:
      "A mandate for purity: tackling plastic pollution and championing environmental stewardship.",
  },
  {
    icon: Heart,
    title: "BUILDING LEGACY",
    description:
      "We do not just provide hydration; we cultivate the future. Our commitment is a constant flow of progress across four essential pillars.",
  },
]

export default function Sustainability() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image — user will swap src */}
      <div className="absolute inset-0">
        <img
          src="/african-children-community-education-lagos-warm-go.webp"
          alt="EVIX Cares community impact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#005B8E]/92 via-[#005B8E]/82 to-[#004670]/75" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">

          {/* Header */}
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center justify-center gap-2 mb-2">
              <Heart className="w-7 h-7 text-[#C68E71]" />
              <span className="text-[#C68E71] text-sm uppercase tracking-[0.3em] font-semibold">
                <EvixText /> Cares
              </span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-wide leading-tight">
              <span>EV</span>ery Drop Makes a Difference
            </h2>

            <div className="space-y-5 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              <p>
                Every sip of <EvixText /> water supports children across Africa (Alkebulan). At{" "}
                <EvixText />, we believe true luxury is purpose. Through our partnership with the{" "}
                <a
                  href="https://e3mazaya.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C68E71] font-semibold hover:text-[#D9A882] transition-colors duration-200 whitespace-nowrap"
                >
                  E<sup>3</sup> M.A.Z.A.Y.A. &amp; AMA PLANTER Foundation
                </a>
                , we are building a lasting legacy. Together, we are cultivating Future Leaders,
                promoting Self-Care, honouring Alkebulan&apos;s Magic, and ensuring a Green Africa.
              </p>
              <p>
                Featuring the <EvixText /> CARES anthem, a gift of time and creative collaboration from{" "}
                <span className="text-[#C68E71] font-semibold">Freddie Valentine</span>.
              </p>
              <p className="font-semibold">
                Luxury hydration that gives back. <span>EV</span>ery drop counts.
              </p>
            </div>
          </div>

          {/* 6-pillar grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {pillars.map((item, idx) => (
              <div
                key={idx}
                className="group text-center space-y-4 p-7 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 hover:border-[#C68E71]/40 transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto rounded-full bg-[#C68E71]/20 group-hover:bg-[#C68E71]/35 flex items-center justify-center transition-colors duration-300">
                  <item.icon className="w-7 h-7 text-[#C68E71]" />
                </div>
                <h3 className="font-serif text-base md:text-lg text-white font-bold tracking-widest uppercase">
                  {item.title.includes("EVIX®") ? (
                    <>
                      {item.title.split("EVIX®")[0]}
                      <EvixText />
                      {item.title.split("EVIX®")[1]}
                    </>
                  ) : (
                    item.title
                  )}
                </h3>
                <p className="text-white/80 leading-relaxed text-sm md:text-base">{item.description}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-14 text-center space-y-6">
            <a
              href="https://www.instagram.com/evixforlife/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#C68E71] hover:bg-[#B37D61] text-white px-10 py-4 text-base font-semibold rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl tracking-wide"
            >
              Follow our journey on Instagram
            </a>
            <div className="flex items-center justify-center gap-2 text-[#C68E71] font-semibold text-lg pt-2">
              <Heart className="w-5 h-5 fill-current" />
              <span>#EVIXCares</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

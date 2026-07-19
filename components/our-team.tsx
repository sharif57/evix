import { Shield } from "lucide-react"
import { EvixText } from "@/components/evix-text"

// Custom Avatar using the uploaded team sketch/illustration exactly as it is (no color tinting, background, or border)
const LineArtAvatar = ({ type, image }: { type: string; image: string }) => {
  return (
    <div className="relative w-36 h-36 mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
      {/* Render the illustration image */}
      <img
        src={image}
        alt={`${type} Avatar`}
        className="w-full h-full object-contain relative z-10 transition-transform duration-300"
      />
    </div>
  )
}

// 7 Team members defined in a clean JSON structure
const teamMembers = [
  {
    id: "origin",
    title: "THE ORIGIN",
    subtitle: "Founder & Visionary",
    location: "Global",
    image: "/image/image.png",
    category: "leadership",
  },
  {
    id: "hydrologist",
    title: "THE BRAND HYDROLOGIST",
    subtitle: "Shaping Flow & Creative Direction",
    location: "Nigeria/Europe",
    image: "/image/image copy.png",
    category: "core",
  },
  {
    id: "artisan",
    title: "THE FLOW ARTISAN",
    subtitle: "Graphics & Brand Imagery",
    location: "Asia",
    image: "/image/image copy 2.png",
    category: "core",
  },
  {
    id: "architect",
    title: "THE STREAM ARCHITECT",
    subtitle: "Digital Infrastructure",
    location: "Asia",
    image: "/image/image copy 3.png",
    category: "core",
  },
  {
    id: "csr-ripple",
    title: "THE RIPPLE EFFECT | EVIX® CARES",
    subtitle: "In partnership with the E3 M.A.Z.A.Y.A. & AMA PLANTER Foundation",
    location: "Africa/Alkebulan",
    description: "Every sip of EVIX® supports children across Africa. A transformation driven by the ripple of every drop.",
    image: "/image/image copy 4.png",
    category: "csr-partner",
  },
  {
    id: "visionary-apprentice",
    title: "THE RIPPLE VISIONARY",
    name: "Mr. Potato",
    subtitle: "Animation & Motion Apprentice",
    location: "Nigeria",
    image: "/image/image copy 5.png",
    category: "csr-apprentice",
  },
  {
    id: "navigator-apprentice",
    title: "THE RIPPLE NAVIGATOR",
    name: "Mr. Potato",
    subtitle: "Marketing Apprentice",
    location: "Nigeria",
    image: "/image/image copy 6.png",
    category: "csr-apprentice",
  },
]

export default function OurTeam() {
  // Extract members by category
  const originMember = teamMembers.find((m) => m.category === "leadership")
  const coreMembers = teamMembers.filter((m) => m.category === "core")
  const csrPartner = teamMembers.find((m) => m.category === "csr-partner")
  const csrApprentices = teamMembers.filter((m) => m.category === "csr-apprentice")

  return (
    <section id="our-team" className="py-24 md:py-32 bg-white overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-20 md:mb-28">
          <div className="inline-flex items-center gap-2 mb-2">
            <Shield className="w-6 h-6 text-[#C68E71]" />
            <span className="text-[#C68E71] text-sm uppercase tracking-[0.25em] font-bold">The Collective</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#005B8E] font-bold tracking-wide leading-tight">
            THE <EvixText /> TEAM
          </h2>
          <p className="text-lg md:text-xl text-[#005B8E] font-medium tracking-wide">
            Global expertise. Pure Nigerian source.
          </p>
          <p className="text-base text-[#64748B] max-w-2xl mx-auto leading-relaxed font-light">
            A world-class collective, united to redefine luxury hydration. 100% Made in Nigeria.
          </p>
        </div>

        {/* ── 1. The Anchor (THE ORIGIN) ── */}
        {originMember && (
          <div className="flex justify-center mb-16 md:mb-20">
            <div className="group text-center w-full max-w-sm p-8 rounded-3xl border-2 border-[#005B8E]/10 bg-[#F4F7F6]/30 shadow-lg hover:shadow-xl transition-all duration-300">
              <LineArtAvatar type={originMember.id} image={originMember.image} />
              <h3 className="font-serif text-2xl text-[#005B8E] font-bold tracking-wide mb-1">
                {originMember.title}
              </h3>
              <p className="text-sm font-semibold text-[#C68E71] uppercase tracking-wider mb-2">
                {originMember.subtitle}
              </p>
              <span className="inline-block px-3 py-1 bg-[#005B8E]/5 text-[#005B8E] text-xs font-semibold rounded-full uppercase tracking-wider">
                {originMember.location}
              </span>
            </div>
          </div>
        )}

        {/* ── 2. Core Team Grid ── */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-24 md:mb-32">
          {coreMembers.map((member) => (
            <div key={member.id} className="group text-center p-6 rounded-2xl border border-slate-100 bg-white hover:shadow-lg transition-all duration-300">
              <LineArtAvatar type={member.id} image={member.image} />
              <h4 className="font-serif text-lg md:text-xl text-[#005B8E] font-bold tracking-wide mb-1">
                {member.title}
              </h4>
              <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-3">
                {member.subtitle}
              </p>
              <span className="inline-block px-3 py-1 bg-slate-50 text-slate-500 text-xs font-semibold rounded-full uppercase tracking-wider border border-slate-100">
                {member.location}
              </span>
            </div>
          ))}
        </div>

        {/* ── 3. Charitable Department (CSR) Section ── */}
        <div className="relative max-w-5xl mx-auto bg-gradient-to-br from-[#FDF6F0] to-white border border-[#C68E71]/20 rounded-3xl p-8 md:p-12 shadow-md">
          {/* Label indicating CSR department distinction */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#C68E71] text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full shadow-sm">
            CSR Division
          </div>

          <div className="text-center max-w-2xl mx-auto space-y-4 mb-12">
            <h3 className="font-serif text-3xl text-[#005B8E] font-bold tracking-wide">
              EVIX® CARES &amp; EDUCATION
            </h3>
            <p className="text-sm text-[#C68E71] font-semibold tracking-wider uppercase">
              Vocational &amp; Apprentice Development Program
            </p>
            <p className="text-sm text-[#64748B] leading-relaxed">
              We transform potential into purpose through sustained vocational development.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* The Ripple Effect card */}
            {csrPartner && (
              <div className="group bg-white p-6 rounded-2xl border border-[#C68E71]/15 shadow-sm text-center flex flex-col justify-between">
                <div>
                  <LineArtAvatar type={csrPartner.id} image={csrPartner.image} />
                  <h4 className="font-serif text-base text-[#005B8E] font-bold tracking-wide mb-1 leading-tight">
                    THE RIPPLE EFFECT
                  </h4>
                  <p className="text-[10px] font-bold text-[#C68E71] uppercase tracking-widest mb-3">
                    EVIX® CARES
                  </p>
                  <p className="text-xs text-[#64748B] leading-relaxed font-light mb-4">
                    {csrPartner.description}
                  </p>
                </div>
                <div className="pt-2 border-t border-slate-50">
                  <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Partnership</p>
                  <a
                    href="https://e3mazaya.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#005B8E] hover:text-[#C68E71] transition-colors leading-tight block"
                  >
                    E3 M.A.Z.A.Y.A. &amp; AMA PLANTER
                  </a>
                </div>
              </div>
            )}

            {/* Ripple Apprentices */}
            {csrApprentices.map((apprentice) => (
              <div key={apprentice.id} className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center flex flex-col justify-between">
                <div>
                  <LineArtAvatar type={apprentice.id} image={apprentice.image} />
                  <h4 className="font-serif text-base text-[#005B8E] font-bold tracking-wide mb-1">
                    {apprentice.title}
                  </h4>
                  <p className="text-xs font-semibold text-[#C68E71] mb-2">&ldquo;{apprentice.name}&rdquo;</p>
                  <p className="text-xs text-[#64748B] leading-relaxed font-light">
                    {apprentice.subtitle}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-50">
                  <span className="inline-block px-2.5 py-0.5 bg-slate-50 text-slate-500 text-[10px] font-bold rounded-full uppercase tracking-wider border border-slate-100">
                    {apprentice.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

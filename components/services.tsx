import { Factory, CheckCircle2, MessageCircle, Mail, HelpCircle, Sparkles } from "lucide-react"
import { EvixText } from "@/components/evix-text"

export default function Services() {
  const suitableFor = [
    { title: "Water Brands", desc: "Scale your water brand with precision-manufactured PET bottles." },
    { title: "Beverage Companies", desc: "Reliable blow moulding for sodas, energy drinks, and flavored water." },
    { title: "Juice Producers", desc: "Food-safe PET packaging designed to preserve freshness and taste." },
    { title: "Start-Up Bottling Businesses", desc: "Flexible production volumes to launch and grow your business." },
  ]

  const WHATSAPP_URL = "https://wa.me/2349163002233"

  return (
    <section id="services" className="relative py-24 md:py-32 bg-[#F4F7F6] overflow-hidden">
      {/* Decorative background accents */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#005B8E]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#C68E71]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16 md:mb-24">
          <div className="inline-flex items-center gap-2 mb-2">
            <Factory className="w-6 h-6 text-[#C68E71]" />
            <span className="text-[#C68E71] text-sm uppercase tracking-[0.25em] font-bold">Manufacturing Services</span>
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#005B8E] font-bold tracking-wide leading-tight">
            PET Plastic Bottle Blowing Services
          </h2>
          <p className="text-lg text-[#64748B] leading-relaxed font-light">
            Bring your own bottle mould and preforms, and we will blow and produce your bottles for you.
            We provide PET bottle blowing services for water, beverages, and other liquid products.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Left Column: Image Area */}
          <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl bg-slate-200 border border-white/60 group">
            {/* Image placeholder — user will swap src with flyer photo */}
            <img
              src="/image/evix_dispenser.png"
              alt="PET Plastic Bottle Blowing Services"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Gradient shadow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#C68E71]" />
              <span className="text-sm font-semibold tracking-wider uppercase">EVIX Factory Production Line</span>
            </div>
          </div>

          {/* Right Column: Details & Suitability */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl md:text-3xl text-[#005B8E] font-bold">
                Suitable For:
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {suitableFor.map((item, idx) => (
                  <div key={idx} className="p-5 bg-white rounded-2xl border border-slate-100 hover:shadow-md transition-shadow duration-300 flex gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#C68E71] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-slate-800 text-sm">{item.title}</h4>
                      <p className="text-xs text-[#64748B] mt-1 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Custom Labeling Feature Card */}
            <div className="p-6 bg-gradient-to-r from-[#005B8E]/5 to-[#C68E71]/5 border border-[#005B8E]/10 rounded-2xl space-y-3">
              <div className="flex items-center gap-2 text-[#005B8E] font-semibold">
                <HelpCircle className="w-5 h-5 text-[#C68E71]" />
                <h4 className="font-serif text-lg">Custom Branded Water</h4>
              </div>
              <p className="text-sm text-[#64748B] leading-relaxed">
                We also offer personalised custom-labelled bottled water for events, businesses, exhibitions, and corporate branding. Elevate your brand presence with premium water customized for you.
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#C68E71] hover:bg-[#B37D61] text-white  font-semibold px-6 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:scale-[1.02] text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Inquire on WhatsApp
              </a>
              <a
                href="mailto:askus@evixforlife.com"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-slate-200 text-[#005B8E] font-semibold px-6 py-3.5 rounded-full transition-all duration-300 shadow-sm hover:scale-[1.02] text-sm"
              >
                <Mail className="w-4 h-4 text-[#C68E71]" />
                Email Factory Team
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

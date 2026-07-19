"use client"

import { useState } from "react"
import { MapPin, ShoppingBag, ChevronDown, ChevronUp, ExternalLink, Truck, Users, Car, Factory } from "lucide-react"
import { EvixText } from "@/components/evix-text"

const FACTORY_ADDRESS = "Orange Estate, Salemo Olorombo, Mowe, Ogun State, Nigeria"
const GOOGLE_MAPS_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FACTORY_ADDRESS)}`

const fulfillmentOptions = [
  {
    icon: Truck,
    title: "Delivered to You: Large Orders",
    desc: "Your bulk supply, delivered on schedule.",
  },
  {
    icon: Users,
    title: "Community Drop",
    desc: "Team up, order together, pick a date.",
  },
  {
    icon: Car,
    title: "Group Pickup",
    desc: "Order together, share transport, collect at Mowe.",
  },
  {
    icon: Factory,
    title: "Factory Pickup",
    desc: "Visit our Mowe factory, buy on-site, no delivery fee.",
  },
]

const comingSoonStores = [
  { location: "Lagos" },
  { location: "Lagos" },
  { location: "Lagos" },
]

export default function WhereToBuy() {
  const [factoryExpanded, setFactoryExpanded] = useState(false)

  return (
    <section id="where-to-buy" className="relative py-24 md:py-32 bg-gradient-to-b from-white to-[#F4F7F6]">
      <div className="absolute inset-0 bg-[url('/topological-map.svg')] bg-repeat opacity-20 mix-blend-multiply pointer-events-none" />
      <div className="container mx-auto px-4 max-w-5xl relative">

        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <ShoppingBag className="w-8 h-8 text-[#C68E71]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#005B8E] font-bold tracking-wide">
            <EvixText /> Where To Buy
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Find us at premium retailers or order in bulk direct from our factory.
          </p>
        </div>

        {/* Nigeria Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#005B8E] to-[#004670] p-6">
            <h3 className="font-serif text-3xl text-white font-bold text-center">Nigeria</h3>
          </div>

          <div className="p-8 md:p-12 space-y-6">

            {/* ── Factory / Bulk Card ── */}
            <div className="rounded-xl border border-[#C68E71]/40 bg-gradient-to-br from-[#FDF6F0] to-[#FFF9F5] shadow-md overflow-hidden">
              {/* Card header – always visible */}
              <div className="p-6">
                <div className="flex items-start gap-4">
                  {/* Map pin – clickable */}
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open factory location in Google Maps"
                    className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C68E71]/20 flex items-center justify-center hover:bg-[#C68E71]/40 transition-colors duration-200 cursor-pointer group"
                    title="Open in Google Maps"
                  >
                    <MapPin className="w-6 h-6 text-[#C68E71] group-hover:scale-110 transition-transform duration-200" />
                  </a>

                  <div className="flex-1 min-w-0">
                    {/* Title row */}
                    <div className="flex items-center flex-wrap gap-2 mb-1">
                      <h4 className="font-bold text-[#005B8E] text-xl">
                        <EvixText /> Factory
                      </h4>
                      <span className="text-xs font-semibold uppercase tracking-wider bg-[#C68E71] text-white px-2 py-0.5 rounded-full">
                        Bulk &amp; Wholesale
                      </span>
                    </div>

                    {/* Clickable address */}
                    <a
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#64748B] hover:text-[#C68E71] transition-colors duration-200 text-sm group"
                    >
                      <span>Mowe, Nigeria</span>
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    </a>
                  </div>

                  {/* Expand/collapse toggle */}
                  <button
                    onClick={() => setFactoryExpanded(!factoryExpanded)}
                    className="flex-shrink-0 flex items-center gap-1.5 text-sm text-[#C68E71] hover:text-[#a0704f] font-medium transition-colors duration-200 mt-1"
                    aria-expanded={factoryExpanded}
                  >
                    {factoryExpanded ? (
                      <>Less <ChevronUp className="w-4 h-4" /></>
                    ) : (
                      <>More <ChevronDown className="w-4 h-4" /></>
                    )}
                  </button>
                </div>
              </div>

              {/* Expandable detail panel */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${factoryExpanded ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
                  }`}
              >
                <div className="px-6 pb-6 border-t border-[#C68E71]/20 pt-4">
                  <p className="text-xs text-[#94A3B8] uppercase tracking-widest font-semibold mb-4">
                    Order &amp; Fulfillment Options
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {fulfillmentOptions.map(({ icon: Icon, title, desc }) => (
                      <div
                        key={title}
                        className="flex items-start gap-3 p-4 rounded-lg bg-white border border-[#C68E71]/10 hover:border-[#C68E71]/30 hover:shadow-sm transition-all duration-200"
                      >
                        <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#005B8E]/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-[#005B8E]" />
                        </div>
                        <div>
                          <p className="font-semibold text-[#005B8E] text-sm leading-snug">{title}</p>
                          <p className="text-[#64748B] text-xs mt-0.5 leading-relaxed">{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Full address */}
                  <a
                    href={GOOGLE_MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-xs text-[#C68E71] hover:text-[#a0704f] transition-colors duration-200"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{FACTORY_ADDRESS}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* ── Coming Soon Retail Cards ── */}
            <div className="grid md:grid-cols-3 gap-6">
              {comingSoonStores.map((store, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-6 rounded-lg bg-[#F4F7F6] hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-[#005B8E]/20"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#005B8E]/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#005B8E]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#005B8E] text-lg mb-0.5">Coming Soon</h4>
                    <p className="text-[#64748B] text-sm font-medium">Expanding retail</p>
                    <p className="text-[#94A3B8] text-xs mt-0.5">Nationwide availability</p>
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

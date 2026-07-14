"use client"

import { Instagram, Twitter, Facebook, Hash, Youtube } from "lucide-react"
import { EvixText } from "@/components/evix-text"
import { InteractiveBubbles } from "@/components/ui/interactive-bubbles"

const Tiktok = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

export default function SocialFeed() {
  const hashtags = [
    "#EVIXWater",
    "#EVIXSquad",
    "#HydrateToElevate",
    "#EveryDropMakesADifference",
  ]

  return (
    <section className="relative py-24 md:py-32 bg-white overflow-hidden">
      <InteractiveBubbles />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Hash className="w-8 h-8 text-[#C68E71]" />
          </div>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#005B8E] font-bold tracking-wide">
            Get Social
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            Stay hydrated, stay connected. Share your moments with us!
          </p>

          {/* Hashtags */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-6">
            {hashtags.map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-2 bg-[#F4F7F6] text-[#005B8E] rounded-full text-sm font-medium hover:bg-[#005B8E] hover:text-white transition-colors duration-300 cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-6 pt-8">
            <a
              href="https://instagram.com/Evixforlife"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-[#005B8E] hover:bg-[#C68E71] flex items-center justify-center transition-colors duration-300 group"
            >
              <Instagram className="w-7 h-7 text-white" />
            </a>
            <a
              href="https://twitter.com/Evixforlife"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-[#005B8E] hover:bg-[#C68E71] flex items-center justify-center transition-colors duration-300 group"
            >
              <Twitter className="w-7 h-7 text-white" />
            </a>
            <a
              href="https://facebook.com/Evixforlife"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-[#005B8E] hover:bg-[#C68E71] flex items-center justify-center transition-colors duration-300 group"
            >
              <Facebook className="w-7 h-7 text-white" />
            </a>
            <a
              href="https://tiktok.com/@Evixforlife"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-[#005B8E] hover:bg-[#C68E71] flex items-center justify-center transition-colors duration-300 group"
            >
              <Tiktok className="w-7 h-7 text-white" />
            </a>
            <a
              href="https://youtube.com/@Evixforlife"
              target="_blank"
              rel="noopener noreferrer"
              className="w-14 h-14 rounded-full bg-[#005B8E] hover:bg-[#C68E71] flex items-center justify-center transition-colors duration-300 group"
            >
              <Youtube className="w-7 h-7 text-white" />
            </a>
          </div>

          {/* Follow CTA */}
          <div className="text-center mt-12">
            <p className="text-xl text-[#64748B] mb-2">
              Follow us <span className="font-bold text-[#005B8E]">@<EvixText withReg={false} />ForLife</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

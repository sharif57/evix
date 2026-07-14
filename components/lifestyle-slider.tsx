"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EvixText } from "@/components/evix-text"

const lifestyleCards = [
  {
    title: "Socialite",
    subtitle: "Keep your energy up and your glow on",
    description: "Radiance. Confidence. Unstoppable energy. Hydration that powers your body, mind, and inner glow.",
    image: "/image/20220408_090030.jpg",
  },
  {
    title: "Fitness Fanatic",
    subtitle: "Maximize your workouts, recover faster, and maintain endurance",
    description:
      "Strength. Stamina. Peak performance. Hydration that fuels your muscles, boosts endurance, and speeds recovery.",
    image: "/image/lifestyle_fitness.png",
  },
  {
    title: "Beauty Lover",
    subtitle: "Support your skin's natural glow from the inside out",
    description:
      "Glow. Vitality. Wellness. Hydration that keeps your skin plump, smooth, and youthful while nourishing your body inside and out.",
    image: "/image/20220407_112224.jpg",
  },
  {
    title: "Globe Trotter",
    subtitle: "Travel without feeling drained",
    description:
      <>Refreshed. Energized. Limitless. Hydration that sharpens focus, boosts energy, and keeps you ready for <span>EV</span>ery adventure—near or far.</>,
    image: "/image/lifestyle_traveler.png",
  },
  {
    title: "Busy Professional",
    subtitle: "Stay sharp, focused, and productive",
    description:
      "Focus. Clarity. Vitality. Hydration that powers your brain, sharpens memory, and uplifts your mood for long, demanding days.",
    image: "/image/20220204_103249.jpg",
  },
  {
    title: "Student & Learner",
    subtitle: "Boost concentration, memory, and energy",
    description:
      "Alert. Inspired. Energized. Hydration that supports your mind and body, keeping you sharp during study, work, and creative pursuits.",
    image: "/image/20220411_095458 copy.jpg",
  },
  {
    title: "Pregnant & Nursing Moms",
    subtitle: "Stay nourished and energized",
    description:
      "Nourish. Thrive. Care. Hydration that supports healthy digestion, circulation, and overall wellness for both mom and baby.",
    image: "/image/lifestyle_mother.png",
  },
  {
    title: "Growing Children",
    subtitle: "Essential for learning, energy, and healthy growth",
    description: "Active. Focused. Bright. Hydration that keeps kids alert, energized, and engaged all day long.",
    image: "/image/20241025_114511.jpg",
  },
  {
    title: "Restoring Your Health",
    subtitle: "Speed up recovery and restore vitality",
    description:
      "Strong. Balanced. Vital. Hydration that boosts your immune system, supports detoxification, and replenishes your body efficiently.",
    image: "/image/lifestyle_recovery.png",
  },
]

export default function LifestyleSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % lifestyleCards.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + lifestyleCards.length) % lifestyleCards.length)
  }

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-[#F4F7F6]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#005B8E] font-bold tracking-wide">
            Hydration for <span>EV</span>ery lifestyle
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            Hydration is essential for <span>EV</span>ery body, mind, and lifestyle. From mental clarity and energy to skin health,
            physical performance, and overall wellness, <EvixText /> keeps you nourished and unstoppable, no matter your age,
            stage, or lifestyle.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Cards container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {lifestyleCards.map((card, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                    {/* Image */}
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={card.image || "/placeholder.svg"}
                        alt={card.title}
                        fill
                        className="object-cover transform hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#005B8E]/60 to-transparent" />
                    </div>

                    <div className="p-8 space-y-4">
                      <h3 className="font-serif text-3xl text-[#005B8E] font-bold tracking-wide">{card.title}</h3>
                      <p className="text-xl text-[#C68E71] font-medium">{card.subtitle}</p>
                      <p className="text-lg text-[#64748B] leading-relaxed">{card.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="w-12 h-12 rounded-full border-2 border-[#005B8E] text-[#005B8E] hover:bg-[#005B8E] hover:text-white transition-all duration-300 bg-transparent"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            {/* Indicators */}
            <div className="flex gap-2">
              {lifestyleCards.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? "w-8 bg-[#005B8E]" : "w-2 bg-[#005B8E]/30"
                    }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="w-12 h-12 rounded-full border-2 border-[#005B8E] text-[#005B8E] hover:bg-[#005B8E] hover:text-white transition-all duration-300 bg-transparent"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

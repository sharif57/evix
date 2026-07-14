"use client"

import { useState } from "react"
import { Sparkles, Calendar, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EvixText } from "@/components/evix-text"
import { Bubbles } from "@/components/ui/bubbles"

const challenges = [
  {
    icon: Sparkles,
    tabTitle: "Age Backwards",
    title: <>Age Backwards with <EvixText /></>,
    subtitle: "The 3-Month Challenge",
    description: <>Hydrate with only <EvixText /> water, drink minimum 2 litres daily — no sodas, no booze, no caffeine, no excuses. Just pure hydration.</>,
    timeline: [
      { week: "Week 1", result: "Feel energized and see fresher skin." },
      { week: "Week 4", result: "Sharper focus, better digestion." },
      { week: "Week 8", result: "Glowing skin, lighter body, and a refreshed mindset." },
      { week: "Final Day", result: "Unstoppable energy, radiant skin, and a whole new vibe." },
    ],
    color: "#005B8E",
  },
  {
    icon: Calendar,
    tabTitle: "Reset",
    title: <>Reset with <EvixText /></>,
    subtitle: "7 Days to a Healthier, Energized You",
    description:
      <>Detox in 7 days with <EvixText /> water and water-rich meals. No meat, no fish—just pure hydration and plant-based goodness.</>,
    timeline: [
      { day: "Day 1-3", meal: <>Breakfast: <EvixText /> + detox smoothie (cucumber, lemon, mint, spinach)</> },
      { day: "Day 1-3", meal: "Lunch: Veggie salad (tomatoes, cucumber, avocado, lemon dressing)" },
      { day: "Day 4-6", meal: "Water-rich fruits (watermelon, oranges, cucumber)" },
      { day: "Day 7", meal: <>Hydrate with <EvixText /> to finish strong</> },
    ],
    benefits: [
      "Stronger immunity",
      "Better digestion (less bloating)",
      "More energy",
      "Clearer, glowing skin",
      "Improved mood and focus",
      "Detoxified body",
    ],
    color: "#C68E71",
  },
  {
    icon: Heart,
    tabTitle: "Glow Up",
    title: <>Glow Up with <EvixText /></>,
    subtitle: "7-Day Skin Detox Challenge",
    description:
      <>Unlock your natural glow with <EvixText /> water and quirky skin care rituals. Hydrate, refresh, and detox in style.</>,
    rituals: [
      { time: "Morning", ritual: <>Wake & Hydrate: Splash your face with chilled <EvixText /> water</> },
      { time: "Morning", ritual: <>Ice Cube Facial: Freeze <EvixText /> water with mint or lavender</> },
      { time: "Midday", ritual: <> <EvixText /> Mist: Spritz with rose water + cucumber extract</> },
      { time: "Evening", ritual: <> <EvixText /> Night Cleanse: Wash with <EvixText /> water and green tea compress</> },
    ],
    benefits: ["Instant glow and hydration", "Tighter pores and smoother skin", "Less puffiness and more calm"],
    color: "#005B8E",
  },
]

export default function Challenge() {
  const [activeChallenge, setActiveChallenge] = useState(0)

  return (
    <section id="challenge" className="relative py-24 md:py-32 bg-gradient-to-b from-white via-[#F4F7F6] to-white overflow-hidden">
      <Bubbles />
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#005B8E] font-bold tracking-wide">
            <EvixText /> Challenge
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] max-w-3xl mx-auto leading-relaxed">
            Transform your health, skin, and energy with <EvixText />
          </p>
        </div>

        {/* Challenge tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {challenges.map((challenge, idx) => {
            const Icon = challenge.icon
            return (
              <Button
                key={idx}
                onClick={() => setActiveChallenge(idx)}
                variant={activeChallenge === idx ? "default" : "outline"}
                className={`px-6 py-3 text-base rounded-full transition-all duration-300 ${
                  activeChallenge === idx
                    ? "bg-[#005B8E] text-white shadow-lg"
                    : "bg-white text-[#005B8E] border-2 border-[#005B8E]/30 hover:border-[#005B8E]"
                }`}
              >
                <Icon className="w-5 h-5 mr-2" />
                {challenge.tabTitle}
              </Button>
            )
          })}
        </div>

        {/* Challenge content */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 md:p-12 space-y-8">
            <div className="text-center space-y-4">
              <h3 className="font-serif text-3xl md:text-4xl text-[#005B8E] font-bold tracking-wide">
                {challenges[activeChallenge].title}
              </h3>
              <p className="text-xl text-[#C68E71] font-medium">{challenges[activeChallenge].subtitle}</p>
              <p className="text-lg text-[#64748B] leading-relaxed max-w-3xl mx-auto">
                {challenges[activeChallenge].description}
              </p>
            </div>

            {/* Timeline or details */}
            <div className="space-y-6 max-w-4xl mx-auto">
              {challenges[activeChallenge].timeline && (
                <div className="space-y-4">
                  {challenges[activeChallenge].timeline?.map((item: any, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 p-6 bg-[#F4F7F6] rounded-lg hover:shadow-md transition-shadow duration-300"
                    >
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#005B8E] text-white flex items-center justify-center font-bold">
                        {idx + 1}
                      </div>
                      <div>
                        <p className="font-semibold text-[#005B8E] mb-1">{item.week || item.day}</p>
                        <p className="text-[#64748B]">{item.result || item.meal}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {challenges[activeChallenge].rituals && (
                <div className="grid md:grid-cols-2 gap-4">
                  {challenges[activeChallenge].rituals?.map((ritual, idx) => (
                    <div
                      key={idx}
                      className="p-6 bg-[#F4F7F6] rounded-lg hover:shadow-md transition-shadow duration-300"
                    >
                      <p className="font-semibold text-[#C68E71] mb-2">{ritual.time}</p>
                      <p className="text-[#64748B]">{ritual.ritual}</p>
                    </div>
                  ))}
                </div>
              )}

              {challenges[activeChallenge].benefits && (
                <div className="bg-gradient-to-r from-[#005B8E]/5 to-[#C68E71]/5 rounded-lg p-8">
                  <h4 className="font-serif text-2xl text-[#005B8E] font-bold mb-4">
                    {activeChallenge === 1 ? "Benefits by Day 7:" : "Benefits:"}
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {challenges[activeChallenge].benefits?.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#C68E71] mt-1">✓</span>
                        <span className="text-[#64748B]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="text-center space-y-4 pt-8">
              <p className="text-lg text-[#64748B]">
                Join the <span className="font-bold text-[#005B8E]">#EVIXSquad</span>, accept the challenge with{" "}
                <span className="font-bold text-[#C68E71]">#EVIXChallengeAccepted</span>, and share your journey on
                social media <span className="font-bold text-[#005B8E]">@EVIXWater</span>
              </p>
              <p className="text-xl font-semibold text-[#005B8E]">#HydrateToElevate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

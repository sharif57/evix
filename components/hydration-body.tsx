"use client"

import { useState } from "react"
import { Droplets, Brain, Heart, Sparkles, Activity, Flame } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { EvixText } from "@/components/evix-text"

const hydrationCategories = [
  {
    title: "Brain & Focus",
    icon: Brain,
    color: "#005B8E",
    facts: [
      "75% of your brain is water",
      "Enhances cognitive function and clarity",
      "Drinking water boosts focus and mental performance",
      "Thirst is a sign you're not hydrated enough",
    ],
  },
  {
    title: "Body & Performance",
    icon: Activity,
    color: "#C68E71",
    facts: [
      "65% of your body is water",
      "The average adult needs 2 liters per day",
      "Boosts physical performance and endurance",
      "Keeps joints lubricated, reducing pain",
    ],
  },
  {
    title: "Metabolism & Energy",
    icon: Flame,
    color: "#005B8E",
    facts: [
      "Water boosts metabolism by 30%",
      "Drinking water increases energy levels",
      "Small sips throughout the day maintain hydration",
      "Supports digestion and prevents constipation",
    ],
  },
  {
    title: "Skin & Beauty",
    icon: Sparkles,
    color: "#C68E71",
    facts: [
      "Hydrates skin, reducing wrinkles",
      "Improves skin elasticity and glow",
      "Drinking water supports skin health",
      "Flushes out toxins for clearer skin",
    ],
  },
  {
    title: "Health & Wellness",
    icon: Heart,
    color: "#005B8E",
    facts: [
      "Supports kidney health and function",
      "Improves mood and reduces fatigue",
      "Improves nutrient absorption",
      "Drinking water before meals helps control appetite",
    ],
  },
  {
    title: "Hydration Tips",
    icon: Droplets,
    color: "#C68E71",
    facts: [
      "Hunger can be a sign of dehydration",
      "Small sips are better than large gulps",
      "Water should be consumed regularly, not just when thirsty",
      <><span>EV</span>ery drop counts for your health</>,
    ],
  },
]

export default function HydrationBody() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [expandedFact, setExpandedFact] = useState<number | null>(null)

  return (
    <section className="py-24 md:py-32 bg-gradient-to-b from-white to-[#F4F7F6]">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#005B8E] font-bold tracking-wide">
            Hydration for <span>EV</span>ery Body
          </h2>
          <p className="text-lg md:text-xl text-[#64748B] max-w-2xl mx-auto leading-relaxed">
            Discover how <EvixText /> water benefits your unique physiology
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Interactive Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {hydrationCategories.map((category, idx) => {
              const Icon = category.icon
              return (
                <button
                  key={idx}
                  onClick={() => setActiveCategory(idx)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === idx
                      ? "bg-[#005B8E] text-white shadow-lg scale-105"
                      : "bg-white text-[#64748B] hover:bg-[#F4F7F6] hover:text-[#005B8E]"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-sm md:text-base">{category.title}</span>
                </button>
              )
            })}
          </div>

          {/* Animated Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-[#C68E71]/10"
            >
              <div className="flex items-center gap-4 mb-8 justify-center">
                {(() => {
                  const Icon = hydrationCategories[activeCategory].icon
                  return (
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
                      style={{ backgroundColor: hydrationCategories[activeCategory].color }}
                    >
                      <Icon className="w-9 h-9 text-white" />
                    </div>
                  )
                })()}
                <h3 className="font-serif text-3xl md:text-4xl font-bold text-[#005B8E]">
                  {hydrationCategories[activeCategory].title}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {hydrationCategories[activeCategory].facts.map((fact, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-gradient-to-br from-[#F4F7F6] to-white rounded-2xl p-6 border border-[#C68E71]/10 hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0"
                        style={{ backgroundColor: hydrationCategories[activeCategory].color }}
                      />
                      <p className="text-base md:text-lg text-[#64748B] leading-relaxed">{fact}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-16 text-center bg-gradient-to-r from-[#005B8E] to-[#C68E71] rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <Droplets className="w-12 h-12 text-white mx-auto mb-4" />
            <p className="font-serif text-2xl md:text-3xl text-white font-bold mb-2">
              Drink <EvixText /> — <span>EV</span>ery drop counts for your health!
            </p>
            <p className="text-white/90 text-lg">Your body deserves the best. Stay hydrated, stay unstoppable.</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

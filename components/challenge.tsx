"use client"

import { useState } from "react"
import { Sparkles, Calendar, Heart, Brain, Sun, HeartPulse, Gem, Crown, Plane, Dumbbell } from "lucide-react"
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
  {
    icon: Brain,
    tabTitle: "Brain Power",
    title: <>Stay Sharp with <EvixText /></>,
    subtitle: "Stay focused. Perform better. Avoid burnout.",
    description: "Hydration routine designed to sharpen focus, improve mental clarity, and sustain energy for study, exams, or demanding work.",
    schedule: [
      { time: "Wake", amount: "50cl", note: "", reason: "Rehydrate brain + start focus strong" },
      { time: "Before Focus", amount: "25–30cl", note: "20–30 min before work/study", reason: "Improve alertness and concentration" },
      { time: "During Study / Work", amount: "15–25cl every 30–45 min", note: "", reason: "Stay focused and avoid mental fatigue" },
      { time: "Before Exams / Deadlines", amount: "30–50cl", note: "45–60 min before", reason: "Support memory + mental performance" },
      { time: "Daily Total", amount: "200–250cl (2.0–2.5L)", note: "", reason: "", isTotal: true },
    ],
    rules: ["No more than 2 hours without water"],
    benefits: ["Improved focus", "Better mental clarity", "Sustained energy", "Reduced fatigue"],
    color: "#005B8E",
  },
  {
    icon: Sun,
    tabTitle: "Beat Heat",
    title: <>Beat the Heat with <EvixText /></>,
    subtitle: "Daily Hydration for Energy, Comfort & Heat Control",
    description: <>Hydrate with <EvixText /> water for energy, comfort and heat control — in traffic, outdoors, or wherever the heat finds you.</>,
    schedule: [
      { time: "Morning", amount: "50cl", note: "", reason: "" },
      { time: "Midday", amount: "50–75cl", note: "", reason: "" },
      { time: "Afternoon Heat", amount: "50–75cl", note: "", reason: "" },
      { time: "Evening", amount: "50–75cl", note: "", reason: "" },
      { time: "Daily Total", amount: "250–350cl (2.5–3.5L)", note: "", reason: "", isTotal: true },
    ],
    rules: [
      "Drink 15–25cl every 30–60 minutes in heat, traffic, or outdoor exposure",
      "Avoid large amounts at once — spread intake evenly throughout the day",
    ],
    benefits: [
      "Better hydration in hot conditions",
      "Reduced fatigue and heat stress",
      "More stable energy throughout the day",
      "Better comfort in traffic and outdoor heat",
      "Improved performance in hot weather",
    ],
    color: "#C68E71",
  },
  {
    icon: HeartPulse,
    tabTitle: "Get Well Soon",
    title: <><EvixText /> Feel Better Hydration</>,
    subtitle: "Feel better. Bounce back faster.",
    description: "Hydration support to help when you are feeling tired, run-down, or unwell. Optional infusions make hydration easier and support natural recovery.",
    scheduleWithInfusions: [
      { time: "Morning", amount: "50cl immediately after waking", reason: "Rehydrate after sleep and support energy", infusions: ["Lemon slices", "Cucumber slices", "Mint leaves"] },
      { time: "Throughout the Day", amount: "200–250cl (2.0–2.5L) evenly spaced", reason: "Maintain hydration and support natural recovery", infusions: ["Lemon + cucumber", "Lemon + mint", "Cucumber + mint"] },
      { time: "When Weak / Low Energy", amount: "15–25cl every 60–90 min", reason: "Small steady sips are easier on the body", infusions: ["Lemon water", "Cucumber water", "Mint water"] },
      { time: "Before Sleep", amount: "20–30cl, 1–2 hrs before bed", reason: "Supports hydration without disturbing sleep", infusions: ["Lemon water", "Cucumber water"] },
    ],
    benefits: [
      "Helps you feel better faster",
      "Reduces tiredness and weakness",
      "Supports hydration balance",
      "Supports natural immune function",
      "Supports the body's normal healing and repair",
      "Supports energy, comfort, and overall wellbeing",
    ],
    color: "#005B8E",
  },
  {
    icon: Gem,
    tabTitle: "Clear Skin",
    title: <><EvixText /> Complexion Challenge</>,
    subtitle: "The Daily Habit for Radiant Skin",
    description: "Clear skin is not one habit — it is consistency across hydration, lifestyle, and recovery. A simple routine designed to support a clearer, smoother you.",
    schedule: [
      { time: "Morning", amount: "50cl on waking", note: "", reason: "Refresh skin after sleep" },
      { time: "All Day", amount: "15–25cl every 60–90 min", note: "", reason: "Maintain smooth, balanced-looking skin" },
      { time: "Before Busy Periods", amount: "20–30cl", note: "Before work, study, or stress", reason: "Help reduce tired, dull appearance" },
      { time: "Evening", amount: "20–30cl", note: "1–2 hrs before sleep", reason: "Support overnight skin recovery" },
      { time: "Daily Total", amount: "2.0–2.5L", note: "", reason: "", isTotal: true },
    ],
    skinEssentials: [
      "Water & herbal teas", "Whole foods, low sugar", "No fizzy drinks, smoking, alcohol",
      "Wash & moisturise twice daily", "Simple skincare, no overload", "Train + walk/stretch + yoga daily",
      "Sleep 7+ hours", "Sunlight & fresh air", "Optional: infused water, cold rinse, stress control",
    ],
    resultsTimeline: [
      { period: "Days 1–3", results: ["More hydrated skin", "Less dryness", "Fresher look"] },
      { period: "Week 1", results: ["Smoother skin", "Less dullness", "More balance"] },
      { period: "Weeks 2–4", results: ["Even tone & texture", "Healthier look", "Better hydration"] },
      { period: "Ongoing", results: ["Healthier skin", "Fresher, smoother look", "Long-term improvement"] },
    ],
    color: "#C68E71",
  },
  {
    icon: Crown,
    tabTitle: "Peak Living",
    title: <>Power Your Potential with <EvixText /></>,
    subtitle: "Elevate Your Day, EVery Day",
    description: <><EvixText /> hydration. A better you, EVery day.</>,
    scheduleWithInfusions: [
      { time: "Morning Start", amount: "50cl on waking", reason: "Rehydrate after sleep, restore energy, start the day strong", infusions: ["Lemon infusion", "Cucumber infusion"] },
      { time: "During the Day", amount: "15–25cl every 60–90 min", reason: "Maintain steady hydration, avoid fatigue", infusions: ["Lime & ginger", "Berry mix", "Watermelon & mint"] },
      { time: "Busy Periods", amount: "20–30cl before focus periods", reason: "Support alertness, stamina, performance", infusions: ["Orange & ginger", "Pineapple & mint"] },
      { time: "Evening", amount: "20–30cl, 1–2 hrs before sleep", reason: "Maintain hydration without affecting sleep", infusions: ["Apple & cinnamon", "Peach & mint"] },
    ],
    dailyTotal: "200–250cl (2.0–2.5L) — increase in heat, training, or high activity",
    benefits: [
      "Energy – No mid-day crash",
      "Focus – Clear thinking, less fog",
      "Performance – More output, better consistency",
      "Balance – Stay calm under pressure",
      "Skin – Fresher, more radiant look",
      "Vitality – Better overall wellbeing",
    ],
    color: "#005B8E",
  },
  {
    icon: Plane,
    tabTitle: "Flight Ready",
    title: <>Fly with <EvixText /></>,
    subtitle: "Stay hydrated. Beat jet lag. Arrive refreshed.",
    description: "Pre-flight. In-flight. Post-flight. Maintain peak vitality across every time zone.",
    scheduleWithInfusions: [
      { time: "Day Before Flight", amount: "200cl (2.0L) across the day", reason: "Arrive hydrated, reduce fatigue, dryness & travel stress", infusions: ["Lemon infusion"] },
      { time: "During Flight", amount: "15–25cl every 60–90 min", reason: "Maintain steady hydration, avoid thirst", infusions: ["Lemon infusion", "Cucumber infusion"] },
      { time: "First 24 Hrs After Landing", amount: "200–250cl (2.0–2.5L) throughout the day", reason: "Restore hydration, reduce jet lag effects", infusions: ["Citrus infusion", "Mint infusion"] },
      { time: "Morning After Arrival", amount: "50cl on waking", reason: "Re-activate hydration, boost energy, reduce fatigue", infusions: ["Cucumber + mint", "Lemon + mint"] },
    ],
    benefits: [
      "Faster jet lag recovery",
      "Restored energy & focus",
      "Deep rehydration, less fatigue",
      "Fresher, hydrated skin",
      "Full body reset & recovery",
    ],
    color: "#C68E71",
  },
  {
    icon: Dumbbell,
    tabTitle: "Train Strong",
    title: <>Train with <EvixText /></>,
    subtitle: "Fitness Performance Upgrade",
    description: "Perform Better. Improve Faster. Recover Better. A hydration protocol designed to support performance, endurance, and post-workout recovery.",
    trainingPhases: [
      { phase: "2 Hours Before", focus: "Prime", intake: "50cl" },
      { phase: "30 Min Before", focus: "Pre-load", intake: "20–30cl" },
      { phase: "During — Light", focus: "Sustain", intake: "Optional" },
      { phase: "During — Moderate", focus: "Sustain", intake: "15–25cl every 20 min" },
      { phase: "During — Intense", focus: "Sustain", intake: "25cl every 15–20 min" },
      { phase: "After Training", focus: "Restore", intake: "50cl–150cl over 2–4 hours" },
    ],
    benefits: [
      "Better performance & endurance",
      "Hydration habit reset",
      "Total refreshment post-training",
      "Faster recovery, less fatigue",
      "Radiance & vitality support",
    ],
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

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {challenges.map((challenge, idx) => {
            const Icon = challenge.icon
            const isActive = activeChallenge === idx
            return (
              <button
                key={idx}
                onClick={() => setActiveChallenge(idx)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border-2 whitespace-nowrap ${
                  isActive
                    ? "bg-[#005B8E] text-white border-[#005B8E] shadow-lg"
                    : "bg-white text-[#005B8E] border-[#005B8E]/25 hover:border-[#005B8E] hover:shadow-md"
                }`}
              >
                <Icon className={`w-4 h-4 flex-shrink-0 ${isActive ? "text-white" : "text-[#005B8E]"}`} />
                {challenge.tabTitle}
              </button>
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

            {/* ── Render engine ── */}
            <div className="space-y-6 max-w-4xl mx-auto">

              {/* Legacy: timeline */}
              {(challenges[activeChallenge] as any).timeline && (
                <div className="space-y-4">
                  {(challenges[activeChallenge] as any).timeline.map((item: any, idx: number) => (
                    <div key={idx} className="flex gap-4 p-6 bg-[#F4F7F6] rounded-lg hover:shadow-md transition-shadow duration-300">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#005B8E] text-white flex items-center justify-center font-bold">{idx + 1}</div>
                      <div>
                        <p className="font-semibold text-[#005B8E] mb-1">{item.week || item.day}</p>
                        <p className="text-[#64748B]">{item.result || item.meal}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Legacy: rituals */}
              {(challenges[activeChallenge] as any).rituals && (
                <div className="grid md:grid-cols-2 gap-4">
                  {(challenges[activeChallenge] as any).rituals.map((ritual: any, idx: number) => (
                    <div key={idx} className="p-6 bg-[#F4F7F6] rounded-lg hover:shadow-md transition-shadow duration-300">
                      <p className="font-semibold text-[#C68E71] mb-2">{ritual.time}</p>
                      <p className="text-[#64748B]">{ritual.ritual}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* New: hydration schedule */}
              {(challenges[activeChallenge] as any).schedule && (
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-widest text-[#94A3B8] font-semibold mb-4">Hydration Schedule</p>
                  {(challenges[activeChallenge] as any).schedule.map((item: any, idx: number) => (
                    item.isTotal ? (
                      <div key={idx} className="flex items-center justify-between p-4 bg-gradient-to-r from-[#005B8E] to-[#004670] rounded-xl text-white">
                        <span className="font-semibold tracking-wide">{item.time}</span>
                        <span className="font-bold text-lg">{item.amount}</span>
                      </div>
                    ) : (
                      <div key={idx} className="flex gap-4 p-5 bg-[#F4F7F6] rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-[#C68E71]/20">
                        <div className="flex-shrink-0 min-w-[100px] md:min-w-[140px]">
                          <p className="font-semibold text-[#005B8E] text-sm">{item.time}</p>
                          {item.note && <p className="text-xs text-[#94A3B8] mt-0.5">{item.note}</p>}
                        </div>
                        <div className="flex-1 border-l border-[#C68E71]/20 pl-4">
                          <p className="font-bold text-[#005B8E]">{item.amount}</p>
                          {item.reason && <p className="text-sm text-[#64748B] mt-0.5">→ {item.reason}</p>}
                        </div>
                      </div>
                    )
                  ))}
                </div>
              )}

              {/* New: schedule with infusions */}
              {(challenges[activeChallenge] as any).scheduleWithInfusions && (
                <div className="space-y-4">
                  <p className="text-xs uppercase tracking-widest text-[#94A3B8] font-semibold mb-4">Hydration Schedule</p>
                  {(challenges[activeChallenge] as any).scheduleWithInfusions.map((item: any, idx: number) => (
                    <div key={idx} className="p-5 bg-[#F4F7F6] rounded-xl hover:bg-white hover:shadow-md transition-all duration-300 border border-transparent hover:border-[#C68E71]/20">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <p className="font-semibold text-[#005B8E]">{item.time}</p>
                          <p className="font-bold text-[#005B8E] text-sm mt-0.5">{item.amount}</p>
                        </div>
                        <p className="text-sm text-[#64748B] italic max-w-xs text-right">→ {item.reason}</p>
                      </div>
                      {item.infusions?.length > 0 && (
                        <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-[#C68E71]/10">
                          <span className="text-xs text-[#94A3B8] self-center">Optional infusions:</span>
                          {item.infusions.map((inf: string, i: number) => (
                            <span key={i} className="text-xs bg-white border border-[#C68E71]/30 text-[#C68E71] px-2.5 py-1 rounded-full font-medium">🍋 {inf}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* New: daily total (for Peak Living) */}
              {(challenges[activeChallenge] as any).dailyTotal && (
                <div className="flex items-center justify-between p-4 bg-gradient-to-r from-[#005B8E] to-[#004670] rounded-xl text-white">
                  <span className="font-semibold tracking-wide">Daily Total</span>
                  <span className="font-bold text-right text-sm md:text-base">{(challenges[activeChallenge] as any).dailyTotal}</span>
                </div>
              )}

              {/* New: rules */}
              {(challenges[activeChallenge] as any).rules && (
                <div className="bg-[#005B8E]/5 border border-[#005B8E]/15 rounded-xl p-5">
                  <p className="text-xs uppercase tracking-widest text-[#005B8E] font-semibold mb-3">Rule{(challenges[activeChallenge] as any).rules.length > 1 ? "s" : ""}</p>
                  <ul className="space-y-2">
                    {(challenges[activeChallenge] as any).rules.map((rule: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-[#64748B] text-sm">
                        <span className="text-[#005B8E] font-bold mt-0.5">◆</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* New: training phases table */}
              {(challenges[activeChallenge] as any).trainingPhases && (
                <div className="overflow-hidden rounded-xl border border-slate-100">
                  <div className="grid grid-cols-3 bg-[#005B8E] text-white text-xs uppercase tracking-wider font-semibold">
                    <div className="p-3">Phase</div>
                    <div className="p-3 border-l border-white/20">Focus</div>
                    <div className="p-3 border-l border-white/20">Intake</div>
                  </div>
                  {(challenges[activeChallenge] as any).trainingPhases.map((ph: any, idx: number) => (
                    <div key={idx} className={`grid grid-cols-3 text-sm border-t border-slate-100 hover:bg-[#F4F7F6] transition-colors ${idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}`}>
                      <div className="p-3 font-medium text-[#005B8E]">{ph.phase}</div>
                      <div className="p-3 border-l border-slate-100 text-[#C68E71] font-semibold">{ph.focus}</div>
                      <div className="p-3 border-l border-slate-100 text-[#64748B]">{ph.intake}</div>
                    </div>
                  ))}
                </div>
              )}

              {/* New: skin essentials */}
              {(challenges[activeChallenge] as any).skinEssentials && (
                <div className="bg-gradient-to-br from-[#FDF6F0] to-white border border-[#C68E71]/20 rounded-xl p-6">
                  <p className="text-xs uppercase tracking-widest text-[#C68E71] font-semibold mb-4">Skin Essentials</p>
                  <ul className="grid sm:grid-cols-2 gap-2">
                    {(challenges[activeChallenge] as any).skinEssentials.map((item: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#64748B]">
                        <span className="text-[#C68E71] mt-0.5 flex-shrink-0">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* New: results timeline (Clear Skin) */}
              {(challenges[activeChallenge] as any).resultsTimeline && (
                <div>
                  <p className="text-xs uppercase tracking-widest text-[#94A3B8] font-semibold mb-4">Results Over Time</p>
                  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {(challenges[activeChallenge] as any).resultsTimeline.map((period: any, idx: number) => (
                      <div key={idx} className="p-4 bg-white rounded-xl border border-[#C68E71]/15 hover:shadow-md transition-shadow duration-300">
                        <p className="font-bold text-[#005B8E] text-sm mb-3 pb-2 border-b border-[#C68E71]/15">{period.period}</p>
                        <ul className="space-y-1.5">
                          {period.results.map((r: string, i: number) => (
                            <li key={i} className="flex items-start gap-1.5 text-xs text-[#64748B]">
                              <span className="text-[#C68E71] mt-0.5">✓</span>
                              <span>{r}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Benefits */}
              {(challenges[activeChallenge] as any).benefits && (
                <div className="bg-gradient-to-r from-[#005B8E]/5 to-[#C68E71]/5 rounded-xl p-6 md:p-8">
                  <h4 className="font-serif text-xl text-[#005B8E] font-bold mb-4">
                    {(challenges[activeChallenge] as any).resultsTimeline ? "Key Benefits:" : (activeChallenge === 1 ? "Benefits by Day 7:" : "Benefits:")}
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {(challenges[activeChallenge] as any).benefits.map((benefit: string, idx: number) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#C68E71] mt-1 flex-shrink-0">✓</span>
                        <span className="text-[#64748B]">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            </div>

            <div className="text-center space-y-4 pt-8">
              <p className="text-lg text-[#64748B]">
                Accept the <span className="font-bold text-[#005B8E]"><EvixText /></span> challenge and share your journey
                with us on social media{" "}
                <span className="font-bold text-[#005B8E]">@EVIXWater</span> using the hashtag{" "}
                <span className="font-bold text-[#C68E71]">#EVIXWater</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

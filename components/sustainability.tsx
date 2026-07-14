import { Heart, Users, Leaf, Sparkles, Droplet } from "lucide-react"
import { Button } from "@/components/ui/button"
import { EvixText } from "@/components/evix-text"

export default function Sustainability() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="/african-children-community-education-lagos-warm-go.webp"
          alt="Community impact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#005B8E]/90 via-[#005B8E]/80 to-[#005B8E]/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Main content */}
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center justify-center gap-2 mb-4">
              <Heart className="w-8 h-8 text-[#C68E71]" />
              <span className="text-[#C68E71] text-sm uppercase tracking-widest font-semibold"><EvixText /> Cares</span>
            </div>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-bold tracking-wide leading-tight">
              <span>EV</span>ery Drop Makes a Difference
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              <p>At <EvixText />, quality and taste are never compromised, and our responsibility is always a priority.</p>
              <p>
                Each sip of <EvixText /> contributes to a sustainable future. Through{" "}
                <strong className="text-[#C68E71]"><EvixText /> Cares</strong> and the{" "}
                <a href="https://e3mazaya.com" target="_blank"><strong className="text-[#C68E71] whitespace-nowrap">E<sup>3</sup> M.A.Z.A.Y.A. Foundation</strong></a>, we empower children across Lagos
                and Africa (Alkebulan) with education in sustainability, nutrition, financial literacy, mental wellness,
                and self-care.
              </p>
              <p>
                Your support drives positive change, helping create a cleaner, healthier world.{" "}
                <strong>Luxury hydration that gives back — <span>EV</span>ery drop counts.</strong>
              </p>
            </div>
          </div>

          {/* Impact grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {[
              {
                icon: Users,
                title: "Education",
                description: "Empowering children with education in sustainability, nutrition, and wellness",
              },
              {
                icon: Droplet,
                title: "Community",
                description: "Creating a cleaner, healthier world for generations to come",
              },
              {
                icon: Leaf,
                title: "Sustainability",
                description: "Reducing our carbon footprint, optimizing packaging, protecting water sources",
              },
              {
                icon: Sparkles,
                title: "Innovation",
                description: "Developing sustainable solutions and technologies for the future",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="text-center space-y-4 p-8 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#C68E71]/20 flex items-center justify-center">
                  <item.icon className="w-8 h-8 text-[#C68E71]" />
                </div>
                <h3 className="font-serif text-2xl text-white font-semibold">{item.title}</h3>
                <p className="text-white/80 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-16 text-center space-y-6">
            <p className="text-white text-xl font-light italic">
              We are committed to sustainability: reducing our carbon footprint, optimizing packaging, and protecting
              our water sources for generations to come.
            </p>
            <Button
              size="lg"
              className="bg-[#C68E71] hover:bg-[#B37D61] text-white px-8 py-6 text-lg rounded-sm transition-all duration-300 shadow-lg hover:shadow-xl max-w-full h-auto whitespace-normal"
            >
              Join our journey toward a greener future
            </Button>
            <div className="flex items-center justify-center gap-3 text-[#C68E71] font-semibold text-lg pt-4">
              <Heart className="w-5 h-5 fill-current" />
              <span>#EveryDropMakesADifference</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

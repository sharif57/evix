import { Facebook, Instagram, Twitter, Mail, Phone, Recycle } from "lucide-react"
import Image from "next/image"
import { NewsletterForm } from "@/components/newsletter-form"
import { EvixText } from "@/components/evix-text"
import { CopyrightYear } from "@/components/copyright-year"

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#005B8E] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="font-serif text-3xl md:text-4xl font-bold tracking-wide">Subscribe & Join the #<EvixText withReg={false} />Squad</h3>
            <p className="text-white/80 text-lg">Get exclusive updates, offers, and sneak peeks at future products.</p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="space-y-6">
            <Image
              src="/evix-logo.webp"
              alt="EVIX"
              width={150}
              height={50}
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="text-white/80 leading-relaxed">
              Naturally sourced still water from Lagos. Purity is our commitment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-serif text-2xl font-semibold tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-white/80">
              <li>
                <a href="#about" className="hover:text-[#C68E71] transition-colors">
                  About <EvixText />
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#C68E71] transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#challenge" className="hover:text-[#C68E71] transition-colors">
                  <EvixText /> Challenge
                </a>
              </li>
              <li>
                <a href="#where-to-buy" className="hover:text-[#C68E71] transition-colors">
                  Where to Buy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="font-serif text-2xl font-semibold tracking-wide">Contact Us</h4>
            <div className="space-y-4 text-white/80">
              <p className="text-sm">Questions? Reach out to us:</p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#C68E71] flex-shrink-0" />
                <a href="mailto:askus@evixforlife.com" className="hover:text-[#C68E71] transition-colors">
                  askus@evixforlife.com
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#C68E71] flex-shrink-0" />
                <span>+234 916 300 22 33</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#C68E71] flex-shrink-0" />
                <span>+234 913 300 22 33</span>
              </p>
            </div>
          </div>

          {/* Sustainability Message */}
          <div className="space-y-6">
            <h4 className="font-serif text-2xl font-semibold tracking-wide">Sustainability</h4>
            <div className="space-y-4 text-white/80">
              <div className="flex items-start gap-3">
                <Recycle className="w-6 h-6 text-[#C68E71] flex-shrink-0 mt-1" />
                <p className="text-sm leading-relaxed">
                  Please recycle or place your <EvixText /> bottle in a bin to help keep our world clean.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
            <p><EvixText /> LIMITED | NAFDAC REG. NO: A1-108691L</p>
            <p>© <CopyrightYear /> <EvixText /> All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

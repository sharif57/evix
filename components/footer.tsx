"use client"

import { Instagram, Twitter, Facebook, Youtube, MessageCircle, Mail, Phone, Hash, Recycle } from "lucide-react"
import Image from "next/image"
import { NewsletterForm } from "@/components/newsletter-form"
import { EvixText } from "@/components/evix-text"
import { CopyrightYear } from "@/components/copyright-year"

const WHATSAPP_NUMBER = "2349163002233"
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

const Tiktok = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
)

const socials = [
  { href: "https://instagram.com/Evixforlife", icon: Instagram, label: "Instagram" },
  { href: "https://twitter.com/Evixforlife", icon: Twitter, label: "X / Twitter" },
  { href: "https://facebook.com/Evixforlife", icon: Facebook, label: "Facebook" },
  { href: "https://tiktok.com/@Evixforlife", icon: Tiktok, label: "TikTok" },
  { href: "https://youtube.com/@Evixforlife", icon: Youtube, label: "YouTube" },
]

const hashtags = ["#EVIXWater", "#EVIXCares"]

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#005B8E] text-white">

      {/* ── Contact Hero ── */}
      <div className="relative overflow-hidden border-b border-white/10 min-h-[500px] flex items-center bg-[#002B47]">
        {/* Luxury Background Gradients and Effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Main rich gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#004670] via-[#002B47] to-[#001424]" />
          {/* Glowing abstract circles/lights */}
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[80%] rounded-full bg-[#005B8E]/35 blur-[120px] pointer-events-none" />
          <div className="absolute bottom-[-30%] right-[-10%] w-[70%] h-[90%] rounded-full bg-[#C68E71]/15 blur-[150px] pointer-events-none" />
          {/* Soft water-like radial reflections */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(198,142,113,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_-20%,rgba(0,91,142,0.45),transparent_60%)]" />
        </div>
        {/* Subtle grid pattern overlay for precision look */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none" />


        <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-[#C68E71] font-semibold">Get In Touch</p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-tight">
              Contact <EvixText />
            </h2>
            <p className="text-lg md:text-xl text-white/85 max-w-2xl mx-auto leading-relaxed">
              How Can We Help You? For all bulk inquiries, distribution requests, and partnership details,
              our dedicated <EvixText /> advisors are ready to assist you.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              {/* WhatsApp */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#C68E71] hover:bg-[#B37D61] text-white  font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-base"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
              {/* Email */}
              <a
                href="mailto:askus@evixforlife.com"
                className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 text-base"
              >
                <Mail className="w-5 h-5" />
                askus@evixforlife.com
              </a>
            </div>

            {/* Phone numbers */}
            <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-white/70 text-sm">
              <a href="tel:+2349163002233" className="flex items-center gap-2 hover:text-[#C68E71] transition-colors">
                <Phone className="w-4 h-4 text-[#C68E71]" />
                +234 916 300 2233
              </a>
              <a href="tel:+2349133002233" className="flex items-center gap-2 hover:text-[#C68E71] transition-colors">
                <Phone className="w-4 h-4 text-[#C68E71]" />
                +234 913 300 2233
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Get Social (Split Screen Instagram Feed) ── */}
      <div className="relative border-b border-slate-100 bg-[#F4F7F6]">
        <div className="flex flex-col lg:flex-row w-full">
          {/* Left Panel: CTA */}
          <div className="w-full lg:w-4/12 flex flex-col justify-center items-center lg:items-start text-center lg:text-left p-12 md:p-16 lg:p-20 xl:p-24 bg-[#F4F7F6] z-10">
            <div className="space-y-6 max-w-sm">
              <h3 className="font-serif text-4xl md:text-5xl font-light text-[#005B8E] tracking-wide leading-tight">
                Get social <br />with us
              </h3>
              <p className="text-base md:text-lg text-[#64748B] font-light">
                Stay hydrated, stay in touch.
              </p>

              {/* Only two hashtags */}
              <div className="flex flex-wrap gap-2 pt-2 justify-center lg:justify-start">
                {hashtags.map((tag, idx) => (
                  <span key={idx} className="text-sm font-semibold text-[#005B8E]">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="pt-4 space-y-4">
                <a
                  href="https://www.instagram.com/evixforlife/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-3.5 border border-[#005B8E]/60 hover:border-[#005B8E] text-[#005B8E] hover:bg-[#005B8E] hover:text-white transition-all duration-300 text-xs font-bold uppercase tracking-widest rounded-sm"
                >
                  Get Social
                </a>

                {/* All social icons */}
                <div className="flex items-center gap-4 justify-center lg:justify-start pt-2">
                  {socials.map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="text-[#005B8E] hover:text-[#C68E71] transition-colors duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel: 2x4 Image Grid */}
          <div className="w-full lg:w-8/12 grid grid-cols-2 sm:grid-cols-4 gap-[2px] bg-slate-200">
            {[
              { img: "/evix-pyramid-bottle-elegant-setting.webp", likes: "1.4k" },
              { img: "/image/lifestyle_fitness.png", likes: "982" },
              { img: "/image/lifestyle_beauty.png", likes: "2.1k" },
              { img: "/evix-pyramid-bottle-lifestyle.webp", likes: "1.1k" },
              { img: "/image/lifestyle_traveler.png", likes: "845" },
              { img: "/image/lifestyle_socialite.png", likes: "3.2k" },
              { img: "/image/lifestyle_student.png", likes: "1.7k" },
              { img: "/image/lifestyle_professional.png", likes: "1.2k" },
            ].map((post, idx) => (
              <a
                key={idx}
                href="https://www.instagram.com/evixforlife/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square w-full bg-slate-100 overflow-hidden block"
              >
                <img
                  src={post.img}
                  alt="EVIX Instagram"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Minimal Overlay on Hover */}
                <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white z-10">
                  <Instagram className="w-6 h-6 text-white mb-1.5" />
                  <span className="text-xs font-semibold">❤️ {post.likes}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Newsletter ── */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h3 className="font-serif text-3xl md:text-4xl font-bold tracking-wide">
              Subscribe to Pure Hydration
            </h3>
            <p className="text-white/80 text-lg">Get exclusive updates, offers, and sneak peeks at future products.</p>
            <NewsletterForm />
          </div>
        </div>
      </div>

      {/* ── Main footer grid ── */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Image src="/evix-logo.webp" alt="EVIX" width={150} height={50} className="h-10 w-auto brightness-0 invert" />
            <p className="text-white/80 leading-relaxed text-sm">
              Naturally sourced still water from Nigeria. Purity is our commitment.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-semibold tracking-wide">Quick Links</h4>
            <ul className="space-y-3 text-white/80 text-sm">
              {[
                { label: "About EVIX®", href: "#about" },
                { label: "Products", href: "#products" },
                { label: "Where to Buy", href: "#where-to-buy" },
                { label: "Our Services", href: "#challenge" },
                { label: "EVIX® Cares", href: "#sustainability" },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="hover:text-[#C68E71] transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-serif text-xl font-semibold tracking-wide">Contact Us</h4>
            <div className="space-y-3 text-white/80 text-sm">
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-[#25D366] transition-colors">
                <MessageCircle className="w-4 h-4 text-[#C68E71] flex-shrink-0" />
                WhatsApp Us
              </a>
              <a href="mailto:askus@evixforlife.com" className="flex items-center gap-2 hover:text-[#C68E71] transition-colors">
                <Mail className="w-4 h-4 text-[#C68E71] flex-shrink-0" />
                askus@evixforlife.com
              </a>
              <a href="tel:+2349163002233" className="flex items-center gap-2 hover:text-[#C68E71] transition-colors">
                <Phone className="w-4 h-4 text-[#C68E71] flex-shrink-0" />
                +234 916 300 2233
              </a>
            </div>
          </div>

          {/* Sustainability note */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <Recycle className="w-5 h-5 text-[#C68E71]" />
              <h4 className="font-serif text-xl font-semibold tracking-wide">Sustainability</h4>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Please recycle or place your <EvixText /> packaging in a bin to help keep Nigeria and the world clean.
            </p>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/50">
            <p><EvixText /> NIGERIA LIMITED | NAFDAC REG. NO: A1-108691L</p>
            <p>© <CopyrightYear /> <EvixText /> All rights reserved.</p>
          </div>
        </div>
      </div>

    </footer>
  )
}

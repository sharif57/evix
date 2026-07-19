import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import BrandManifesto from "@/components/brand-manifesto"
import HydrationBody from "@/components/hydration-body"
import LifestyleSlider from "@/components/lifestyle-slider"
import MineralComposition from "@/components/mineral-composition"
import Products from "@/components/products"
import Challenge from "@/components/challenge"
import Sustainability from "@/components/sustainability"
import WhereToBuy from "@/components/where-to-buy"
import Services from "@/components/services"
import OurTeam from "@/components/our-team"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-22">
        <HeroSection />
        <BrandManifesto />
        <section id="products">
          <Products />
        </section>
        <MineralComposition />
        <LifestyleSlider />
        <section id="where-to-buy">
          <WhereToBuy />
        </section>
        <Services />
        <HydrationBody />
        <Challenge />
        <section id="sustainability">
          <Sustainability />
        </section>
        <OurTeam />
        <section id="contact">
          <Footer />
        </section>
      </main>
    </>
  )
}

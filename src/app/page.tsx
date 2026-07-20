import HeroSection from "@/components/specific/HeroSection/HeroSection"
import DenunciaCtaSection from "@/components/specific/DenunciaCtaSection/DenunciaCtaSection"
import DenunciaSection from "@/components/specific/DenunciaSection/DenunciaSection"
import EcommerceHeroSection from "@/components/specific/EcommerceHeroSection/EcommerceHeroSection"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <DenunciaCtaSection />
      <DenunciaSection />
      <EcommerceHeroSection />
    </main>
  )
}
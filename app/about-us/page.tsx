import { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AboutHeroSection } from "@/components/about/about-hero-section"
import { AboutServicesSection } from "@/components/about/about-services-section"
import { AboutMSMESection } from "@/components/about/about-msme-section"
import { AboutMissionSection } from "@/components/about/about-mission-section"
import { AboutPartnersSection } from "@/components/about/about-partners-section"
import { ContactSection } from "@/components/contact-section"
import Image from "next/image"

export const metadata: Metadata = {
  title: "About Us - Vyapaar Vani",
  description: "Learn about Vyapaar Vani - India's trusted MSME advisory platform empowering startups and MSMEs with funding, business support, and growth consulting.",
}

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-[#f5f0e6]">
      <Header />
      <AboutHeroSection />
      <AboutServicesSection />
      
      {/* Torn paper edge transition */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-22 -mb-12 -mt-7">
        <Image
          src="/images/torn-edge.png"
          alt="Section divider"
          fill
          className="object-cover object-top scale-y-[-1]"
          priority
        />
      </div>
      
      <AboutMSMESection />
      
      {/* Torn paper edge transition */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-22 -mb-12 -mt-7">
        <Image
          src="/images/torn-edge.png"
          alt="Section divider"
          fill
          className="object-cover object-top scale-y-[-1]"
          priority
        />
      </div>
      
      <AboutMissionSection />
      
      {/* Torn paper edge transition */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-22 -mb-12 -mt-7">
        <Image
          src="/images/torn-edge.png"
          alt="Section divider"
          fill
          className="object-cover object-top scale-y-[-1]"
          priority
        />
      </div>
      
      <AboutPartnersSection />
      
      {/* Torn paper edge transition */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-22 -mb-12 -mt-7">
        <Image
          src="/images/torn-edge.png"
          alt="Section divider"
          fill
          className="object-cover object-top scale-y-[-1]"
          priority
        />
      </div>
      
      <ContactSection />
      
      <Footer />
    </main>
  )
}

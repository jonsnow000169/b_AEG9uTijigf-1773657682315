import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WhatIsSection } from "@/components/what-is-section"
import { WhatWeDoSection } from "@/components/what-we-do-section"
import { TopUpdatesSection } from "@/components/top-updates-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import Image from "next/image"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f0e6]">
      <Header />
      <HeroSection />
      
      <WhatIsSection />
      
      <WhatWeDoSection />
      
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
      
      <TopUpdatesSection />
      
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
      
      <TestimonialsSection />
      
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

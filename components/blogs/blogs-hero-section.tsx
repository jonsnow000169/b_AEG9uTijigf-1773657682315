'use client'

import Image from "next/image"

interface BlogsHeroSectionProps {
  badge?: string
  titleLine1?: string
  titleHighlight?: string
  titleLine2?: string
  description?: string
}

export function BlogsHeroSection({
  badge = "आपकी सफलता, हमारी ज़िम्मेदारी",
  titleLine1 = "Empowering WomenEntrepreneurs",
  titleHighlight = "Yogdan's Mahila",
  titleLine2 = "Empowerment Scheme",
  description = "A groundbreaking initiative offering grants up to ₹15 Lakhs and comprehensive support for women-led startups across India"
}: BlogsHeroSectionProps) {
  return (
    <section className="relative w-full bg-[#FFFDF4]">
      {/* Logo at top */}
      <div className="flex justify-center pt-6">
        <div className="relative w-16 h-16 md:w-20 md:h-20">
          <Image
            src="/images/vyapaar-logo-circle.png"
            alt="Vyapaar Vani Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col items-center justify-center text-center px-4 pt-8 pb-12">
        {/* Hindi Badge */}
        <div className="flex items-center gap-2 bg-white rounded-full px-4 py-1.5 mb-6 shadow-sm border border-gray-100">
          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
          <span className="text-xs md:text-sm text-gray-600 font-medium">{badge}</span>
        </div>
        
        {/* Main Title */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif text-[#2a2a2a] mb-2 text-balance">
          {titleLine1}
        </h1>
        <h2 className="text-xl md:text-3xl lg:text-4xl font-serif mb-6">
          <span className="text-[#2a2a2a]">Startup </span>
          <span className="text-orange-500">{titleHighlight}</span>
          <span className="text-[#2a2a2a]"> {titleLine2}</span>
        </h2>
        
        {/* Description */}
        <p className="text-sm md:text-base text-[#5a5a5a] max-w-2xl leading-relaxed text-balance">
          {description}
        </p>
      </div>
    </section>
  )
}

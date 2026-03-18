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
  titleLine1 = "Empowering Women Entrepreneurs",
  titleHighlight = "Yogdan's Mahila",
  titleLine2 = "Empowerment Scheme",
  description = "A groundbreaking initiative offering grants up to ₹15 Lakhs and comprehensive support for women-led startups across India"
}: BlogsHeroSectionProps) {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Orange Sunburst Background */}
      <div className="relative w-full h-[280px] md:h-[320px]">
        <Image
          src="/images/about-hero-bg.jpg"
          alt="Sunburst background"
          fill
          className="object-cover object-center"
          priority
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-8">
          {/* Hindi Badge */}
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4 shadow-sm">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            <span className="text-xs md:text-sm text-gray-700 font-medium">{badge}</span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif text-[#2a2a2a] mb-2">
            {titleLine1}
          </h1>
          <h2 className="text-xl md:text-3xl lg:text-4xl font-serif mb-4">
            <span className="text-[#2a2a2a]">Startup </span>
            <span className="text-orange-500">{titleHighlight}</span>
            <span className="text-[#2a2a2a]"> {titleLine2}</span>
          </h2>
          
          {/* Description */}
          <p className="text-sm md:text-base text-[#4a4a4a] max-w-2xl leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      
      {/* Torn Edge at Bottom */}
      <div className="relative w-full h-10 -mt-1">
        <Image
          src="/images/torn-edge.png"
          alt="Section divider"
          fill
          className="object-cover object-top"
          priority
        />
      </div>
    </section>
  )
}

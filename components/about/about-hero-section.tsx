import Image from "next/image"

export function AboutHeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Orange sunburst background */}
      <div className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[550px]">
        <Image
          src="/images/about-hero-bg.jpg"
          alt="Orange sunburst background"
          fill
          className="object-cover object-top"
          priority
        />
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col items-center pt-8 md:pt-12 px-4">
          {/* Headline */}
          <div className="text-center mb-6 md:mb-10">
            <h1 className="font-serif italic text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-2">
              Every Big Dream Starts With A Small Idea.
            </h1>
            <p className="font-serif italic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-900">
              Cheers To Startups Shaping Our Future!
            </p>
          </div>
          
          {/* Team Image - positioned to touch bottom */}
          <div className="relative w-full max-w-4xl mx-auto mt-auto">
            <Image
              src="/images/about-team.png"
              alt="Team of entrepreneurs and workers representing MSMEs"
              width={1200}
              height={500}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
      
      {/* Logo overlapping section - positioned half on image, half on white */}
      <div className="relative bg-[#FFFDEF]">
        {/* Logo positioned to overlap */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-16 md:-top-20 lg:-top-24 z-10">
          <div className="relative">
            {/* White semi-circle background for bottom half of logo */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120px] h-[60px] md:w-[160px] md:h-[80px] lg:w-[180px] lg:h-[90px] bg-[#FFFDEF] rounded-t-full" />
            <Image
              src="/images/vyapaar-logo-circle.png"
              alt="Vyapaar Vani Logo"
              width={180}
              height={180}
              className="w-[120px] h-[120px] md:w-[160px] md:h-[160px] lg:w-[180px] lg:h-[180px] relative z-10"
            />
          </div>
        </div>
        
        {/* Tagline content */}
        <div className="pt-20 md:pt-28 lg:pt-32 pb-10 md:pb-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Tagline */}
            <p className="text-gray-700 text-base md:text-lg mb-1">
              Experience self-paced{" "}
              <span className="text-[#f7941d] font-semibold underline decoration-[#f7941d] underline-offset-2">learning</span>{" "}
              alongside
            </p>
            <p className="text-gray-700 text-base md:text-lg mb-6">
              <span className="text-[#0099cc] font-semibold underline decoration-[#0099cc] underline-offset-2">live group</span>{" "}
              <span className="text-[#0099cc] font-semibold underline decoration-[#0099cc] underline-offset-2">discussions</span>.
            </p>
            
            {/* Description */}
            <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              A groundbreaking initiative offering grants up to ₹15 Lakhs and comprehensive support for women-led startups across India
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"

export function AboutHeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Orange sunburst background */}
      <div className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
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
          
          {/* Team Image */}
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
      
      {/* Logo and tagline section */}
      <div className="bg-[#FFFDEF] py-10 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src="/images/vyapaar-logo-circle.png"
              alt="Vyapaar Vani Logo"
              width={150}
              height={150}
              className="w-24 h-24 md:w-32 md:h-32 lg:w-36 lg:h-36"
            />
          </div>
          
          {/* Tagline */}
          <p className="text-gray-700 text-base md:text-lg mb-2">
            Experience self-paced{" "}
            <span className="text-[#f7941d] font-semibold underline decoration-[#f7941d]">learning</span>{" "}
            alongside
          </p>
          <p className="text-gray-700 text-base md:text-lg mb-6">
            <span className="text-[#0099cc] font-semibold underline decoration-[#0099cc]">live group</span>{" "}
            <span className="text-[#0099cc] font-semibold underline decoration-[#0099cc]">discussions</span>.
          </p>
          
          {/* Description */}
          <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            A groundbreaking initiative offering grants up to ₹15 Lakhs and comprehensive support for women-led startups across India
          </p>
        </div>
      </div>
    </section>
  )
}

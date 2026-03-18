import Image from "next/image"

export function HeroSection() {
  return (
    <section id="home" className="relative w-full scroll-mt-24">
      <div className="relative w-full">
        <Image
          src="/images/hero-bg.png"
          alt="Vyapaar Vani Hero Background"
          width={1920}
          height={800}
          className="w-full h-auto"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-start pt-8 md:pt-16 text-center px-4">
          <h1 className="font-serif italic text-3xl md:text-5xl lg:text-6xl text-gray-900 mb-2">
            Connecting Startups
          </h1>
          <p className="font-serif italic text-2xl md:text-4xl lg:text-5xl text-gray-900 mb-6">
            to Success
          </p>
          <p className= "hidden md:block text-gray-700 text-sm md:text-base max-w-2xl">
            Empowering startups with mentorship, funding access, and strategic
            support to turn innovative ideas into thriving businesses.
          </p>
        </div>
      </div>
    </section>
  )
}

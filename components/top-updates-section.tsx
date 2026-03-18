import { ArrowRight } from "lucide-react"
import Image from "next/image"

const newsItems = [
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tzzSz1wY4uTptFeE2ha4qX2aN7jlFQ.png",
    text: "We believe that the right information is the foundation of successful business, which is why every piece of content"
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tzzSz1wY4uTptFeE2ha4qX2aN7jlFQ.png",
    text: "We believe that the right information is the foundation of successful business, which is why every piece of content"
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tzzSz1wY4uTptFeE2ha4qX2aN7jlFQ.png",
    text: "We believe that the right information is the foundation of successful business, which is why every piece of content"
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tzzSz1wY4uTptFeE2ha4qX2aN7jlFQ.png",
    text: "We believe that the right information is the foundation of successful business, which is why every piece of content"
  },
  {
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-tzzSz1wY4uTptFeE2ha4qX2aN7jlFQ.png",
    text: "We believe that the right information is the foundation of successful business, which is why every piece of content"
  },
]

export function TopUpdatesSection() {
  return (
    <section id="updates" className="py-29 px-4 bg-[#FFFDEF] scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            <span className="font-serif italic text-gray-900">Top </span>
            <span className="font-serif italic text-[#0099cc]">Updates</span>
          </h2>
          <p className="text-gray-700 font-semibold">
            Guidence & Support For MSMEs
          </p>
        </div>

        {/* MAIN LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">

          {/* Left Section */}
          <div className="col-span-1 md:col-span-7 flex flex-col items-start gap-4 md:gap-6 px-4 md:px-0">
            
            {/* Image */}
            <div className="w-full md:ml-40">
              <Image
                src="/images/TU0.png"
                alt="ParentVerse App"
                width={300}
                height={400}
                className="w-full max-w-xs h-auto"
              />
            </div>

            {/* Content */}
            <div className="w-full md:ml-40 md:mt-5">

              <p className="text-gray-700 text-sm mb-6 leading-relaxed">
                Keep Your Kids Safe, Smart, And Secure Online With{" "}
                <span className="font-italic font-serif">
                  <span className="text-[#f7941d] font-semibold">Parent</span>
                  <span className="text-[#2ba4c3] font-semibold">Verse</span>
                </span><br />
                Real-Time Alerts, Screen Limits, And Location Tracking All In One Powerful App
              </p>

              <button className="inline-flex items-center gap-2 bg-[#2ba4c3] text-white px-6 py-2 rounded-full hover:bg-[#238ba6] transition-colors shadow-lg text-sm md:text-base">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-1 md:col-span-5 space-y-4 md:space-y-5 px-4 md:px-0">
            {newsItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3 md:gap-4">
                <div className="relative w-16 md:w-20 h-12 md:h-14 bg-gray-200 rounded overflow-hidden flex-shrink-0">
                  <Image
                    src={`/images/TU${index + 1}.png`}
                    alt={`News item ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
"use client"

// Data structure for dynamic content - can be fetched from backend
const partnersData = [
  { id: 1, name: "Razorpay", logo: "Razorpay" },
  { id: 2, name: "Google Pay", logo: "Google Pay" },
  { id: 3, name: "TATA", logo: "TATA" },
  { id: 4, name: "CashFree", logo: "CashFree" },
  { id: 5, name: "Kortals", logo: "Kortals" },
]

interface Partner {
  id: number
  name: string
  logo: string
}

interface AboutPartnersSectionProps {
  partners?: Partner[]
}

export function AboutPartnersSection({ partners = partnersData }: AboutPartnersSectionProps) {
  return (
    <section className="py-16 px-4 bg-[#E9D8BE]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-gray-600 text-sm mb-2 underline">Trusted Partners</p>
          <h2 className="text-3xl md:text-4xl mb-4">
            <span className="font-serif italic text-gray-900">Our </span>
            <span className="font-serif italic text-[#f7941d]">Strategic </span>
            <span className="font-serif italic text-[#0099cc]">Partners</span>
          </h2>
          <p className="text-gray-600 text-sm max-w-3xl mx-auto leading-relaxed">
            We Partner With Industry Leaders To Deliver Top-Notch Solutions And Funding Services. As Trusted Startup Consultants, We Help Build Scalable Business Models, Attract Investors And Guide You Through Every Stage Of The Funding Process.
          </p>
        </div>
        
        {/* Partners Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center px-4 py-2"
            >
              {/* Text-based logo display - can be replaced with actual logos */}
              <span className="text-gray-700 font-semibold text-lg md:text-xl hover:text-[#f7941d] transition-colors">
                {partner.logo === "Razorpay" && (
                  <span className="font-bold text-[#2D3494]">Razorpay</span>
                )}
                {partner.logo === "Google Pay" && (
                  <span className="font-bold">
                    <span className="text-[#4285F4]">G</span>
                    <span className="text-[#EA4335]">o</span>
                    <span className="text-[#FBBC05]">o</span>
                    <span className="text-[#4285F4]">g</span>
                    <span className="text-[#34A853]">l</span>
                    <span className="text-[#EA4335]">e</span>
                    {" Pay"}
                  </span>
                )}
                {partner.logo === "TATA" && (
                  <span className="font-bold text-[#1C508F]">TATA</span>
                )}
                {partner.logo === "CashFree" && (
                  <span className="font-bold text-[#6933FF]">CashFree</span>
                )}
                {partner.logo === "Kortals" && (
                  <span className="font-bold text-[#FF6B00]">Kortals</span>
                )}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

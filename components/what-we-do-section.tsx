import { ArrowRight } from "lucide-react"
import { ServiceCard } from "./service-card"

const services = [
  {
    title: "Training Entrepreneurship Development",
    description: "Our Program Equips Aspiring Entrepreneurs With Essential Skills In Business Planning, Marketing, And Financial Management To Help Turn Ideas Into Successful Ventures.",
  },
  {
    title: "Funding Support",
    description: "We Offer Financial Assistance To Help Launch And Grow Your Initiatives, Ensuring The Resources Needed For Sustainable Success.",
  },
  {
    title: "All Schemes",
    description: "Explore Our Complete Range Of Schemes Designed To Support Diverse Needs, Offering Benefits, Resources, And Opportunities For Growth And Development",
  },
  {
    title: "Technological Support",
    description: "We Provide Advanced Tools, Guidance, And Technical Assistance To Help You Adopt Modern Solutions And Improve Efficiency, Innovation, And Growth.",
  },
  {
    title: "Market Support",
    description: "We Assist In Promoting Your Products And Services, Helping You Reach Wider Audiences, Build Strong Networks, And Grow Your Market Presence.",
  },
  {
    title: "Latest Updates About MSMEs",
    description: "Get The Latest News, Policy Changes, Schemes, And Opportunities Related To MSMEs To Stay Informed And Ahead.",
  },
]

export function WhatWeDoSection() {
  return (
    <section id="services" className="py-16 px-4 bg-[#E9D8BE] scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            <span className="font-serif italic text-gray-900">What </span>
            <span className="font-serif italic text-[#f7941d]">We </span>
            <span className="font-serif italic text-[#0099cc]">Do</span>
          </h2>
          <p className="text-gray-700 font-semibold">Guidence & Support For MSMEs</p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
      
    </section>
  )
}

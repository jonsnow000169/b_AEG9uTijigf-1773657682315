"use client"

import { ServiceCard } from "@/components/service-card"

// Data structure for dynamic content - can be fetched from backend
const services = [
  {
    id: 1,
    title: "Training Entrepreneurship Development",
    description: "A groundbreaking initiative offering grants up to ₹15 Lakhs and comprehensive support for women-led startups across India",
  },
  {
    id: 2,
    title: "Training Entrepreneurship Development",
    description: "A groundbreaking initiative offering grants up to ₹15 Lakhs and comprehensive support for women-led startups across India",
  },
  {
    id: 3,
    title: "Training Entrepreneurship Development",
    description: "A groundbreaking initiative offering grants up to ₹15 Lakhs and comprehensive support for women-led startups across India",
  },
]

interface Service {
  id: number
  title: string
  description: string
}

interface AboutServicesSectionProps {
  servicesData?: Service[]
}

export function AboutServicesSection({ servicesData = services }: AboutServicesSectionProps) {
  return (
    <section className="py-16 px-4 bg-[#FFFDEF]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:gap-10">
          {servicesData.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

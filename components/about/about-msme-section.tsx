"use client"

import { CheckCircle, Calendar, MapPin, Building, FileText, Award, HeartHandshake, Clock } from "lucide-react"

// Data structure for dynamic content - can be fetched from backend
const companyInfo = {
  description: "ENEGO Services Private Limited is a comprehensive business advisory platform, empowering startups and MSMEs across India with funding facilitation, incorporation services, and growth consulting since 2022.",
  founded: "August 2020",
  location: "Ahmedabad, Gujarat",
  structure: "Private Limited",
  cin: "U70200GJ2022PTC130442",
}

const purposeContent = {
  title: "Our Purpose",
  subtitle: "Making Business Growth Accessible",
  description: "At ENEGO, we bridge the gap between ambitious entrepreneurs and the complex world of business funding. Our mission is clear: to empower 1 lakh+ startups by providing comprehensive advisory services that transform business ideas into successful enterprises.",
}

const differentiators = [
  {
    id: 1,
    icon: "HeartHandshake",
    title: "Advisory, Not Lending",
    description: "We Guide And Position Your Startup/MSME To Access The Armed Funding",
  },
  {
    id: 2,
    icon: "Award",
    title: "DPIIT Recognized",
    description: "Official Startup Consultant With Government Recognition",
  },
  {
    id: 3,
    icon: "HeartHandshake",
    title: "End-To-End Support",
    description: "From Ideation To Execution, Complete Business Launch Assistance",
  },
  {
    id: 4,
    icon: "Clock",
    title: "Fast Turnaround",
    description: "Streamlined Processes For Quick Approvals And Documentation",
  },
]

const IconMap: Record<string, typeof CheckCircle> = {
  HeartHandshake,
  Award,
  Clock,
  CheckCircle,
}

interface CompanyInfoData {
  description: string
  founded: string
  location: string
  structure: string
  cin: string
}

interface Differentiator {
  id: number
  icon: string
  title: string
  description: string
}

interface AboutMSMESectionProps {
  companyData?: CompanyInfoData
  differentiatorData?: Differentiator[]
}

export function AboutMSMESection({ 
  companyData = companyInfo, 
  differentiatorData = differentiators 
}: AboutMSMESectionProps) {
  return (
    <section className="py-16 px-4 bg-[#E9D8BE]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-gray-600 text-sm mb-2 underline">small voice, unflinished</p>
          <h2 className="text-3xl md:text-4xl">
            <span className="font-serif italic text-gray-900">{"India's Trusted "}</span>
            <span className="font-serif italic text-[#f7941d]">MSME </span>
            <span className="font-serif italic text-[#0099cc]">Advisory</span>
          </h2>
        </div>
        
        {/* Description */}
        <p className="text-center text-gray-700 max-w-4xl mx-auto mb-12 leading-relaxed">
          {companyData.description}
        </p>
        
        {/* Paper Card with Company Info */}
        <div className="relative max-w-5xl mx-auto">
          {/* Paper background with torn edges effect */}
          <div className="bg-[#FFFDF4] rounded-lg shadow-xl p-6 md:p-10 relative overflow-hidden">
            {/* Decorative tape on top left */}
            <div className="absolute -top-3 -left-3 w-20 h-8 bg-[#f7941d] rotate-[-45deg] opacity-80" />
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Left Column - Our Purpose */}
              <div>
                <h3 className="font-serif italic text-xl md:text-2xl text-gray-900 mb-2">
                  {purposeContent.title}
                </h3>
                <p className="text-[#f7941d] font-medium text-sm mb-4">
                  {purposeContent.subtitle}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {purposeContent.description}
                </p>
                
                {/* Company Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-[#0099cc]" />
                    <div>
                      <p className="text-xs text-gray-500">Founded</p>
                      <p className="text-sm font-medium text-gray-800">{companyData.founded}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-[#0099cc]" />
                    <div>
                      <p className="text-xs text-gray-500">Location</p>
                      <p className="text-sm font-medium text-gray-800">{companyData.location}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building className="w-4 h-4 text-[#0099cc]" />
                    <div>
                      <p className="text-xs text-gray-500">Structure</p>
                      <p className="text-sm font-medium text-gray-800">{companyData.structure}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-[#0099cc]" />
                    <div>
                      <p className="text-xs text-gray-500">CIN</p>
                      <p className="text-sm font-medium text-gray-800">{companyData.cin}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - What Makes Us Different */}
              <div>
                <h3 className="font-serif italic text-xl md:text-2xl text-gray-900 mb-6">
                  What Makes Us Different
                </h3>
                
                <div className="space-y-4">
                  {differentiatorData.map((item) => {
                    const Icon = IconMap[item.icon] || CheckCircle
                    return (
                      <div key={item.id} className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#0099cc]/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 text-[#0099cc]" />
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 text-sm">{item.title}</p>
                          <p className="text-gray-600 text-xs leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

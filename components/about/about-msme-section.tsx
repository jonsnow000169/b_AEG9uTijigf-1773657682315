"use client"

import Image from "next/image"

// Data structure for dynamic content - can be fetched from backend
const companyInfo = {
  description: "ENEGO Services Private Limited is a comprehensive business advisory platform, empowering startups and MSMEs across India with funding facilitation, incorporation services, and growth consulting since 2023.",
  founded: "August 2025",
  headquarters: "Ahmedabad Gujarat",
  structure: "Private Limited",
  cin: "U70200UP2023PTC193462",
}

const purposeContent = {
  title: "Our Purpose",
  subtitle: "Making Business Growth Accessible",
  description: "At ENEGO, we bridge the gap between ambitious entrepreneurs and the complex world of business funding. Our mission is clear: to empower 1 lakh+ startups by providing comprehensive advisory services that transform business ideas into successful enterprises.",
}

const differentiators = [
  {
    id: 1,
    color: "#22c55e", // green
    title: "Advisory, Not Lending",
    description: "We Guide And Facilitate; Banks And NBFCs Provide The Actual Funding",
  },
  {
    id: 2,
    color: "#f97316", // orange
    title: "DPIIT Recognized",
    description: "Official Startup Consultant With Government Recognition",
  },
  {
    id: 3,
    color: "#3b82f6", // blue
    title: "End-To-End Support",
    description: "From Ideation To Funding, Complete Business Lifecycle Assistance",
  },
  {
    id: 4,
    color: "#eab308", // yellow
    title: "Fast Turnaround",
    description: "Streamlined Processes For Quick Approvals And Disbursements",
  },
]

interface CompanyInfoData {
  description: string
  founded: string
  headquarters: string
  structure: string
  cin: string
}

interface Differentiator {
  id: number
  color: string
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
    <section className="py-16 px-4 bg-[#E8D5B5]">
      <div className="max-w-6xl mx-auto">
        {/* Header Badge */}
        <div className="flex justify-center mb-4">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#f7941d]"></span>
            <span className="text-sm text-gray-700">आपकी सफलता, हमारी ज़िम्मेदारी</span>
          </div>
        </div>
        
        {/* Main Heading */}
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl">
            <span className="text-gray-900">{"India's Trusted "}</span>
            <span className="text-[#f7941d]">MSME </span>
            <span className="text-[#0099cc]">Advisory</span>
          </h2>
        </div>
        
        {/* Description */}
        <p className="text-center text-gray-600 text-sm md:text-base max-w-4xl mx-auto mb-12 leading-relaxed">
          {companyData.description}
        </p>
        
        {/* Two Column Paper Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {/* Left Card - Our Purpose */}
          <div className="relative">
            {/* Red pushpin */}
            <div className="absolute -top-3 left-8 z-20">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-lg border-2 border-red-300"></div>
            </div>
            
            {/* Paper card with torn edge effect */}
            <div 
              className="bg-[#FFFEF8] rounded-sm shadow-lg p-6 md:p-8 relative min-h-[400px]"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 98% 99%, 95% 100%, 92% 99%, 88% 100%, 85% 99%, 80% 100%, 75% 99%, 70% 100%, 65% 99%, 60% 100%, 55% 99%, 50% 100%, 45% 99%, 40% 100%, 35% 99%, 30% 100%, 25% 99%, 20% 100%, 15% 99%, 10% 100%, 5% 99%, 2% 100%, 0 99%)"
              }}
            >
              {/* Header with lightbulb icon */}
              <div className="flex items-start gap-3 mb-2">
                <div className="w-10 h-10 flex-shrink-0">
                  <Image
                    src="/images/lightbulb-icon.svg"
                    alt="Lightbulb"
                    width={40}
                    height={40}
                    className="w-full h-full"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                  {/* Fallback lightbulb */}
                  <svg className="w-10 h-10 text-[#f7941d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                    {purposeContent.title}
                  </h3>
                  <p className="text-[#f7941d] text-sm">
                    {purposeContent.subtitle}
                  </p>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed mb-8 mt-4">
                {purposeContent.description}
              </p>
              
              {/* Company Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#fff4e6] flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#f7941d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Founded</p>
                    <p className="text-sm font-semibold text-gray-900">{companyData.founded}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#fff4e6] flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#f7941d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Headquarters</p>
                    <p className="text-sm font-semibold text-gray-900">{companyData.headquarters}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#fff4e6] flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#f7941d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 21h18"/>
                      <path d="M9 8h1"/>
                      <path d="M9 12h1"/>
                      <path d="M9 16h1"/>
                      <path d="M14 8h1"/>
                      <path d="M14 12h1"/>
                      <path d="M14 16h1"/>
                      <path d="M5 21V5a2 2 0 012-2h10a2 2 0 012 2v16"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Structure</p>
                    <p className="text-sm font-semibold text-gray-900">{companyData.structure}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#fff4e6] flex items-center justify-center">
                    <svg className="w-4 h-4 text-[#f7941d]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">CIN</p>
                    <p className="text-sm font-semibold text-gray-900">{companyData.cin}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Card - What Makes Us Different */}
          <div className="relative">
            {/* Red pushpin */}
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-red-400 to-red-600 shadow-lg border-2 border-red-300"></div>
            </div>
            
            {/* Paper card with torn edge effect */}
            <div 
              className="bg-[#FFFEF8] rounded-sm shadow-lg p-6 md:p-8 relative min-h-[400px]"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 98% 99%, 95% 100%, 92% 99%, 88% 100%, 85% 99%, 80% 100%, 75% 99%, 70% 100%, 65% 99%, 60% 100%, 55% 99%, 50% 100%, 45% 99%, 40% 100%, 35% 99%, 30% 100%, 25% 99%, 20% 100%, 15% 99%, 10% 100%, 5% 99%, 2% 100%, 0 99%)"
              }}
            >
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-8">
                What Makes Us Different
              </h3>
              
              <div className="space-y-6">
                {differentiatorData.map((item) => (
                  <div key={item.id} className="flex items-start gap-4">
                    <div 
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      {item.id === 1 && (
                        <svg className="w-4 h-4" style={{ color: item.color }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20 6L9 17l-5-5"/>
                        </svg>
                      )}
                      {item.id === 2 && (
                        <svg className="w-4 h-4" style={{ color: item.color }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="8" r="6"/>
                          <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
                        </svg>
                      )}
                      {item.id === 3 && (
                        <svg className="w-4 h-4" style={{ color: item.color }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                        </svg>
                      )}
                      {item.id === 4 && (
                        <svg className="w-4 h-4" style={{ color: item.color }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                        </svg>
                      )}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{item.title}</p>
                      <p className="text-gray-500 text-xs leading-relaxed italic">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

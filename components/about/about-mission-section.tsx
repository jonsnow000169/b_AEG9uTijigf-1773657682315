"use client"

import { useState } from "react"
import { CheckCircle, Target, Lightbulb } from "lucide-react"

// Data structure for dynamic content - can be fetched from backend
const missionData = {
  title: "Our Mission",
  subtitle: "Why We Exist",
  description: "To Empower India's Startups And MSMEs By Simplifying Access To Funding, Business Registration, And Growth Services. We Bridge The Gap Between Ambitious Entrepreneurs And Complex Financial Eco Systems, Enabling Businesses To Focus On Innovation Rather Than Bureaucracy.",
  focusAreas: [
    "Democratize Access To Business Funding Across India",
    "Simplify Government Schemes And Compliance Processes", 
    "Enable 1 Lakh+ Startups To Achieve Sustainable Growth",
  ],
}

const visionData = {
  title: "Our Vision",
  subtitle: "Where We're Headed",
  description: "To become India's most trusted startup ecosystem partner, recognized for transforming how entrepreneurs access funding, guidance, and growth opportunities. We envision a future where every viable business idea has access to the resources needed to thrive.",
  focusAreas: [
    "Be India's go-to platform for startup advisory services",
    "Create a seamless bridge between entrepreneurs and opportunities",
    "Build a community of successful, sustainable businesses",
  ],
}

const statsData = [
  {
    id: 1,
    value: "20,000+",
    label: "MSMEs Assisted",
    subLabel: "Entrepreneurs Empowered",
  },
  {
    id: 2,
    value: "₹500Cr+",
    label: "Funding Facilitated",
    subLabel: "Capital Mobilized",
  },
  {
    id: 3,
    value: "95%",
    label: "Success Rate",
    subLabel: "Application Approval",
  },
]

interface MissionVisionData {
  title: string
  subtitle: string
  description: string
  focusAreas: string[]
}

interface StatData {
  id: number
  value: string
  label: string
  subLabel: string
}

interface AboutMissionSectionProps {
  mission?: MissionVisionData
  vision?: MissionVisionData
  stats?: StatData[]
}

export function AboutMissionSection({
  mission = missionData,
  vision = visionData,
  stats = statsData,
}: AboutMissionSectionProps) {
  const [activeTab, setActiveTab] = useState<"mission" | "vision">("mission")
  const activeContent = activeTab === "mission" ? mission : vision
  const ActiveIcon = activeTab === "mission" ? Target : Lightbulb

  return (
    <section className="py-16 px-4 bg-[#FFFDEF]">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-gray-600 text-sm mb-2 underline">अभी तक अधूर: unfinished</p>
          <h2 className="text-3xl md:text-4xl mb-4">
            <span className="font-serif italic text-gray-900">Mission, Vision & </span>
            <span className="font-serif italic text-[#f7941d]">Core </span>
            <span className="font-serif italic text-[#0099cc]">Values</span>
          </h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            The guiding principles that drive everything we do at ENEGO—from our daily operations to our long-term strategic goals
          </p>
        </div>
        
        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            onClick={() => setActiveTab("mission")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === "mission"
                ? "bg-[#f7941d] text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Mission
          </button>
          <button
            onClick={() => setActiveTab("vision")}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              activeTab === "vision"
                ? "bg-[#f7941d] text-white shadow-md"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
          >
            Vision
          </button>
        </div>
        
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left - Mission/Vision Content */}
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#0099cc]/10 flex items-center justify-center">
                <ActiveIcon className="w-5 h-5 text-[#0099cc]" />
              </div>
              <div>
                <h3 className="font-serif italic text-xl text-gray-900">
                  {activeContent.title}
                </h3>
                <p className="text-[#f7941d] text-sm">{activeContent.subtitle}</p>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {activeContent.description}
            </p>
            
            <div>
              <p className="font-medium text-gray-900 text-sm mb-3">Key Focus Areas:</p>
              <ul className="space-y-2">
                {activeContent.focusAreas.map((area, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-[#0099cc] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Right - Stats Cards */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-white rounded-xl p-5 shadow-lg text-center"
              >
                <p className="text-2xl md:text-3xl font-bold text-[#f7941d] mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-900 font-medium text-sm">{stat.label}</p>
                <p className="text-gray-500 text-xs mt-1">{stat.subLabel}</p>
              </div>
            ))}
            
            {/* Empty card placeholder for grid balance */}
            <div className="hidden lg:block" />
          </div>
        </div>
      </div>
    </section>
  )
}

import Image from "next/image"
import { ArrowRight, Calendar, Building2, Users, Lightbulb, TrendingUp, Handshake } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { TableOfContents } from "@/components/blogs/table-of-contents"

// Disable dynamic params - only pre-generated paths are valid
export const dynamicParams = false

// Generate static params for all blog slugs
export async function generateStaticParams() {
  // These would come from your API/database
  return [
    { slug: "without-security-business-loan-complete-guide" },
    { slug: "without-security-business-loan-complete-guide-2" },
    { slug: "without-security-business-loan-complete-guide-3" },
    { slug: "without-security-business-loan-complete-guide-4" },
    { slug: "without-security-business-loan-complete-guide-5" },
    { slug: "without-security-business-loan-complete-guide-6" },
    { slug: "without-security-business-loan-complete-guide-7" },
    { slug: "without-security-business-loan-complete-guide-8" },
  ]
}

// Types for dynamic data
interface BlogDetailData {
  title: string
  titleHighlight: string
  subtitle: string
  description: string
  heroImage: string
  tableOfContents: { id: string; label: string }[]
  introduction: {
    text: string
    additionalText?: string
  }
  whySection: {
    title: string
    titleHighlight: string
    content: string
    quote: string
  }
  features: {
    title: string
    description: string
    subtitle: string
    icon: string
  }[]
  applicationSteps: {
    step: string
    title: string
    description: string
  }[]
  applicationDeadline: {
    date: string
    description: string
  }
  conclusion: {
    title: string
    titleHighlight: string
    content: string[]
  }
}

// This would come from API/database
const blogData: BlogDetailData = {
  title: "Empowering WomenEntrepreneurs",
  titleHighlight: "Yogdan's Mahila",
  subtitle: "Startup",
  description: "A groundbreaking initiative offering grants up to ₹15 Lakhs and comprehensive support for women-led startups across India",
  heroImage: "/images/blog-team-photo.jpg",
  tableOfContents: [
    { id: "introduction", label: "Introduction" },
    { id: "about", label: "About" },
    { id: "key-features", label: "Key Features" },
    { id: "how-to-apply", label: "How To Apply" },
    { id: "deadline", label: "Deadline" },
    { id: "conclusion", label: "Conclusion" },
  ],
  introduction: {
    text: "In today's fast-paced, competitive world, women entrepreneurs face unique challenges, from limited access to funding to the lack of a strong support network. That's why the Startup Yogdan Mahila Empowerment Scheme was introduced to empower women-led startups and provide the necessary foundation for success.",
    additionalText: "Whether you're a first-time entrepreneur or already in business, this scheme is designed to uplift, support, and enable women to create sustainable, successful businesses across India."
  },
  whySection: {
    title: "Why Business Registration",
    titleHighlight: "Matters",
    content: "The Startup Yogdan Mahila Empowerment Scheme is a comprehensive initiative aimed at promoting women entrepreneurs and fostering innovation. This sector-agnostic program is built to create a robust ecosystem for women in business by offering financial support, mentorship, visibility, and networking opportunities.\n\nThe scheme is designed to give women entrepreneurs the resources they need to scale up and make their mark in India's competitive marketplace, addressing the unique challenges faced by women-led businesses.",
    quote: "The Mahila Empowerment Scheme Is Designed To Be Inclusive Of Various Business Types Across All Sectors, With A Special Focus On Innovative And Scalable Business Models."
  },
  features: [
    {
      title: "Financial Support",
      description: "Grants funding up to ₹15 Lakhs to help with operational costs, product development, marketing, and scaling activities.",
      subtitle: "₹15 Lakhs Grant",
      icon: "financial"
    },
    {
      title: "Incubation & Co-working",
      description: "Access to state-of-the-art incubation facilities and co-working spaces to encourage collaboration and resource-sharing.",
      subtitle: "Free Workspace",
      icon: "incubation"
    },
    {
      title: "Expert Mentorship",
      description: "Guidance from industry leaders with extensive experience to help navigate challenges and accelerate business growth.",
      subtitle: "Industry Leaders",
      icon: "mentorship"
    },
    {
      title: "Investor Opportunities",
      description: "Pitch your ideas to potential investors and secure further funding to scale your operations.",
      subtitle: "Funding Access",
      icon: "investor"
    },
    {
      title: "Branding & Visibility",
      description: "Receive support to effectively market your products or services, using brand-focused strategies to reach a wider audience.",
      subtitle: "Market Reach",
      icon: "branding"
    },
    {
      title: "Innovation Circles",
      description: "Collaborate with other entrepreneurs, exchange ideas, and stay ahead of industry trends.",
      subtitle: "Networking",
      icon: "innovation"
    }
  ],
  applicationSteps: [
    { step: "1", title: "Register Online", description: "Fill Guide And Facilitate, Banks And NBFCs Provide The Actual Funding" },
    { step: "2", title: "Submit Business Plan", description: "DPIIT Funding Consultant With Government Recognition" },
    { step: "3", title: "Provide Documentation", description: "Official Startup Consultant With Government Recognition" },
    { step: "4", title: "Preliminary Screening", description: "From Ideation To Funding, Complete Business Lifecycle Assistance" },
    { step: "5", title: "Final Selection & Grant Disbursement", description: "Streamlined Processes For Quick Approvals And Disbursements" }
  ],
  applicationDeadline: {
    date: "October 10, 2025",
    description: "Don't Miss This Opportunity To Transform Your Business Idea Into Reality"
  },
  conclusion: {
    title: "Introduction/Conclusion:",
    titleHighlight: "Empowering Women Entrepreneurship",
    content: [
      "The Startup Yogdan Mahila Empowerment Scheme is a tremendous opportunity for women entrepreneurs to unlock their potential, scale their businesses, and make a lasting impact in the marketplace.",
      "With financial support of up to ₹15 Lakhs, mentorship from industry leaders, co-working spaces, and access to funding opportunities, this initiative is designed to set you up for success.",
      "If you're a women entrepreneur with a clear vision and a plan to grow, the Mahila Empowerment Scheme is the perfect platform for you. Don't miss this chance to take your business to new heights."
    ]
  }
}

// Icon component mapping
function FeatureIcon({ type, className }: { type: string; className?: string }) {
  switch (type) {
    case "financial":
      return <Building2 className={className} />
    case "incubation":
      return <Users className={className} />
    case "mentorship":
      return <Lightbulb className={className} />
    case "investor":
      return <TrendingUp className={className} />
    case "branding":
      return <Handshake className={className} />
    case "innovation":
      return <Users className={className} />
    default:
      return <Building2 className={className} />
  }
}

export default function BlogDetailPage() {
  const data = blogData

  return (
    <main className="min-h-screen bg-[#FFFDF4]">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-[#FFFDF4] pt-8 pb-0">
        <div className="max-w-5xl mx-auto px-4 text-center">
          {/* Hindi Badge */}
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6 shadow-sm">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            <span className="text-sm text-gray-600 font-medium">आपकी सफलता, हमारी ज़िम्मेदारी</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-serif text-gray-900 mb-2">
            {data.title}
          </h1>
          <h2 className="text-2xl md:text-3xl font-serif mb-4">
            <span className="text-gray-900">{data.subtitle} </span>
            <span className="text-orange-500">{data.titleHighlight}</span>
            <span className="text-[#2ba4c3]"> Empowerment Scheme</span>
          </h2>

          {/* Description */}
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            {data.description}
          </p>
        </div>

        {/* Hero Image with Logo */}
        <div className="relative max-w-5xl mx-auto px-4">
          {/* Vyapaar Logo - Top Left */}
          <div className="absolute top-4 left-8 z-10">
            <Image
              src="/images/vyapaar-logo-circle.png"
              alt="Vyapaar Vani"
              width={80}
              height={80}
              className="rounded-full"
              style={{ width: '80px', height: '80px' }}
            />
          </div>

          {/* Main Image */}
          <div className="relative w-full h-[300px] md:h-[450px] rounded-t-3xl overflow-hidden">
            <Image
              src={data.heroImage}
              alt="Team Photo"
              fill
              className="object-cover object-top"
            />
          </div>
        </div>

        {/* Orange Torn Edge */}
        <div className="w-full bg-[#F5A623] h-8 relative">
          <svg viewBox="0 0 1200 30" preserveAspectRatio="none" className="absolute bottom-0 w-full h-8">
            <path
              d="M0,0 L1200,0 L1200,15 Q1150,25 1100,18 Q1050,10 1000,20 Q950,30 900,15 Q850,5 800,18 Q750,28 700,12 Q650,0 600,15 Q550,28 500,10 Q450,0 400,18 Q350,30 300,15 Q250,5 200,20 Q150,30 100,12 Q50,0 0,15 Z"
              fill="#F5A623"
            />
          </svg>
        </div>
      </section>

      {/* Content Section with Sidebar */}
      <section className="bg-[#FFFDF4] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* Sidebar - Table of Contents */}
            <aside className="lg:w-80 flex-shrink-0">
              <div className="sticky top-24">
                {/* TOC Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
                  {/* Elephant Icon */}
                  <div className="flex justify-center -mt-12 mb-4">
                    <Image
                      src="/images/elephant-icon.png"
                      alt="Elephant Icon"
                      width={100}
                      height={70}
                      className="object-contain"
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-center">
                    Table of <span className="text-orange-500">Contents</span>
                  </h3>
                  
                  <TableOfContents items={data.tableOfContents} />
                </div>

                {/* Book Image Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 mb-4 border border-gray-100">
                  <div className="flex justify-center">
                    <Image
                      src="/images/funding-guide-book.png"
                      alt="Funding Guide Book"
                      width={150}
                      height={180}
                      className="object-contain"
                      style={{ width: '150px', height: 'auto' }}
                    />
                  </div>
                </div>

                {/* Help Card */}
                <div className="bg-white rounded-2xl shadow-lg p-6 border border-orange-100">
                  <h4 className="text-lg font-semibold text-gray-900 text-center mb-3">
                    Need Help with Unsecured Business Loans?
                  </h4>
                  
                  <p className="text-sm text-gray-500 text-center mb-5">
                    Our experts can guide you through the application process and help maximize your chances of approval.
                  </p>
                  
                  <button className="w-full bg-gradient-to-r from-[#2BA4C3] to-[#1E90B0] hover:from-[#238ba6] hover:to-[#1a7a96] text-white py-3.5 px-4 rounded-full text-base font-medium flex items-center justify-center gap-2 transition-all shadow-lg">
                    Get Expert Help
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1 min-w-0">
              {/* Introduction */}
              <div id="introduction" className="mb-10">
                <h3 className="text-2xl font-serif font-semibold mb-4">Introduction</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {data.introduction.text}
                </p>
                {data.introduction.additionalText && (
                  <p className="text-gray-700 leading-relaxed">
                    {data.introduction.additionalText}
                  </p>
                )}
              </div>

              {/* About Section */}
              <div id="about" className="mb-10">
                <h3 className="text-2xl font-serif font-semibold mb-4">
                  Why <span className="text-[#2ba4c3]">Business Registration</span> Matters
                </h3>
                <div className="text-gray-700 leading-relaxed whitespace-pre-line mb-6">
                  {data.whySection.content}
                </div>
                
                {/* Quote Box */}
                <div className="bg-white border-l-4 border-orange-500 rounded-r-xl p-4 shadow-sm">
                  <p className="text-gray-700 italic text-sm">
                    {data.whySection.quote}
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div id="key-features" className="mb-10">
                <h3 className="text-2xl font-serif font-semibold mb-2">
                  Key Features of the <span className="text-orange-500">Mahila Empowerment Scheme</span>
                </h3>
                <p className="text-gray-600 mb-6">
                  Discover the comprehensive benefits designed to support your entrepreneurial journey:
                </p>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-4">
                  {data.features.map((feature, index) => (
                    <div key={index} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                      <div className="flex items-start gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                          <FeatureIcon type={feature.icon} className="w-5 h-5 text-orange-500" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                          <p className="text-xs text-gray-500 mt-1">{feature.description}</p>
                          <p className="text-xs font-medium text-[#2ba4c3] mt-2">{feature.subtitle}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* How to Apply */}
              <div id="how-to-apply" className="mb-10">
                <h3 className="text-2xl font-serif font-semibold mb-2">
                  How to Apply for the <span className="text-orange-500">Mahila Empowerment</span> Scheme
                </h3>
                <p className="text-gray-600 mb-6 text-sm">
                  ENEGO Services Private Limited is a comprehensive business advisory platform, empowering startups and MSMEs across India with funding facilitation, incorporation services, and growth consulting since 2023.
                </p>

                {/* Application Steps Card */}
                <div className="bg-white rounded-2xl p-6 shadow-lg relative">
                  {/* Red pushpin */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="w-8 h-8 bg-red-500 rounded-full shadow-lg relative">
                      <div className="absolute top-1 left-2 w-2 h-2 bg-red-300 rounded-full"></div>
                    </div>
                  </div>

                  <div className="space-y-4 mt-4">
                    {data.applicationSteps.map((step, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-orange-500 font-semibold text-sm">{step.step}</span>
                        </div>
                        <div className="flex-1 border-b border-gray-100 pb-3">
                          <h4 className="font-semibold text-gray-900 text-sm">{step.title}</h4>
                          <p className="text-xs text-gray-500">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Deadline */}
                  <div id="deadline" className="mt-6 pt-4 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-orange-500" />
                      <div>
                        <p className="font-semibold text-gray-900">{data.applicationDeadline.date}</p>
                        <p className="text-xs text-gray-500">{data.applicationDeadline.description}</p>
                      </div>
                    </div>
                    <button className="bg-[#2ba4c3] hover:bg-[#238ba6] text-white py-3 px-6 rounded-full text-sm font-medium flex items-center gap-2 transition-colors">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Conclusion */}
              <div id="conclusion" className="mb-10">
                <h3 className="text-2xl font-serif font-semibold mb-4">
                  {data.conclusion.title}
                  <br />
                  <span className="text-orange-500">{data.conclusion.titleHighlight}</span>
                </h3>
                {data.conclusion.content.map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}

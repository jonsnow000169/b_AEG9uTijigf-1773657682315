import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function WhatIsSection() {
  return (
    <section id="about" className="py-16 px-4 bg-[#FFFDEF] scroll-mt-24">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl mb-8">
          <span className="font-serif italic text-gray-900">What is </span>
          <span className="font-serif italic text-[#f7941d]">Vyapaar</span>
          <span className="font-serif italic text-[#0099cc]">वाणी</span>
        </h2>
        
        <p className="text-gray-700 mb-6 leading-relaxed">
          Vyapaar Vani Is A Dedicated Digital Platform Created To Be The Voice Of Indian Traders, MSMEs, Startups, And Entrepreneurs. Our Goal Is To Provide Accurate Business Information, Government Scheme Updates, Startup Ideas, And Growth Strategies In A Simple And Easy-To-Understand Way.
        </p>
        
        <p className="text-gray-600 mb-8 leading-relaxed">
          We Believe That The Right Information Is The Foundation Of Successful Business, Which Is Why Every Piece Of Content We Share Is Well-Researched, Practical, And Trustworthy. On Vyapaar Vani, You'll Find Business News, Expert Insights, Podcasts, Interviews, And Inspiring Success Stories — All In One Place
        </p>
        
        <Link 
          href="/about-us"
          className="inline-flex items-center gap-2 bg-[#2ba4c3] text-white px-8 py-3 rounded-full hover:bg-[#238ba6] transition-colors shadow-lg mb-10"
        >
          Learn More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Torn paper edge transition */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-20 -mb-29">
        <Image
          src="/images/torn-edge.png"
          alt="Section divider"
          fill
          className="object-cover object-top scale-y-[-1]"
          priority
        />
      </div>
    </section>
  )
}

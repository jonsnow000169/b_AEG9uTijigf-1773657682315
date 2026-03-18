"use client"

import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    name: "Alex Doe",
    text: "\"ENEGO Helped Us Secure ₹45 Lakhs Through Startup India Seed Fund. Their Expertise In",
    rating: 4,
    rotation: "-rotate-3",
  },
  {
    name: "Alex Doe",
    text: "\"ENEGO Helped Us Secure ₹45 Lakhs Through Startup India Seed Fund. Their Expertise In",
    rating: 5,
    rotation: "rotate-2",
  },
  {
    name: "Alex Doe",
    text: "\"ENEGO Helped Us Secure ₹45 Lakhs Through Startup India Seed Fund. Their Expertise In",
    rating: 5,
    rotation: "-rotate-1",
  },
  {
    name: "Alex Doe",
    text: "\"ENEGO Helped Us Secure ₹45 Lakhs Through Startup India Seed Fund. Their Expertise In",
    rating: 5,
    rotation: "rotate-3",
  },
  {
    name: "Alex Doe",
    text: "\"ENEGO Helped Us Secure ₹45 Lakhs Through Startup India Seed Fund. Their Expertise In",
    rating: 5,
    rotation: "-rotate-2",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-39 px-4 bg-[#E9D8BE] overflow-hidden scroll-mt-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl mb-4">
            <span className="font-serif italic text-gray-900">What </span>
            <span className="font-serif italic text-[#f7941d]">Clients </span>
            <span className="font-serif italic text-[#0099cc]">Say</span>
          </h2>
          <p className="text-gray-700 font-semibold">Guidence & Support For MSMEs</p>
        </div>
        
        {/* Clothesline */}
        <div className="relative">
          {/* The line - natural sag from hanging cards */}
          <svg className="absolute top-0 left-0 right-0 w-full" height="60" style={{ top: '0px' }} viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path
              d="M 0 10 Q 150 35, 300 15 Q 450 35, 600 10 Q 750 35, 900 15 Q 1050 35, 1200 10"
              stroke="#1a1a1a"
              strokeWidth="2.5"
              fill="none"
              strokeLinecap="round"
            />
          </svg>
          
          {/* Testimonial cards */}
          <div className="flex justify-center gap-8 flex-wrap pt-18">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`relative bg-white p-5 shadow-lg w-48 ${testimonial.rotation}`}
              >
                {/* Thread/rope connecting to clothesline */}
                <div 
                  className={`absolute left-1/2 -translate-x-1/2 w-0.5 bg-gray-700 ${
                    index === 2 ? '-top-16 h-16' : '-top-12 h-12'
                  }`} 
                />
                
                {/* Clip/Pin */}
                <div className="absolute left-1/2 -translate-x-1/2 w-5 h-10 bg-[#f7941d] rounded-b-lg shadow-md" style={{
                  top: index === 2 ? '-25px' : '-24px'
                }} />
                
                {/* Stars */}
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                
                {/* Text */}
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  {testimonial.text}
                </p>
                
                {/* Name */}
                <p className="font-serif italic text-sm text-gray-900">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

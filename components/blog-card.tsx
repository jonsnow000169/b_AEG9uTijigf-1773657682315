'use client'

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export interface BlogCardProps {
  id: string
  image: string
  category: string
  title: string
  description: string
  slug: string
}

export function BlogCard({ id, image, category, title, description, slug }: BlogCardProps) {
  return (
    <div className="relative w-full max-w-[320px] mx-auto">
      {/* Red Push Pin */}
      <svg
        className="absolute z-20"
        style={{ top: "-28px", left: "50%", transform: "translateX(-50%)", width: "44px", height: "52px" }}
        viewBox="0 0 52 60"
      >
        <defs>
          <radialGradient id={`pinHead-${id}`} cx="35%" cy="30%" r="55%">
            <stop offset="0%" stopColor="#FF7080" />
            <stop offset="100%" stopColor="#B81C28" />
          </radialGradient>
        </defs>
        <circle cx="28" cy="22" r="20" fill={`url(#pinHead-${id})`} />
        <ellipse cx="22" cy="15" rx="7" ry="5" fill="white" opacity="0.25" />
        <path d="M26 40 L29 58" stroke="#8B1520" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="28" cy="40" rx="8" ry="3" fill="rgba(0,0,0,0.15)" />
      </svg>

      {/* Card */}
      <div className="bg-[#FFFDF4] rounded-t-xl shadow-lg relative flex flex-col overflow-hidden">
        {/* Image */}
        <div className="relative w-full h-44 overflow-hidden m-3 mb-0 rounded-2xl" style={{ width: 'calc(100% - 24px)' }}>
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        {/* Content */}
        <div className="px-5 pt-4 pb-5 flex flex-col flex-grow">
          {/* Category Tag */}
          <div className="flex items-center gap-1 mb-2">
            <span className="text-orange-500 text-xs font-medium">+</span>
            <span className="text-orange-500 text-xs font-medium">{category}</span>
          </div>

          {/* Title */}
          <h3 className="font-serif text-lg font-semibold text-[#2a2a2a] leading-tight mb-2">
            {title}
          </h3>

          {/* Description */}
          <p className="text-xs text-[#6B6A65] leading-relaxed mb-4 line-clamp-3">
            {description}
          </p>

          {/* Learn More Button */}
          <Link
            href={`/blogs/${slug}`}
            className="inline-flex items-center justify-center gap-2 bg-[#3BBFDD] text-white border-2 border-[#3BBFDD] rounded-full px-6 py-2.5 text-sm font-semibold cursor-pointer tracking-wide hover:bg-[#29aece] transition-all hover:translate-y-[-1px] w-full"
          >
            Learn More <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Torn paper bottom edge */}
      <svg
        className="block w-full"
        viewBox="0 0 320 32"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        style={{ marginTop: '-1px', lineHeight: 0 }}
      >
        <path
          d="M0,0 L320,0 L320,8
          L316,14 L312,6  L308,15 L303,7  L299,16 L294,8
          L290,18 L285,10 L280,20 L275,8  L270,17 L265,6
          L260,16 L255,22 L250,12 L245,19 L240,9
          L235,20 L229,26 L224,14 L219,22 L213,10
          L208,21 L202,27 L197,15 L191,23 L186,11
          L180,22 L175,28 L169,16 L164,24 L158,12
          L153,22 L147,28 L142,17 L136,25 L131,13
          L125,24 L120,30 L114,18 L109,26 L103,14
          L98,25  L92,31  L87,20  L81,27  L76,15
          L70,26  L65,32  L59,21  L54,28  L48,16
          L43,27  L37,32  L32,22  L26,29  L21,17
          L15,28  L10,32  L5,23   L0,16
          Z"
          fill="#FFFDF4"
        />
      </svg>
    </div>
  )
}

"use client"

import { useState } from "react"

interface TableOfContentsProps {
  items: { id: string; label: string }[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState(items[1]?.id || items[0]?.id) // Default to second item (About) as shown in design

  const scrollToSection = (id: string) => {
    setActiveId(id)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="space-y-1">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className={`block w-full text-left text-sm py-3 px-3 rounded-lg transition-colors ${
            activeId === item.id 
              ? "bg-[#FFF8E7] text-orange-500 font-medium" 
              : "text-gray-700 hover:text-orange-500"
          }`}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}

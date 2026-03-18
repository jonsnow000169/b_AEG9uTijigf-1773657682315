"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const leftNav = [
  { label: "About Us", href: "#about" },
  { label: "Events", href: "#updates" },
]

const rightNav = [
  { label: "incubation", href: "#services" },
  { label: "Blogs", href: "#contact" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-center gap-10">
        <div className="hidden md:flex items-center gap-6">
          {leftNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link href="#home" className="flex items-center justify-center">
          <Image
            src="/images/logo.gif"
            alt="Vyapaar Vani Logo"
            width={64}
            height={64}
            className="h-14 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          {rightNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            {[...leftNav, ...rightNav].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

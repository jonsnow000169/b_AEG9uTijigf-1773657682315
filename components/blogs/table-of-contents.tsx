"use client"

interface TableOfContentsProps {
  items: { id: string; label: string }[]
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className="space-y-2">
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollToSection(item.id)}
          className="block w-full text-left text-sm text-gray-600 hover:text-[#2ba4c3] py-1 border-b border-gray-100 last:border-0 transition-colors"
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}

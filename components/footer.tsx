import Image from "next/image"
import Link from "next/link"
import { Instagram, Linkedin, Youtube, Facebook, Phone, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "#" },
  { name: "About Us", href: "#" },
  { name: "Success Stories", href: "#" },
  { name: "Incubation center", href: "#" },
  { name: "Business Suchna", href: "#" },
  { name: "Contact Us", href: "#" },
]

const getInTouch = [
  { name: "Terms And Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
  { name: "Refund Policy", href: "#" },
]

export function Footer() {
  return (
    <footer className="relative">
      {/* Orange section with sunburst effect */}
      <div 
        className="bg-[#f7941d] py-12 px-4"
        style={{
          backgroundImage: `
            repeating-conic-gradient(
              from 0deg at 50% 100%,
              #f7941d 0deg 5deg,
              #f9a73e 5deg 10deg
            )
          `,
          backgroundPosition: 'center bottom',
          backgroundSize: '200% 200%',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo & Description */}
            <div>
              <Image
                src="/images/logo.gif"
                alt="Vyapaar Vani Logo"
                width={120}
                height={120}
                className="mb-4"
              />
              <p className="text-gray-800 text-sm leading-relaxed mb-4">
                Empowering entrepreneurs with seamless access to funding, expert guidance, and innovative business solutions.
              </p>
              <div className="flex gap-3">
                <Link href="#" className="text-gray-800 hover:text-gray-900">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-800 hover:text-gray-900">
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-800 hover:text-gray-900">
                  <Youtube className="w-6 h-6" />
                </Link>
                <Link href="#" className="text-gray-800 hover:text-gray-900">
                  <Facebook className="w-6 h-6" />
                </Link>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-800 hover:text-gray-900 text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Get in Touch */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Get in Touch</h3>
              <ul className="space-y-2">
                {getInTouch.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-800 hover:text-gray-900 text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Contact Us */}
            <div>
              <h3 className="font-bold text-gray-900 mb-4">Contact Us</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-800 text-sm">
                  <Phone className="w-4 h-4" />
                  <span>1800 296 1424</span>
                </div>
                <div className="flex items-center gap-2 text-gray-800 text-sm">
                  <Mail className="w-4 h-4" />
                  <span>support@enego.co.in</span>
                </div>
                <div className="flex items-start gap-2 text-gray-800 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>
                    808, 8th Floor, Iconic Corenthum,<br />
                    Tower C, Sector 62, Noida,<br />
                    Uttar Pradesh 201301
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright bar */}
      <div className="bg-[#f5f0e6] py-4 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <span>Powered By:</span>
            <Image
              src="/images/logo-obg.png"
              alt="Powered by Vyapaar Vani"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>
          <div>
            © 2026 Enego Services Pvt. Ltd. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

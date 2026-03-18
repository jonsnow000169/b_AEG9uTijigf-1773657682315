import { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ContactSection } from "@/components/contact-section"
import { BlogsHeroSection } from "@/components/blogs/blogs-hero-section"
import { BlogsGridSection } from "@/components/blogs/blogs-grid-section"

export const metadata: Metadata = {
  title: "Blogs - Vyapaar Vani | Business Insights & Success Stories",
  description: "Explore business insights, startup success stories, funding guides, and entrepreneurship tips from Vyapaar Vani.",
}

// This would typically come from an API/database
const blogsData = [
  {
    id: "1",
    image: "/images/blog-convanto.jpg",
    category: "Finance",
    title: "Without Security Business Loan: A Complete Guide",
    description: "Understanding collateral-free loans and how businesses can leverage them for growth without putting assets at... risk.",
    slug: "without-security-business-loan-complete-guide"
  },
  {
    id: "2",
    image: "/images/blog-minipix.jpg",
    category: "Finance",
    title: "Without Security Business Loan: A Complete Guide",
    description: "Understanding collateral-free loans and how businesses can leverage them for growth without putting assets at... risk.",
    slug: "without-security-business-loan-complete-guide-2"
  },
  {
    id: "3",
    image: "/images/blog-mirana-toys.jpg",
    category: "Finance",
    title: "Without Security Business Loan: A Complete Guide",
    description: "Understanding collateral-free loans and how businesses can leverage them for growth without putting assets at... risk.",
    slug: "without-security-business-loan-complete-guide-3"
  },
  {
    id: "4",
    image: "/images/blog-project-studio.jpg",
    category: "Finance",
    title: "Without Security Business Loan: A Complete Guide",
    description: "Understanding collateral-free loans and how businesses can leverage them for growth without putting assets at... risk.",
    slug: "without-security-business-loan-complete-guide-4"
  },
  {
    id: "5",
    image: "/images/blog-one800.jpg",
    category: "Finance",
    title: "Without Security Business Loan: A Complete Guide",
    description: "Understanding collateral-free loans and how businesses can leverage them for growth without putting assets at... risk.",
    slug: "without-security-business-loan-complete-guide-5"
  },
  {
    id: "6",
    image: "/images/blog-pronto.jpg",
    category: "Finance",
    title: "Without Security Business Loan: A Complete Guide",
    description: "Understanding collateral-free loans and how businesses can leverage them for growth without putting assets at... risk.",
    slug: "without-security-business-loan-complete-guide-6"
  },
  {
    id: "7",
    image: "/images/blog-convanto.jpg",
    category: "Finance",
    title: "Without Security Business Loan: A Complete Guide",
    description: "Understanding collateral-free loans and how businesses can leverage them for growth without putting assets at... risk.",
    slug: "without-security-business-loan-complete-guide-7"
  },
  {
    id: "8",
    image: "/images/blog-minipix.jpg",
    category: "Finance",
    title: "Without Security Business Loan: A Complete Guide",
    description: "Understanding collateral-free loans and how businesses can leverage them for growth without putting assets at... risk.",
    slug: "without-security-business-loan-complete-guide-8"
  },
]

export default function BlogsPage() {
  return (
    <main className="min-h-screen bg-[#f5f0e6]">
      <Header />
      
      <BlogsHeroSection />
      
      <BlogsGridSection blogs={blogsData} />
      
      {/* Torn paper edge transition */}
      <div className="relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] h-22 -mb-12 -mt-7">
        <Image
          src="/images/torn-edge.png"
          alt="Section divider"
          fill
          className="object-cover object-top scale-y-[-1]"
          priority
        />
      </div>
      
      <ContactSection />
      
      <Footer />
    </main>
  )
}

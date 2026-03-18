'use client'

import { BlogCard, BlogCardProps } from "@/components/blog-card"

// Default placeholder data - will be replaced with data from backend
const defaultBlogs: BlogCardProps[] = [
  {
    id: "1",
    image: "/images/blog-placeholder-1.jpg",
    category: "Finance",
    title: "Without Security Business Loan: A Complete Guide",
    description: "Understanding collateral-free loans and how businesses can leverage them for growth without putting assets at... risk.",
    slug: "without-security-business-loan-complete-guide"
  },
  {
    id: "2",
    image: "/images/blog-placeholder-2.jpg",
    category: "Finance",
    title: "Without Security Business Loan: A Complete Guide",
    description: "Understanding collateral-free loans and how businesses can leverage them for growth without putting assets at... risk.",
    slug: "without-security-business-loan-complete-guide-2"
  },
  {
    id: "3",
    image: "/images/blog-placeholder-3.jpg",
    category: "Finance",
    title: "Without Security Business Loan: A Complete Guide",
    description: "Understanding collateral-free loans and how businesses can leverage them for growth without putting assets at... risk.",
    slug: "without-security-business-loan-complete-guide-3"
  },
  {
    id: "4",
    image: "/images/blog-placeholder-4.jpg",
    category: "Finance",
    title: "Without Security Business Loan: A Complete Guide",
    description: "Understanding collateral-free loans and how businesses can leverage them for growth without putting assets at... risk.",
    slug: "without-security-business-loan-complete-guide-4"
  },
  {
    id: "5",
    image: "/images/blog-placeholder-5.jpg",
    category: "Finance",
    title: "Without Security Business Loan: A Complete Guide",
    description: "Understanding collateral-free loans and how businesses can leverage them for growth without putting assets at... risk.",
    slug: "without-security-business-loan-complete-guide-5"
  },
  {
    id: "6",
    image: "/images/blog-placeholder-6.jpg",
    category: "Finance",
    title: "Without Security Business Loan: A Complete Guide",
    description: "Understanding collateral-free loans and how businesses can leverage them for growth without putting assets at... risk.",
    slug: "without-security-business-loan-complete-guide-6"
  },
  {
    id: "7",
    image: "/images/blog-placeholder-7.jpg",
    category: "Finance",
    title: "Without Security Business Loan: A Complete Guide",
    description: "Understanding collateral-free loans and how businesses can leverage them for growth without putting assets at... risk.",
    slug: "without-security-business-loan-complete-guide-7"
  },
  {
    id: "8",
    image: "/images/blog-placeholder-8.jpg",
    category: "Finance",
    title: "Without Security Business Loan: A Complete Guide",
    description: "Understanding collateral-free loans and how businesses can leverage them for growth without putting assets at... risk.",
    slug: "without-security-business-loan-complete-guide-8"
  },
]

interface BlogsGridSectionProps {
  blogs?: BlogCardProps[]
}

export function BlogsGridSection({ blogs = defaultBlogs }: BlogsGridSectionProps) {
  return (
    <section className="bg-[#FFFDEF] py-12 md:py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 pt-8">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              {...blog}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function ContactSection() {
  return (
    <>
      {/* Custom styles for things Tailwind can’t handle */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&display=swap');

        .font-dm-serif { font-family: 'DM Serif Display', serif; }
        .font-dm-sans  { font-family: 'DM Sans', sans-serif; }

        .form-card-rotated {
          transform: rotate(2.5deg);
          transform-origin: top center;
        }

        .btn-submit-3d {
          box-shadow: 0 8px 0px #1a7aaa, 0 12px 20px rgba(40,157,210,0.35);
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .btn-submit-3d:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 0px #1a7aaa, 0 14px 24px rgba(40,157,210,0.4);
        }
        .btn-submit-3d:active {
          transform: translateY(2px);
          box-shadow: 0 4px 0px #1a7aaa, 0 6px 12px rgba(40,157,210,0.3);
        }

        .select-custom {
          appearance: none;
          -webkit-appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23999' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 12px center;
          background-color: #F5F7F6;
        }

        .torn-bottom {
          display: block;
          width: calc(100% + 56px);
          margin-left: -28px;
          margin-top: -2px;
          line-height: 0;
        }

        .contact-icon-circle {
          box-shadow: 0 2px 12px rgba(0,0,0,0.10);
        }
      `}</style>

      <section
        className="font-dm-sans min-h-screen flex items-center justify-center px-5 py-10"
        style={{ background: "#FFFBEF" }}
      >
        <div className="flex items-center justify-between w-full max-w-6xl gap-16 flex-wrap">

          {/* ── LEFT ── */}
          <div className="flex-1 min-w-[280px] max-w-xl">
            <h1
              className="font-dm-serif text-5xl font-normal leading-tight mb-5"
              style={{ color: "#2C2B27" }}
            >
              Let's Get In Touch.
            </h1>

            <p className="text-base leading-relaxed mb-12 max-w-sm" style={{ color: "#6B6A65" }}>
              As a dynamic Startup Consultancy, our mission at{" "}
              <span className="font-semibold" style={{ color: "#2C2B27" }}>Vyapaar</span>
              <span className="font-semibold" style={{ color: "#5FA9C2" }}>वाणी</span>{" "}
              is to deliver impactful services backed by driven strategies.
            </p>

            {/* Phone */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="contact-icon-circle w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0"
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <path
                    d="M13.2 17.8C10.6 15.2 8.6 12.3 7.8 10.1L9.4 8.3C9.9 7.7 10 6.8 9.6 6.1L7.8 2.9C7.3 2.1 6.2 1.8 5.4 2.3L3.5 3.4C2.6 3.9 2.1 4.9 2.2 6C2.6 10.3 5.6 15.6 9.8 19.8C14 24 19.3 27 23.6 27.4C24.7 27.5 25.7 27 26.2 26.1L27.3 24.2C27.8 23.3 27.5 22.2 26.7 21.8L23.5 20C22.8 19.6 21.9 19.7 21.3 20.2L19.5 21.8C17.3 21 14.8 19.4 13.2 17.8Z"
                    fill="#F07030"
                  />
                  <rect x="13" y="2" width="14" height="10" rx="3" fill="#1FA0DA" />
                  <circle cx="17" cy="7" r="1.2" fill="white" />
                  <circle cx="20" cy="7" r="1.2" fill="white" />
                  <circle cx="23" cy="7" r="1.2" fill="white" />
                  <path d="M15 12 L13 15 L18 12Z" fill="#1FA0DA" />
                </svg>
              </div>
              <span className="text-base font-medium" style={{ color: "#3C3B36" }}>
                1800-571-0809
              </span>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="contact-icon-circle w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0"
              >
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                  <rect x="2" y="6" width="20" height="14" rx="2" fill="#F5A020" />
                  <path d="M2 8 L12 15 L22 8" stroke="#E07010" strokeWidth="1.5" fill="none" />
                  <path d="M14 18 L27 12 L18 26 L16 21 Z" fill="#1FA0DA" />
                  <path d="M16 21 L19 19 L18 26 Z" fill="#1580AA" />
                </svg>
              </div>
              <span className="text-base font-medium" style={{ color: "#3C3B36" }}>
                info@Vyapaarvanii.com
              </span>
            </div>
          </div>

          {/* ── RIGHT — FORM CARD ── */}
          <div className="flex-1 min-w-[300px] max-w-xl relative">

            {/* Red Push Pin */}
            <svg
              className="absolute z-20"
              style={{ top: "-38px", left: "50%", transform: "translateX(-50%)", width: "52px", height: "60px" }}
              viewBox="0 0 52 60"
            >
              <defs>
                <radialGradient id="pinHead" cx="35%" cy="30%" r="55%">
                  <stop offset="0%" stopColor="#FF7080" />
                  <stop offset="100%" stopColor="#B81C28" />
                </radialGradient>
              </defs>
              <circle cx="28" cy="22" r="20" fill="url(#pinHead)" />
              <ellipse cx="22" cy="15" rx="7" ry="5" fill="white" opacity="0.25" />
              <path d="M26 40 L29 58" stroke="#8B1520" strokeWidth="3" strokeLinecap="round" />
              <ellipse cx="28" cy="40" rx="8" ry="3" fill="rgba(0,0,0,0.15)" />
            </svg>

            {/* Form Card */}
            <div
              className="form-card-rotated bg-white rounded-t-2xl overflow-visible relative"
              style={{
                padding: "32px 28px 28px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.12), 0 4px 16px rgba(0,0,0,0.07)",
              }}
            >
              {/* Form Grid */}
              <div className="grid grid-cols-2 gap-4 mb-4">

                {/* Full Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold" style={{ color: "#3C3B36" }}>
                    Full Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="font-dm-sans rounded-lg px-3 py-2 text-xs outline-none transition-all"
                    style={{ background: "#F5F7F6", border: "none", color: "#9A9A96" }}
                  />
                </div>

                {/* Email Address */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold" style={{ color: "#3C3B36" }}>
                    Email Address <span>*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your Email Address"
                    className="font-dm-sans rounded-lg px-3 py-2 text-xs outline-none transition-all"
                    style={{ background: "#F5F7F6", border: "none", color: "#9A9A96" }}
                  />
                </div>

                {/* Full Name 2 */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold" style={{ color: "#3C3B36" }}>
                    Full Name <span>*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    className="font-dm-sans rounded-lg px-3 py-2 text-xs outline-none transition-all"
                    style={{ background: "#F5F7F6", border: "none", color: "#9A9A96" }}
                  />
                </div>

                {/* Company Name */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold" style={{ color: "#3C3B36" }}>
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your Company Name"
                    className="font-dm-sans rounded-lg px-3 py-2 text-xs outline-none transition-all"
                    style={{ background: "#F5F7F6", border: "none", color: "#9A9A96" }}
                  />
                </div>

                {/* Service Required */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold" style={{ color: "#3C3B36" }}>
                    Service Required <span>*</span>
                  </label>
                  <select
                    className="select-custom font-dm-sans rounded-lg px-3 py-2 text-xs outline-none pr-8"
                    style={{ border: "none", color: "#9A9A96" }}
                    defaultValue=""
                  >
                    <option value="" disabled>Select a service</option>
                    <option>Business Planning</option>
                    <option>Marketing</option>
                    <option>Financial Management</option>
                  </select>
                </div>

                {/* Funding Range */}
                <div className="flex flex-col gap-1">
                  <label className="text-xs font-semibold" style={{ color: "#3C3B36" }}>
                    Funding Range
                  </label>
                  <select
                    className="select-custom font-dm-sans rounded-lg px-3 py-2 text-xs outline-none pr-8"
                    style={{ border: "none", color: "#9A9A96" }}
                    defaultValue=""
                  >
                    <option value="" disabled>Select amount</option>
                    <option>Under ₹10L</option>
                    <option>₹10L – ₹50L</option>
                    <option>₹50L+</option>
                  </select>
                </div>

                {/* Additional Information - full width */}
                <div className="flex flex-col gap-1 col-span-2">
                  <label className="text-xs font-semibold" style={{ color: "#3C3B36" }}>
                    Additional Information
                  </label>
                  <textarea
                    placeholder="Tell us more about your business needs..."
                    rows={4}
                    className="font-dm-sans rounded-lg px-3 py-2 text-xs outline-none resize-none"
                    style={{ background: "#F5F7F6", border: "none", color: "#9A9A96", lineHeight: "1.6" }}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                className="btn-submit-3d font-dm-sans w-full py-4 rounded-full text-base font-semibold text-white flex items-center justify-center gap-2 mt-2 cursor-pointer"
                style={{ background: "#289DD2", border: "none", letterSpacing: "0.3px" }}
              >
                Submit &nbsp;→
              </button>

            </div>
          </div>

        </div>
      </section>
    </>
  )
}

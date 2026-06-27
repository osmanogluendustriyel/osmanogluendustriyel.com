"use client"

import { useState } from "react"
import { X, ZoomIn } from "lucide-react"
import type { Content } from "@/hooks/use-content"

interface WeldingFixtureSpotlightProps {
  content: Content
}

export function WeldingFixtureSpotlight({ content }: WeldingFixtureSpotlightProps) {
  const [isZoomed, setIsZoomed] = useState(false)
  const { badge, title, subtitle, description, cta, imageAlt } = content.weldingFixture

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-5 gap-0 bg-white rounded-2xl shadow-xl overflow-hidden border border-blue-100">
          <div className="md:col-span-2 order-2 md:order-1 p-8 md:p-12 flex flex-col justify-center">
            <span className="inline-block text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4 w-fit">
              {badge}
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">{title}</h2>
            <p className="text-blue-600 font-semibold mb-4">{subtitle}</p>
            <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
            <button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-colors w-fit"
            >
              {cta}
            </button>
          </div>
          <div
            className="md:col-span-3 order-1 md:order-2 bg-slate-50 flex items-center justify-center p-4 md:p-6 cursor-pointer group relative"
            onClick={() => setIsZoomed(true)}
          >
            <img
              src="/images/welding-fixture-info-card.jpeg"
              alt={imageAlt}
              className="w-full h-auto max-h-[760px] object-contain rounded-lg shadow-md transition-transform group-hover:scale-[1.01]"
            />
            <div className="absolute inset-4 md:inset-6 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors rounded-lg">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 rounded-full p-3 shadow-lg">
                <ZoomIn className="w-6 h-6 text-gray-700" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {isZoomed && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setIsZoomed(false)}
        >
          <button
            onClick={() => setIsZoomed(false)}
            className="absolute top-4 right-4 md:top-6 md:right-6 text-white hover:text-gray-300 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src="/images/welding-fixture-info-card.jpeg"
            alt={imageAlt}
            className="max-w-full max-h-full object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}

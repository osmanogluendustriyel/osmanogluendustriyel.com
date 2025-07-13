"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import type { Content } from "@/hooks/use-content"

interface HeroSectionProps {
  content: Content
}

export function HeroSection({ content }: HeroSectionProps) {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('/images/hero-bg.png')",
        }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Gebze CNC Tezgah Uzmanı - Osmanoğlu Endüstriyel
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-8 font-medium">CNC Kesim, Freze ve Torna Hizmetleri - Hassas Metal Parça Üretimi</p>
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">{content.hero.description}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold"
              onClick={scrollToContact}
            >
              {content.hero.cta}
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold bg-transparent"
              onClick={scrollToAbout}
            >
              <Play className="mr-2 w-5 h-5" />
              {content.hero.cta2}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  )
}

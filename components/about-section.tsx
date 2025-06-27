"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Users, Zap } from "lucide-react"
import type { Content } from "@/hooks/use-content"

interface AboutSectionProps {
  content: Content
}

export function AboutSection({ content }: AboutSectionProps) {
  const icons = [CheckCircle, Award, Users]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content.about.title}</h2>
          <p className="text-xl text-blue-600 font-semibold mb-6">{content.about.subtitle}</p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">{content.about.description}</p>
        </div>

        {/* Add image showcase */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="relative">
            <img
              src="/images/cnc-machine-2.png"
              alt="CNC Machine in operation"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-blue-600/10 rounded-lg"></div>
          </div>
          <div className="relative">
            <img
              src="/images/metal-parts.png"
              alt="Precision metal parts"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <div className="absolute inset-0 bg-blue-600/10 rounded-lg"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {content.about.stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8">
          {content.about.features.map((feature, index) => {
            const Icon = icons[index] || Zap
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

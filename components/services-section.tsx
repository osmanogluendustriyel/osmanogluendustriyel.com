"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Factory, Wrench, Shield, Settings, Headphones, GraduationCap } from "lucide-react"
import type { Content } from "@/hooks/use-content"

interface ServicesSectionProps {
  content: Content
}

export function ServicesSection({ content }: ServicesSectionProps) {
  const iconMap = {
    factory: Factory,
    engineering: Wrench,
    quality: Shield,
    maintenance: Settings,
    support: Headphones,
    training: GraduationCap,
  }

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content.services.title}</h2>
          <p className="text-xl text-blue-600 font-semibold">{content.services.subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.services.items.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap] || Factory
            return (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

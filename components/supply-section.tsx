"use client"

import { ArrowRight } from "lucide-react"
import type { Content } from "@/hooks/use-content"

interface SupplySectionProps {
  content: Content
}

/** Hırdavat tarafı (Osmanoğlu Tedarik) için tanıtım ve yönlendirme. */
export function SupplySection({ content }: SupplySectionProps) {
  const { supply } = content

  return (
    <section id="supply" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 overflow-hidden rounded-2xl bg-slate-900 shadow-lg">
          <div className="p-8 sm:p-12 flex flex-col justify-center">
            <p className="text-blue-400 font-semibold mb-3">{supply.badge}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{supply.title}</h2>
            <p className="text-gray-300 leading-relaxed mb-8">{supply.description}</p>
            <div>
              <a
                href={supply.url}
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
              >
                {supply.cta}
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="relative min-h-[260px]">
            <img
              src="/images/tedarik-magaza.jpg"
              alt={supply.imageAlt}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

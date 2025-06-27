"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"
import { X } from "lucide-react"

interface GallerySectionProps {
  content: any
}

export function GallerySection({ content }: GallerySectionProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "/images/cnc-machine-1.png",
      alt: "CNC Machine Operation",
      title: "Advanced CNC Machining",
    },
    {
      src: "/images/cnc-machine-2.png",
      alt: "Precision Manufacturing",
      title: "Precision Manufacturing",
    },
    {
      src: "/images/metal-parts.png",
      alt: "Quality Metal Parts",
      title: "Quality Metal Parts",
    },
    {
      src: "/images/precision-parts.png",
      alt: "Precision Components",
      title: "Precision Components",
    },
    {
      src: "/images/factory-floor.png",
      alt: "Factory Floor",
      title: "Modern Production Facility",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Facility & Work</h2>
          <p className="text-xl text-blue-600 font-semibold">See Our CNC Machining Capabilities</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden"
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative group">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-semibold text-lg drop-shadow-lg">{image.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <img
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery Image"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

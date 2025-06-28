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
      src: "/images/gallery-1.png",
      alt: "CNC Freze Makinesi",
      title: "CNC Freze İşlemleri",
    },
    {
      src: "/images/gallery-2.png",
      alt: "CNC Torna Makinesi",
      title: "CNC Torna Hizmetleri",
    },
    {
      src: "/images/gallery-3.png",
      alt: "CNC İşleme Merkezi",
      title: "İleri CNC Teknolojisi",
    },
    {
      src: "/images/gallery-4.png",
      alt: "Hassas Metal Parça",
      title: "Hassas Metal Parçalar",
    },
    {
      src: "/images/gallery-5.png",
      alt: "Özel Üretim Parça",
      title: "Özel Üretim Çözümleri",
    },
    {
      src: "/images/gallery-6.png",
      alt: "Kalıp ve Aparat",
      title: "Kalıp ve Aparat Üretimi",
    },
    {
      src: "/images/gallery-7.png",
      alt: "Seri Üretim",
      title: "Seri Üretim Kapasitesi",
    },
    {
      src: "/images/gallery-8.png",
      alt: "Hassas Flanş Üretimi",
      title: "Hassas Flanş ve Bağlantı Parçaları",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tesisimiz ve Çalışmalarımız</h2>
          <p className="text-xl text-blue-600 font-semibold">CNC Tezgah Yeteneklerimizi Görün</p>
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

        {/* Simple Lightbox Modal */}
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

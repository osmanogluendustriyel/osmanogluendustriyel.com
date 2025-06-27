"use client"

import { useContent } from "@/hooks/use-content"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProductsSection } from "@/components/products-section"
import { WhyChooseUsSection } from "@/components/why-choose-us-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { GallerySection } from "@/components/gallery-section"
import { SEOHead } from "@/components/seo-head"

export default function Home() {
  const { content, language, switchLanguage, loading } = useContent()

  if (loading || !content) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <>
      <SEOHead language={language} />
      <main className="min-h-screen">
        <Navigation content={content} language={language} onLanguageChange={switchLanguage} />
        <HeroSection content={content} />
        <AboutSection content={content} />
        <ServicesSection content={content} />
        <ProductsSection content={content} />
        <GallerySection content={content} />
        <WhyChooseUsSection content={content} />
        <ContactSection content={content} />
        <Footer content={content} />
      </main>
    </>
  )
}

"use client"

import { useState, useEffect } from "react"

export type Language = "en" | "tr"

export interface Content {
  navigation: {
    home: string
    about: string
    services: string
    products: string
    contact: string
  }
  hero: {
    title: string
    subtitle: string
    description: string
    cta: string
    cta2: string
  }
  about: {
    title: string
    subtitle: string
    description: string
    stats: Array<{
      number: string
      label: string
    }>
    features: Array<{
      title: string
      description: string
    }>
  }
  services: {
    title: string
    subtitle: string
    items: Array<{
      title: string
      description: string
      icon: string
    }>
  }
  products: {
    title: string
    subtitle: string
    categories: Array<{
      name: string
      items: Array<{
        name: string
        description: string
      }>
    }>
  }
  whyChooseUs: {
    title: string
    subtitle: string
    reasons: Array<{
      title: string
      description: string
    }>
  }
  contact: {
    title: string
    subtitle: string
    info: {
      address: string
      phone1: string
      phone2: string
      email: string
      hours: string
    }
    form: {
      name: string
      email: string
      company: string
      phone: string
      subject: string
      message: string
      submit: string
    }
  }
  footer: {
    description: string
    quickLinks: string
    services: string
    contact: string
    followUs: string
    copyright: string
  }
}

export function useContent() {
  const [language, setLanguage] = useState<Language>("tr")
  const [content, setContent] = useState<Content | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true)
        const response = await fetch(`/content/${language}.json`)
        const data = await response.json()
        setContent(data)
      } catch (error) {
        console.error("Error loading content:", error)
      } finally {
        setLoading(false)
      }
    }

    loadContent()
  }, [language])

  const switchLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
  }

  return {
    content,
    language,
    switchLanguage,
    loading,
  }
}

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Factory } from "lucide-react"
import { LanguageSwitcher } from "./language-switcher"
import type { Content, Language } from "@/hooks/use-content"

interface NavigationProps {
  content: Content
  language: Language
  onLanguageChange: (language: Language) => void
}

export function Navigation({ content, language, onLanguageChange }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  const navItems = [
    { key: "home", id: "hero" },
    { key: "about", id: "about" },
    { key: "services", id: "services" },
    { key: "products", id: "products" },
    { key: "contact", id: "contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Factory className="w-8 h-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Osmanoğlu Endüstriyel</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
              >
                {content.navigation[item.key as keyof typeof content.navigation]}
              </button>
            ))}
            <LanguageSwitcher currentLanguage={language} onLanguageChange={onLanguageChange} />
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher currentLanguage={language} onLanguageChange={onLanguageChange} />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.key}
                      onClick={() => scrollToSection(item.id)}
                      className="text-left text-lg text-gray-700 hover:text-blue-600 transition-colors font-medium py-2"
                    >
                      {content.navigation[item.key as keyof typeof content.navigation]}
                    </button>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}

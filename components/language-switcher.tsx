"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import type { Language } from "@/hooks/use-content"

interface LanguageSwitcherProps {
  currentLanguage: Language
  onLanguageChange: (language: Language) => void
}

export function LanguageSwitcher({ currentLanguage, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-2">
      <Globe className="w-4 h-4" />
      <Button
        variant={currentLanguage === "en" ? "default" : "ghost"}
        size="sm"
        onClick={() => onLanguageChange("en")}
        className="h-8 px-2"
      >
        EN
      </Button>
      <Button
        variant={currentLanguage === "tr" ? "default" : "ghost"}
        size="sm"
        onClick={() => onLanguageChange("tr")}
        className="h-8 px-2"
      >
        TR
      </Button>
    </div>
  )
}

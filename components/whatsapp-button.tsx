"use client"

import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface WhatsAppButtonProps {
  phoneNumber?: string
  message?: string
  className?: string
}

export function WhatsAppButton({
  phoneNumber = "+905443200337",
  message = "Merhaba, CNC tezgah hizmetleriniz hakkında bilgi almak istiyorum.",
  className = "",
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <Button
      onClick={handleWhatsAppClick}
      className={`bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 ${className}`}
      size="lg"
    >
      <MessageCircle className="w-5 h-5 mr-2" />
      WhatsApp
    </Button>
  )
}

// Floating WhatsApp Button Component
export function FloatingWhatsAppButton({
  phoneNumber = "+905443200337",
  message = "Merhaba, CNC tezgah hizmetleriniz hakkında bilgi almak istiyorum.",
}: WhatsAppButtonProps) {
  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/[^0-9]/g, "")}?text=${encodedMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 hover:scale-110"
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  )
}

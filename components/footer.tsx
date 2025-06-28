"use client"

import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import type { Content } from "@/hooks/use-content"

interface FooterProps {
  content: Content
}

export function Footer({ content }: FooterProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img src="/images/logo.png" alt="Osmanoğlu Endüstriyel Çözümler" className="h-10 object-contain" />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">{content.footer.description}</p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{content.footer.quickLinks}</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {content.navigation.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {content.navigation.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {content.navigation.services}
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {content.navigation.products}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{content.footer.contact}</h3>
            <div className="space-y-3 text-gray-300">
              <p className="text-sm leading-relaxed">{content.contact.info.address}</p>
              <p className="text-sm">{content.contact.info.phone}</p>
              <p className="text-sm">{content.contact.info.email}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">{content.footer.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

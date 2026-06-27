"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { WhatsAppButton } from "./whatsapp-button"
import type { Content } from "@/hooks/use-content"

interface ContactSectionProps {
  content: Content
}

export function ContactSection({ content }: ContactSectionProps) {
  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content.contact.title}</h2>
          <p className="text-xl text-blue-600 font-semibold">{content.contact.subtitle}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{content.contact.labels.address}</h3>
                      <p className="text-gray-600 text-sm leading-relaxed">{content.contact.info.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{content.contact.labels.phone}</h3>
                      <p className="text-gray-600 text-sm">{content.contact.info.phone1}</p>
                      <p className="text-gray-600 text-sm">{content.contact.info.phone2}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{content.contact.labels.email}</h3>
                      <p className="text-gray-600 text-sm break-all">{content.contact.info.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{content.contact.labels.hours}</h3>
                      <p className="text-gray-600 text-sm">{content.contact.info.hours}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* WhatsApp Contact Button */}
            <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-blue-50">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{content.contact.quickContact.title}</h3>
                <p className="text-gray-600 mb-6">{content.contact.quickContact.description}</p>
                <WhatsAppButton
                  phoneNumber="+905443200337"
                  message={content.contact.quickContact.whatsappMessage}
                  className="w-full sm:w-auto"
                />
              </CardContent>
            </Card>
          </div>

          {/* Interactive Leaflet Map */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">{content.contact.map.title}</CardTitle>
              <p className="text-gray-600">{content.contact.map.description}</p>
            </CardHeader>
            <CardContent>
              <div className="w-full h-96 rounded-lg overflow-hidden bg-gray-100">
                <iframe
                  src="https://www.openstreetmap.org/export/embed.html?bbox=29.4613%2C40.7982%2C29.4813%2C40.8182&layer=mapnik&marker=40.8040%2C29.4722"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Osmanoğlu Makina & Mühendislik Konumu"
                ></iframe>
              </div>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <strong>{content.contact.map.routeLabel}</strong> {content.contact.map.routeNote}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

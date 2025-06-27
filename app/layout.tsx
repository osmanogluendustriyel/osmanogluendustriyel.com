import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Osmanoğlu Endüstriyel - CNC Tezgah ve Metal Parça Üretimi | Gebze Kocaeli",
  description:
    "Gebze'de CNC tezgah ile hassas metal parça üretimi. Otomotiv ve endüstriyel sektöre yüksek kaliteli CNC freze, torna hizmetleri. ISO sertifikalı kalite, hızlı teslimat.",
  keywords:
    "CNC tezgah Gebze, metal parça üretimi Kocaeli, CNC freze torna, hassas işleme, otomotiv parçaları, endüstriyel bileşenler, Osmanoğlu Endüstriyel",
  authors: [{ name: "Osmanoğlu Endüstriyel" }],
  creator: "Osmanoğlu Endüstriyel",
  publisher: "Osmanoğlu Endüstriyel",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: "en_US",
    url: "https://www.osmanogluendustriyel.com",
    siteName: "Osmanoğlu Endüstriyel",
    title: "Osmanoğlu Endüstriyel - CNC Tezgah ve Metal Parça Üretimi | Gebze",
    description:
      "Gebze'de CNC tezgah ile hassas metal parça üretimi. Otomotiv ve endüstriyel sektöre yüksek kaliteli hizmetler.",
    images: [
      {
        url: "/images/cnc-machine-1.png",
        width: 1200,
        height: 630,
        alt: "Osmanoğlu Endüstriyel CNC Tezgah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@osmanogluendustriyel",
    creator: "@osmanogluendustriyel",
    title: "Osmanoğlu Endüstriyel - CNC Tezgah Gebze",
    description: "Gebze'de hassas CNC tezgah ve metal parça üretimi hizmetleri",
    images: ["/images/cnc-machine-1.png"],
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "Manufacturing",
  classification: "Business",
  other: {
    "geo.region": "TR-41",
    "geo.placename": "Gebze, Kocaeli",
    "geo.position": "40.7982;29.4313",
    ICBM: "40.7982, 29.4313",
    "DC.title": "Osmanoğlu Endüstriyel - CNC Tezgah Gebze",
    "DC.creator": "Osmanoğlu Endüstriyel",
    "DC.subject": "CNC machining, metal parts manufacturing, precision engineering",
    "DC.description": "Professional CNC machining services in Gebze industrial zone",
    "DC.publisher": "Osmanoğlu Endüstriyel",
    "DC.contributor": "Osmanoğlu Endüstriyel",
    "DC.date": "2024",
    "DC.type": "Text",
    "DC.format": "text/html",
    "DC.identifier": "https://www.osmanogluendustriyel.com",
    "DC.language": "tr",
    "DC.coverage": "Gebze, Kocaeli, Turkey",
    "DC.rights": "Copyright 2024 Osmanoğlu Endüstriyel",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <head>
        {/* Additional SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Osmanoğlu Endüstriyel" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.osmanogluendustriyel.com" />

        {/* Alternate Language Links */}
        <link rel="alternate" hrefLang="tr" href="https://www.osmanogluendustriyel.com" />
        <link rel="alternate" hrefLang="en" href="https://www.osmanogluendustriyel.com/en" />
        <link rel="alternate" hrefLang="x-default" href="https://www.osmanogluendustriyel.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Local Business Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.osmanogluendustriyel.com",
              name: "Osmanoğlu Endüstriyel",
              alternateName: "Osmanoğlu Endüstriyel CNC",
              description: "Gebze'de CNC tezgah ile hassas metal parça üretimi yapan endüstriyel firma",
              url: "https://www.osmanogluendustriyel.com",
              telephone: "+90-262-XXX-XXXX",
              email: "info@osmanogluendustriyel.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Gebze Organize Sanayi Bölgesi",
                addressLocality: "Gebze",
                addressRegion: "Kocaeli",
                addressCountry: "TR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "40.7982",
                longitude: "29.4313",
              },
              openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-13:00"],
              priceRange: "$$",
              image: [
                "https://www.osmanogluendustriyel.com/images/cnc-machine-1.png",
                "https://www.osmanogluendustriyel.com/images/cnc-machine-2.png",
              ],
              sameAs: [
                "https://www.facebook.com/osmanogluendustriyel",
                "https://www.linkedin.com/company/osmanogluendustriyel",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "CNC Machining Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "CNC Freze Hizmetleri",
                      description: "Hassas CNC freze ile metal parça üretimi",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "CNC Torna Hizmetleri",
                      description: "Silindirik parçalar için CNC torna işlemleri",
                    },
                  },
                ],
              },
            }),
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Osmanoğlu Endüstriyel",
              url: "https://www.osmanogluendustriyel.com",
              logo: "https://www.osmanogluendustriyel.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+90-262-XXX-XXXX",
                contactType: "customer service",
                availableLanguage: ["Turkish", "English"],
                areaServed: "TR",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Gebze Organize Sanayi Bölgesi",
                addressLocality: "Gebze",
                addressRegion: "Kocaeli",
                addressCountry: "TR",
              },
              foundingDate: "2014",
              numberOfEmployees: "10-50",
              industry: "Manufacturing",
              knowsAbout: [
                "CNC Machining",
                "Metal Parts Manufacturing",
                "Precision Engineering",
                "Automotive Parts",
                "Industrial Components",
              ],
            }),
          }}
        />

        {/* Manufacturing Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ManufacturingBusiness",
              name: "Osmanoğlu Endüstriyel",
              description: "CNC tezgah ile hassas metal parça üretimi",
              url: "https://www.osmanogluendustriyel.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Gebze Organize Sanayi Bölgesi",
                addressLocality: "Gebze",
                addressRegion: "Kocaeli",
                postalCode: "41400",
                addressCountry: "TR",
              },
              telephone: "+90-262-XXX-XXXX",
              email: "info@osmanogluendustriyel.com",
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Product",
                    name: "CNC İşlenmiş Metal Parçalar",
                    description: "Otomotiv ve endüstriyel uygulamalar için hassas metal parçalar",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

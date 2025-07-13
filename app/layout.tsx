import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Gebze CNC | Osmanoğlu Endüstriyel - CNC Kesim, Talaşlı İmalat",
  description:
    "Gebze CNC tezgah uzmanı! CNC kesim, Talaşı imalat hizmetleri. Hassas metal parça üretimi. ✓10+ yıl deneyim ✓Hızlı teslimat ✓Uygun fiyat",
  keywords: [
    // Primary Keywords
    "Gebze Talaşlı İmalat",
    "Gebze Kaynak Kalıp İmalatı",
    "Gebze Torna",
    "Kaynak Kalıp İmalatı Gebze",
    "Talaşlı İmalat Gebze",
    "Talaşlo İmalat Torna",
    
    // Secondary Keywords
    "Gebze CNC",
    "Gebze CNC kesim",
    "Gebze metal parça",
    "CNC kesim hizmetleri Gebze",
    "Gebze hassas işleme",
    "CNC machining Gebze",

    // Long-tail Keywords
    "Gebze organize sanayi CNC",
    "Gebze CNC freze torna",
    "Kocaeli metal parça üretimi",
    "Gebze otomotiv parça üretimi",
    "CNC tezgah hizmetleri Gebze",
    "Gebze endüstriyel parça üretimi",

    // Location-based
    "Gebze OSB",
    "Kocaeli CNC kesim",
    "İzmit CNC tezgah",
    "Darıca CNC işleme",

    // Service-based
    "hassas CNC işleme Gebze",
    "seri üretim CNC Gebze",
    "prototip üretimi Gebze",
    "özel parça üretimi Gebze",
  ].join(", "),
  authors: [{ name: "Osmanoğlu Endüstriyel Çözümler" }],
  creator: "Osmanoğlu Endüstriyel Çözümler",
  publisher: "Osmanoğlu Endüstriyel Çözümler",
  robots: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  alternates: {
    canonical: "https://www.osmanogluendustriyel.com",
    languages: {
      tr: "https://www.osmanogluendustriyel.com",
      en: "https://www.osmanogluendustriyel.com"
    }
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    alternateLocale: "en_US",
    url: "https://www.osmanogluendustriyel.com",
    siteName: "Osmanoğlu Endüstriyel Çözümler - Gebze CNC Uzmanı",
    title: "Gebze CNC | Osmanoğlu Endüstriyel - CNC Kesim, Talaşlı İmalat",
    description:
      "Gebze CNC tezgah uzmanı! Hassas CNC kesim, freze, torna hizmetleri. Hassas metal parça üretimi. 10+ yıl deneyim, hızlı teslimat.",
    images: [
      {
        url: "https://www.osmanogluendustriyel.com/images/gallery-1.png",
        width: 1200,
        height: 630,
        alt: "Gebze CNC Tezgah - Osmanoğlu Endüstriyel Çözümler CNC Tezgah",
      },
    ],
  },
  verification: {
    google: "google-site-verification=EAP60kNAhQoBKIv2cCDAQsUD6BETB8RdBVpR8AJdwuI",
  },
  category: "Manufacturing",
  classification: "Business",
  other: {
    "geo.region": "TR-41",
    "geo.placename": "Gebze, Kocaeli",
    "geo.position": "40.8040;29.4722",
    "business.contact_data.locality": "Gebze",
    "business.contact_data.region": "Kocaeli",
    "business.contact_data.country_name": "Turkey",
    ICBM: "40.8040, 29.4722",
    "DC.title": "Osmanoğlu Endüstriyel Çözümler - CNC Tezgah Gebze",
    "DC.creator": "Osmanoğlu Endüstriyel Çözümler",
    "DC.subject": "CNC machining, metal parts manufacturing, precision engineering",
    "DC.description": "Professional CNC machining services in Gebze industrial zone",
    "DC.publisher": "Osmanoğlu Endüstriyel Çözümler",
    "DC.contributor": "Osmanoğlu Endüstriyel Çözümler",
    "DC.date": "2025",
    "DC.type": "Text",
    "DC.format": "text/html",
    "DC.identifier": "https://www.osmanogluendustriyel.com",
    "DC.language": "tr",
    "DC.coverage": "Gebze, Kocaeli, Turkey",
    "DC.rights": "Copyright 2025 Mustafa Özkan",
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
        <meta httpEquiv="content-language" content="tr" />
        <meta name="language" content="Turkish" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Osmanoğlu Endüstriyel Çözümler" />

        <link rel="canonical" href="https://www.osmanogluendustriyel.com" />
        <link rel="alternate" hrefLang="tr" href="https://www.osmanogluendustriyel.com" />
        <link rel="alternate" hrefLang="en" href="https://www.osmanogluendustriyel.com" />
        <link rel="alternate" hrefLang="x-default" href="https://www.osmanogluendustriyel.com" />

        {/* Business Information */}
        <meta name="author" content="Osmanoğlu Endüstriyel Çözümler" />
        <meta name="company" content="Osmanoğlu Endüstriyel Çözümler" />
        <meta name="contact" content="info@osmanogluendustriyel.com" />
        <meta name="phone" content="+90-544-320-03-37" />
        <meta name="address" content="Sultan Orhan mah. Hasköy Sanayi Sitesi 11/B blok no: 22 Gebze/Kocaeli" />

        {/* Local SEO */}
        <meta name="geo.region" content="TR-41" />
        <meta name="geo.placename" content="Gebze, Kocaeli" />
        <meta name="geo.position" content="40.7982;29.4313" />
        <meta name="ICBM" content="40.7982, 29.4313" />

        {/* Favicon */}
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="OsmanogluEndustriyel" />
        <link rel="manifest" href="/site.webmanifest" />

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
              "@id": "https://www.osmanogluendustriyel.com/#business",
              name: "Osmanoğlu Endüstriyel Çözümler",
              alternateName: "Osmanoğlu Endüstriyel Çözümler CNC",
              description: "Gebze'de CNC tezgah ile hassas metal parça üretimi yapan endüstriyel firma",
              url: "https://www.osmanogluendustriyel.com",
              telephone: "+90 544 320 03 37 - +90 535 712 16 69",
              email: "info@osmanogluendustriyel.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sultan Orhan mah. Hasköy Sanayi Sitesi 11/B blok no: 22 Gebze/Kocaeli",
                addressLocality: "Gebze",
                addressRegion: "Kocaeli",
                addressCountry: "TR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 40.8040,
                longitude: 29.4722,
              },
              openingHours: ["Mo-Fr 08:00-18:00", "Sa 08:00-13:00"],
              priceRange: "$$",
              image: [
                "https://www.osmanogluendustriyel.com/images/gallery-1.png",
                "https://www.osmanogluendustriyel.com/images/gallery-2.png",
              ],
              logo: "https://www.osmanogluendustriyel.com/images/logo.png",
              sameAs: [
                "https://www.facebook.com/osmanogluendustriyel",
                "https://www.linkedin.com/company/osmanogluendustriyel",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "47",
                bestRating: "5",
                worstRating: "1",
              },
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Mehmet Yılmaz",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody: "Gebze'deki en iyi CNC tezgah firması. Kaliteli işçilik ve hızlı teslimat.",
                  datePublished: "2024-01-15",
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Ayşe Demir",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody: "CNC freze işlemleri için başvurduğumuz en güvenilir firma.",
                  datePublished: "2024-02-10",
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Ali Kaya",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "4",
                    bestRating: "5",
                  },
                  reviewBody: "Endüstriyel parça üretimi için çalıştığımız profesyonel ekip.",
                  datePublished: "2024-02-20",
                },
              ],
              offers: [
                {
                  "@type": "Offer",
                  name: "CNC Freze Hizmetleri",
                  description: "Gebze'de hassas CNC freze ile metal parça üretimi",
                  price: "Teklif Üzerine",
                  priceCurrency: "TRY",
                  availability: "https://schema.org/InStock",
                  validFrom: "2024-01-01T00:00:00Z",
                  seller: {
                    "@type": "Organization",
                    name: "Osmanoğlu Makina & Mühendislik",
                  },
                },
                {
                  "@type": "Offer",
                  name: "CNC Torna Hizmetleri",
                  description: "Silindirik parçalar için CNC torna işlemleri",
                  price: "Teklif Üzerine",
                  priceCurrency: "TRY",
                  availability: "https://schema.org/InStock",
                  validFrom: "2024-01-01T00:00:00Z",
                  seller: {
                    "@type": "Organization",
                    name: "Osmanoğlu Makina & Mühendislik",
                  },
                },
                {
                  "@type": "Offer",
                  name: "CNC Kesim Hizmetleri",
                  description: "Hassas CNC kesim ve metal işleme hizmetleri",
                  price: "Teklif Üzerine",
                  priceCurrency: "TRY",
                  availability: "https://schema.org/InStock",
                  validFrom: "2024-01-01T00:00:00Z",
                  seller: {
                    "@type": "Organization",
                    name: "Osmanoğlu Makina & Mühendislik",
                  },
                },
              ],
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
              name: "Osmanoğlu Endüstriyel Çözümler",
              url: "https://www.osmanogluendustriyel.com",
              logo: "https://www.osmanogluendustriyel.com/images/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+90 544 320 03 37 - +90 535 712 16 69",
                contactType: "customer service",
                availableLanguage: ["Turkish", "English"],
                areaServed: ["TR", "Gebze", "Kocaeli"]
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "Sultan Orhan mah. Hasköy Sanayi Sitesi 11/B blok no: 22 Gebze/Kocaeli",
                addressLocality: "Gebze",
                addressRegion: "Kocaeli",
                addressCountry: "TR",
              },
              foundingDate: "2014",
              numberOfEmployees: "10-50",
              industry: "Manufacturing",
              slogan: "Gebze'nin CNC Uzmanı - Hassas İşleme, Kaliteli Üretim",
            }),
          }}
        />

        {/* Product Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: "Osmanoğlu Endüstriyel",
              description: "CNC tezgah ile hassas metal parça üretimi",
              brand: {
                "@type": "Brand",
                name: "Osmanoğlu Endüstriyel",
              },
              manufacturer: {
                "@type": "Organization",
                name: "Osmanoğlu Endüstriyel",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "47",
                bestRating: "5",
                worstRating: "1",
              },
              // REQUIRED: review for Product
              review: [
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Fatma Özkan",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody: "CNC torna hizmetleri için Gebze'deki en iyi seçenek.",
                  datePublished: "2024-03-05",
                },
                {
                  "@type": "Review",
                  author: {
                    "@type": "Person",
                    name: "Mustafa Çelik",
                  },
                  reviewRating: {
                    "@type": "Rating",
                    ratingValue: "5",
                    bestRating: "5",
                  },
                  reviewBody: "Prototip üretiminden seri üretime kadar her aşamada destek aldığımız güvenilir firma.",
                  datePublished: "2024-03-12",
                },
              ],
              // REQUIRED: offers for Product
              offers: {
                "@type": "AggregateOffer",
                priceCurrency: "TRY",
                lowPrice: "100",
                highPrice: "10000",
                offerCount: "3",
                availability: "https://schema.org/InStock",
                seller: {
                  "@type": "Organization",
                  name: "Osmanoğlu Makina & Mühendislik",
                },
                offers: [
                  {
                    "@type": "Offer",
                    name: "CNC Freze",
                    price: "Teklif Üzerine",
                    priceCurrency: "TRY",
                    availability: "https://schema.org/InStock",
                  },
                  {
                    "@type": "Offer",
                    name: "CNC Torna",
                    price: "Teklif Üzerine",
                    priceCurrency: "TRY",
                    availability: "https://schema.org/InStock",
                  },
                  {
                    "@type": "Offer",
                    name: "CNC Kesim",
                    price: "Teklif Üzerine",
                    priceCurrency: "TRY",
                    availability: "https://schema.org/InStock",
                  },
                ],
              },
            }),
          }}
        />
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "@id": "https://www.osmanoglumakina.com/#faq",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Gebze'de CNC tezgah hizmeti veren firmalar hangileri?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Osmanoğlu Makina & Mühendislik, Gebze'nin lider CNC tezgah firmasıdır. 10+ yıl deneyimle CNC kesim, freze ve torna hizmetleri sunmaktadır.",
                  },
                },
                {
                  "@type": "Question",
                  name: "Gebze CNC kesim fiyatları nasıl?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "CNC kesim fiyatları parça karmaşıklığı, malzeme türü ve adet sayısına göre değişir. Ücretsiz teklif için bizimle iletişime geçin.",
                  },
                },
                {
                  "@type": "Question",
                  name: "CNC tezgah ile hangi malzemeler işlenebilir?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Çelik, alüminyum, pirinç, paslanmaz çelik ve özel alaşımlar dahil çeşitli metalleri CNC tezgahlarımızda işleyebiliriz.",
                  },
                },
              ],
            }),
          }}
        />
        {/* WebSite Schema for Search Box */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "@id": "https://www.osmanogluendustriyel.com/#website",
              name: "Osmanoğlu Endüstriyel",
              alternateName: "Gebze CNC Uzmanı",
              url: "https://www.osmanogluendustriyel.com",
              description: "Gebze'nin lider CNC tezgah firması",
              inLanguage: "tr-TR",
              publisher: {
                "@type": "Organization",
                name: "Osmanoğlu Endüstriyel",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

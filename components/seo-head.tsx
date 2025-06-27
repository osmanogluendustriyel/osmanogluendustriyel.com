"use client"

import Head from "next/head"
import { useContent, type Language } from "@/hooks/use-content"

interface SEOHeadProps {
  language: Language
  pageTitle?: string
  pageDescription?: string
  canonicalUrl?: string
}

export function SEOHead({
  language,
  pageTitle,
  pageDescription,
  canonicalUrl = "https://www.osmanogluendustriyel.com",
}: SEOHeadProps) {
  const { content } = useContent()

  const defaultTitle =
    language === "tr"
      ? "Osmanoğlu Endüstriyel - CNC Tezgah ve Metal Parça Üretimi | Gebze"
      : "Osmanoğlu Endüstriyel - CNC Machining and Metal Parts Manufacturing | Gebze"

  const defaultDescription =
    language === "tr"
      ? "Gebze'de CNC tezgah ile hassas metal parça üretimi. Otomotiv ve endüstriyel sektöre yüksek kaliteli CNC freze, torna hizmetleri."
      : "Precision CNC machining and metal parts manufacturing in Gebze. High-quality CNC milling and turning services for automotive and industrial sectors."

  const title = pageTitle || defaultTitle
  const description = pageDescription || defaultDescription

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={
          language === "tr"
            ? "CNC tezgah Gebze, metal parça üretimi, CNC freze, CNC torna, hassas işleme, otomotiv parçaları, endüstriyel bileşenler, Kocaeli, Osmanoğlu Endüstriyel"
            : "CNC machining Gebze, metal parts manufacturing, CNC milling, CNC turning, precision machining, automotive parts, industrial components, Kocaeli"
        }
      />

      {/* Language and Region */}
      <meta httpEquiv="content-language" content={language} />
      <meta name="language" content={language === "tr" ? "Turkish" : "English"} />
      <meta name="geo.region" content="TR-41" />
      <meta name="geo.placename" content="Gebze, Kocaeli" />
      <meta name="geo.position" content="40.7982;29.4313" />
      <meta name="ICBM" content="40.7982, 29.4313" />

      {/* Business Information */}
      <meta name="author" content="Osmanoğlu Endüstriyel" />
      <meta name="publisher" content="Osmanoğlu Endüstriyel" />
      <meta name="copyright" content="© 2024 Osmanoğlu Endüstriyel" />
      <meta name="company" content="Osmanoğlu Endüstriyel" />
      <meta name="contact" content="info@osmanogluendustriyel.com" />
      <meta name="phone" content="+90-262-XXX-XXXX" />
      <meta name="address" content="Gebze Organize Sanayi Bölgesi, Kocaeli, Turkey" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${canonicalUrl}/images/cnc-machine-1.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Osmanoğlu Endüstriyel CNC Machining" />
      <meta property="og:site_name" content="Osmanoğlu Endüstriyel" />
      <meta property="og:locale" content={language === "tr" ? "tr_TR" : "en_US"} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={`${canonicalUrl}/images/cnc-machine-1.png`} />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Alternate Languages */}
      <link rel="alternate" hrefLang="tr" href={canonicalUrl} />
      <link rel="alternate" hrefLang="en" href={`${canonicalUrl}/en`} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
    </Head>
  )
}

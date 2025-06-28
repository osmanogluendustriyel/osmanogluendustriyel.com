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
      ? "CNC Tezgah & Metal Parça Üretimi | Gebze Kocaeli | Osmanoğlu Endüstriyel"
      : "CNC Machining & Metal Parts Manufacturing | Gebze Kocaeli | Osmanoglu Industrial"

  const defaultDescription =
    language === "tr"
      ? "Gebze Kocaeli'de CNC freze ve torna ile hassas metal parça üretimi. Endüstriyel çözümler ve otomotiv sektörü için CNC işleme hizmetleri."
      : "CNC milling and turning for precision parts in Gebze, Kocaeli. Manufacturing solutions for industrial and automotive sectors."


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
            ? "CNC tezgah, Gebze CNC, Kocaeli CNC işleme, metal parça üretimi, CNC freze hizmeti, CNC torna, sanayi parça üretimi, hassas işleme, endüstriyel üretim, otomotiv sanayi parçaları"
            : "CNC machining, CNC milling, CNC turning, precision parts, metal parts manufacturing, Gebze Kocaeli, automotive components, industrial solutions"
        }
      />

      {/* Language and Region */}
      <meta httpEquiv="content-language" content={language} />
      <meta name="language" content={language === "tr" ? "Turkish" : "English"} />
      <meta name="geo.region" content="TR-41" />
      <meta name="geo.placename" content="Gebze, Kocaeli" />
      <meta name="geo.position" content="40.8040;29.4722" />
      <meta name="ICBM" content="40.8040, 29.4722" />

      {/* Business Information */}
      <meta name="author" content="Osmanoğlu Endüstriyel Çözümler" />
      <meta name="publisher" content="Osmanoğlu Endüstriyel Çözümler" />
      <meta name="copyright" content="© 2025 Mustafa Özkan" />
      <meta name="company" content="Osmanoğlu Endüstriyel Çözümler" />
      <meta name="contact" content="info@osmanogluendustriyel.com" />
      <meta name="phone" content="+90 544 320 03 37 - +90 535 712 16 69" />
      <meta name="address" content="Sultan Orhan mah. Hasköy Sanayi Sitesi 11/B blok no: 22 Gebze/Kocaeli" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${canonicalUrl}/images/cnc-machine-1.png`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Osmanoğlu Endüstriyel Çözümler CNC Machining" />
      <meta property="og:site_name" content="Osmanoğlu Endüstriyel Çözümler" />
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

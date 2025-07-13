import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Home, Search, Phone } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <Card className="max-w-2xl w-full border-0 shadow-xl">
        <CardContent className="p-12 text-center">
          {/* 404 Başlık */}
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-blue-600 mb-4">404</h1>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Sayfa Bulunamadı</h2>
            <p className="text-lg text-gray-600 mb-8">Aradığınız sayfa mevcut değil veya taşınmış olabilir.</p>
          </div>

          {/* CNC Hizmetleri Önerileri */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Gebze CNC Hizmetlerimizi Keşfedin:</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <Link href="/#services" className="text-blue-600 hover:text-blue-800 font-medium">
                🔧 CNC Freze Hizmetleri
              </Link>
              <Link href="/#services" className="text-blue-600 hover:text-blue-800 font-medium">
                ⚙️ CNC Torna Hizmetleri
              </Link>
              <Link href="/#products" className="text-blue-600 hover:text-blue-800 font-medium">
                🏭 Metal Parça Üretimi
              </Link>
              <Link href="/#contact" className="text-blue-600 hover:text-blue-800 font-medium">
                📞 Hızlı Teklif Al
              </Link>
            </div>
          </div>

          {/* Eylem Butonları */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
              <Link href="/">
                <Home className="w-5 h-5 mr-2" />
                Ana Sayfaya Dön
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/#services">
                <Search className="w-5 h-5 mr-2" />
                Hizmetlerimiz
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/#contact">
                <Phone className="w-5 h-5 mr-2" />
                İletişim
              </Link>
            </Button>
          </div>

          {/* SEO İçerik */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Gebze CNC Uzmanı:</strong> Osmanoğlu Endüstriyel olarak CNC kesim, freze ve torna
              hizmetleriyle hassas metal parça üretimi yapıyoruz.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export const metadata = {
  title: "Sayfa Bulunamadı - Gebze CNC | Osmanoğlu Endüstriyel",
  description:
    "Aradığınız sayfa bulunamadı. Gebze CNC tezgah hizmetlerimizi keşfedin: CNC kesim, freze, torna ve metal parça üretimi.",
  robots: "noindex, follow",
}

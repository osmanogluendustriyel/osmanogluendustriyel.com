"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import type { Content } from "@/hooks/use-content"

interface ProductsSectionProps {
  content: Content
}

export function ProductsSection({ content }: ProductsSectionProps) {
  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{content.products.title}</h2>
          <p className="text-xl text-blue-600 font-semibold">{content.products.subtitle}</p>
        </div>

        {/* Products Tabs */}
        <Tabs defaultValue="0" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            {content.products.categories.map((category, index) => (
              <TabsTrigger key={index} value={index.toString()} className="text-lg py-3">
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>

          {content.products.categories.map((category, categoryIndex) => (
            <TabsContent key={categoryIndex} value={categoryIndex.toString()}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((product, productIndex) => (
                  <Card
                    key={productIndex}
                    className="border-0 shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
                  >
                    <div className="relative h-48">
                      <img src={`/images/products-${productIndex + 1}.png`} alt={product.name} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-gray-900">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 leading-relaxed">{product.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

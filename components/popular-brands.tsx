"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const brands = [
  {
    name: "Maruti Suzuki",
    logo: "/placeholder.svg?height=80&width=120",
    models: 15,
    startingPrice: "₹3.54 Lakh",
    gradient: "from-red-500 to-red-600",
  },
  {
    name: "Hyundai",
    logo: "/placeholder.svg?height=80&width=120",
    models: 12,
    startingPrice: "₹5.69 Lakh",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    name: "Tata",
    logo: "/placeholder.svg?height=80&width=120",
    models: 10,
    startingPrice: "₹4.99 Lakh",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    name: "Mahindra",
    logo: "/placeholder.svg?height=80&width=120",
    models: 8,
    startingPrice: "₹7.49 Lakh",
    gradient: "from-orange-500 to-orange-600",
  },
  {
    name: "Honda",
    logo: "/placeholder.svg?height=80&width=120",
    models: 6,
    startingPrice: "₹7.31 Lakh",
    gradient: "from-green-500 to-green-600",
  },
  {
    name: "Toyota",
    logo: "/placeholder.svg?height=80&width=120",
    models: 8,
    startingPrice: "₹6.86 Lakh",
    gradient: "from-indigo-500 to-indigo-600",
  },
]

export function PopularBrands() {
  const [hoveredBrand, setHoveredBrand] = useState<string | null>(null)

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Popular Brands</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore cars from India's most trusted automotive brands
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, index) => (
            <Link key={brand.name} href={`/cars?brand=${brand.name.toLowerCase().replace(" ", "-")}`}>
              <Card
                className={`group cursor-pointer transition-all duration-300 hover:shadow-xl border-0 bg-white ${
                  hoveredBrand === brand.name ? "transform scale-105" : ""
                }`}
                onMouseEnter={() => setHoveredBrand(brand.name)}
                onMouseLeave={() => setHoveredBrand(null)}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${brand.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <img
                      src={brand.logo || "/placeholder.svg"}
                      alt={brand.name}
                      className="w-10 h-10 object-contain filter brightness-0 invert"
                    />
                  </div>

                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {brand.name}
                  </h3>

                  <p className="text-sm text-gray-600 mb-1">{brand.models} Models</p>

                  <p className="text-sm font-semibold text-gray-800">Starting {brand.startingPrice}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

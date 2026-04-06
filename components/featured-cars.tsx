"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Fuel, Users, Settings, Heart, Eye } from "lucide-react"
import Link from "next/link"

const featuredCars = [
  {
    id: 1,
    name: "Hyundai Creta",
    price: "₹10.87 - 18.73 Lakh",
    rating: 4.5,
    reviews: 1250,
    image: "/placeholder.svg?height=200&width=300",
    fuel: "Petrol/Diesel",
    seating: "5 Seater",
    transmission: "Manual/Automatic",
    badge: "Popular",
    badgeColor: "bg-red-500",
  },
  {
    id: 2,
    name: "Maruti Suzuki Swift",
    price: "₹5.85 - 8.67 Lakh",
    rating: 4.3,
    reviews: 2100,
    image: "/placeholder.svg?height=200&width=300",
    fuel: "Petrol/CNG",
    seating: "5 Seater",
    transmission: "Manual/AMT",
    badge: "Best Seller",
    badgeColor: "bg-green-500",
  },
  {
    id: 3,
    name: "Tata Nexon",
    price: "₹7.60 - 14.08 Lakh",
    rating: 4.4,
    reviews: 980,
    image: "/placeholder.svg?height=200&width=300",
    fuel: "Petrol/Diesel/Electric",
    seating: "5 Seater",
    transmission: "Manual/AMT",
    badge: "Electric Available",
    badgeColor: "bg-blue-500",
  },
  {
    id: 4,
    name: "Mahindra Thar",
    price: "₹13.59 - 16.78 Lakh",
    rating: 4.6,
    reviews: 750,
    image: "/placeholder.svg?height=200&width=300",
    fuel: "Petrol/Diesel",
    seating: "4 Seater",
    transmission: "Manual/Automatic",
    badge: "Adventure",
    badgeColor: "bg-orange-500",
  },
]

export function FeaturedCars() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Cars</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the most popular and trending cars chosen by thousands of customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredCars.map((car, index) => (
            <Card
              key={car.id}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50 ${
                hoveredCard === car.id ? "transform scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredCard(car.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={car.image || "/placeholder.svg"}
                    alt={car.name}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <Badge className={`absolute top-3 left-3 ${car.badgeColor} text-white border-0`}>{car.badge}</Badge>
                  <div className="absolute top-3 right-3 flex space-x-2">
                    <Button
                      size="icon"
                      variant="secondary"
                      className="w-8 h-8 bg-white/80 backdrop-blur-sm hover:bg-white"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button
                      size="icon"
                      variant="secondary"
                      className="w-8 h-8 bg-white/80 backdrop-blur-sm hover:bg-white"
                    >
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                    {car.name}
                  </h3>

                  <div className="flex items-center mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(car.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">
                      {car.rating} ({car.reviews} reviews)
                    </span>
                  </div>

                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Fuel className="w-4 h-4 mr-2" />
                      {car.fuel}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2" />
                      {car.seating}
                    </div>
                    <div className="flex items-center">
                      <Settings className="w-4 h-4 mr-2" />
                      {car.transmission}
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-lg font-bold text-gray-900">{car.price}</p>
                      <p className="text-sm text-gray-500">Ex-showroom price</p>
                    </div>
                  </div>

                  <div className="mt-4 space-y-2">
                    <Link href={`/cars/${car.id}`}>
                      <Button className="w-full bg-red-600 hover:bg-red-700 text-white">View Details</Button>
                    </Link>
                    <Button variant="outline" className="w-full">
                      Compare
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/cars">
            <Button size="lg" variant="outline" className="px-8">
              View All Cars
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

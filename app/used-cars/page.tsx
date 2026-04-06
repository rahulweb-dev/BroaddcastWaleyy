"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Fuel, Settings, MapPin, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { UsedCarFilters } from "@/components/used-car-filters"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface UsedCar {
  id: number
  name: string
  year: number
  price: number
  originalPrice: number
  image: string
  kmDriven: number
  fuelType: string
  transmission: string
  location: string
  owner: string
  rating: number
  isAbSure: boolean
  postedDate: string
  views: number
}

const usedCars: UsedCar[] = [
  {
    id: 1,
    name: "Maruti Suzuki Swift VDI",
    year: 2019,
    price: 6.25,
    originalPrice: 8.5,
    image: "/placeholder.svg?height=200&width=300",
    kmDriven: 45000,
    fuelType: "Diesel",
    transmission: "Manual",
    location: "Mumbai, Maharashtra",
    owner: "1st Owner",
    rating: 4.2,
    isAbSure: true,
    postedDate: "2 days ago",
    views: 156,
  },
  {
    id: 2,
    name: "Hyundai Creta SX",
    year: 2020,
    price: 12.5,
    originalPrice: 16.8,
    image: "/placeholder.svg?height=200&width=300",
    kmDriven: 32000,
    fuelType: "Petrol",
    transmission: "Automatic",
    location: "Delhi, NCR",
    owner: "1st Owner",
    rating: 4.4,
    isAbSure: true,
    postedDate: "1 day ago",
    views: 234,
  },
  {
    id: 3,
    name: "Honda City ZX CVT",
    year: 2018,
    price: 8.75,
    originalPrice: 12.5,
    image: "/placeholder.svg?height=200&width=300",
    kmDriven: 58000,
    fuelType: "Petrol",
    transmission: "CVT",
    location: "Bangalore, Karnataka",
    owner: "2nd Owner",
    rating: 4.1,
    isAbSure: false,
    postedDate: "3 days ago",
    views: 89,
  },
  {
    id: 4,
    name: "Tata Nexon XZ Plus",
    year: 2021,
    price: 9.8,
    originalPrice: 13.2,
    image: "/placeholder.svg?height=200&width=300",
    kmDriven: 25000,
    fuelType: "Petrol",
    transmission: "AMT",
    location: "Pune, Maharashtra",
    owner: "1st Owner",
    rating: 4.3,
    isAbSure: true,
    postedDate: "1 week ago",
    views: 178,
  },
]

export default function UsedCarsPage() {
  const [sortBy, setSortBy] = useState("relevance")
  const [location, setLocation] = useState("")

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Used Cars</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
        <Link href="/used-cars/explore" className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
          <div className="text-2xl mb-2">🔍</div>
          <span className="text-sm font-medium">Explore Used Cars</span>
        </Link>
        <Link href="/used-cars/absure" className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
          <div className="text-2xl mb-2">✅</div>
          <span className="text-sm font-medium">CarWale abSure</span>
        </Link>
        <Link
          href="/used-cars/valuation"
          className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow"
        >
          <div className="text-2xl mb-2">💰</div>
          <span className="text-sm font-medium">Check Car Valuation</span>
        </Link>
        <Link href="/used-cars/sell" className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
          <div className="text-2xl mb-2">🚗</div>
          <span className="text-sm font-medium">Sell Your Car</span>
        </Link>
        <Link href="/used-cars/loan" className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
          <div className="text-2xl mb-2">🏦</div>
          <span className="text-sm font-medium">Used Car Loan</span>
        </Link>
        <Link href="/used-cars/dealers" className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow">
          <div className="text-2xl mb-2">📍</div>
          <span className="text-sm font-medium">Find Dealers</span>
        </Link>
        <Link
          href="/used-cars/my-listings"
          className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow"
        >
          <div className="text-2xl mb-2">📋</div>
          <span className="text-sm font-medium">My Listings</span>
        </Link>
        <Link
          href="/used-cars/inspection"
          className="text-center p-4 border rounded-lg hover:shadow-md transition-shadow"
        >
          <div className="text-2xl mb-2">🔧</div>
          <span className="text-sm font-medium">Car Inspection</span>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        <aside className="lg:w-1/4">
          <UsedCarFilters />
        </aside>

        <main className="lg:w-3/4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Used Cars</h1>
              <p className="text-gray-600">{usedCars.length} cars found</p>
            </div>

            <div className="flex items-center space-x-4">
              <Input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-48"
              />
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevance</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="year-new">Year: Newest First</SelectItem>
                  <SelectItem value="km-low">KM: Low to High</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {usedCars.map((car) => (
              <Card key={car.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={car.image || "/placeholder.svg"}
                    alt={car.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  {car.isAbSure && (
                    <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 rounded text-xs font-medium">
                      abSure
                    </div>
                  )}
                  <div className="absolute top-2 right-2 bg-white rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{car.rating}</span>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-50 text-white px-2 py-1 rounded text-xs">
                    <Eye className="w-3 h-3 inline mr-1" />
                    {car.views}
                  </div>
                </div>

                <CardContent className="p-4">
                  <div className="mb-2">
                    <h3 className="font-semibold text-lg">{car.name}</h3>
                    <p className="text-sm text-gray-500">
                      {car.year} • {car.owner}
                    </p>
                  </div>

                  <div className="mb-3">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-green-600">₹{car.price} L</span>
                      <span className="text-sm text-gray-500 line-through">₹{car.originalPrice} L</span>
                    </div>
                    <p className="text-xs text-gray-500">
                      EMI starts at ₹{Math.round((car.price * 100000) / 60 / 1000)}k
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Fuel className="w-4 h-4" />
                      <span>{car.fuelType}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Settings className="w-4 h-4" />
                      <span>{car.transmission}</span>
                    </div>
                    <div>{car.kmDriven.toLocaleString()} km</div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-3 h-3" />
                      <span className="truncate">{car.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <span>Posted {car.postedDate}</span>
                  </div>

                  <div className="flex space-x-2">
                    <Button asChild variant="outline" className="flex-1">
                      <Link href={`/used-cars/${car.id}`}>View Details</Link>
                    </Button>
                    <Button className="flex-1">Contact Seller</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>
      </div>
    </div>
  )
}

"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { Star, Fuel, Settings, Heart, ArrowUpDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { carsDatabase } from "@/lib/cars-database"
import type { FilterState } from "@/app/cars/page"

interface CarGridProps {
  filters: FilterState
}

export function CarGrid({ filters }: CarGridProps) {
  const [sortBy, setSortBy] = useState("popularity")

  // Filter cars based on active filters including search
  const filteredCars = useMemo(() => {
    return carsDatabase.filter((car) => {
      // Search filter
      if (filters.searchQuery) {
        const searchTerm = filters.searchQuery.toLowerCase()
        const nameMatch = car.name.toLowerCase().includes(searchTerm)
        const brandMatch = car.brand.toLowerCase().includes(searchTerm)
        const modelMatch = car.model.toLowerCase().includes(searchTerm)
        const keywordMatch = car.keywords.some(
          (keyword) => keyword.toLowerCase().includes(searchTerm) || searchTerm.includes(keyword.toLowerCase()),
        )

        if (!nameMatch && !brandMatch && !modelMatch && !keywordMatch) {
          return false
        }
      }

      // Price filter
      if (car.priceRange.min < filters.priceRange[0] || car.priceRange.min > filters.priceRange[1]) {
        return false
      }

      // Brand filter
      if (filters.selectedBrands.length > 0 && !filters.selectedBrands.includes(car.brand)) {
        return false
      }

      // Body type filter
      if (filters.selectedBodyTypes.length > 0 && !filters.selectedBodyTypes.includes(car.bodyType)) {
        return false
      }

      // Fuel type filter
      if (filters.selectedFuelTypes.length > 0) {
        const carFuelTypes = car.variants.map((v) => v.fuelType)
        if (!filters.selectedFuelTypes.some((fuel) => carFuelTypes.includes(fuel))) {
          return false
        }
      }

      // Transmission filter
      if (filters.selectedTransmissions.length > 0) {
        const carTransmissions = car.variants.map((v) => v.transmission)
        if (!filters.selectedTransmissions.some((trans) => carTransmissions.includes(trans))) {
          return false
        }
      }

      // Segment filter
      if (
        filters.selectedSegments &&
        filters.selectedSegments.length > 0 &&
        !filters.selectedSegments.includes(car.segment)
      ) {
        return false
      }

      return true
    })
  }, [filters])

  // Sort filtered cars
  const sortedCars = useMemo(() => {
    const sorted = [...filteredCars]

    switch (sortBy) {
      case "price-low":
        return sorted.sort((a, b) => a.priceRange.min - b.priceRange.min)
      case "price-high":
        return sorted.sort((a, b) => b.priceRange.min - a.priceRange.min)
      case "rating":
        return sorted.sort((a, b) => b.rating - a.rating)
      case "mileage":
        const getMileage = (car: any) => {
          const mileageStr = car.variants[0]?.mileage || "0 kmpl"
          return Number.parseFloat(mileageStr.replace(/[^\d.]/g, ""))
        }
        return sorted.sort((a, b) => getMileage(b) - getMileage(a))
      case "popularity":
      default:
        return sorted.sort((a, b) => b.reviews - a.reviews)
    }
  }, [filteredCars, sortBy])

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{filters.searchQuery ? `Search Results` : "All Cars"}</h1>
          <p className="text-gray-600">
            {sortedCars.length} car{sortedCars.length !== 1 ? "s" : ""} found
            {filteredCars.length !== carsDatabase.length && (
              <span className="text-blue-600 ml-1">(filtered from {carsDatabase.length} total)</span>
            )}
          </p>
        </div>

        <div className="flex items-center space-x-4">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popularity">Popularity</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
              <SelectItem value="rating">Rating</SelectItem>
              <SelectItem value="mileage">Mileage</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {sortedCars.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Settings className="w-16 h-16 mx-auto mb-4" />
          </div>
          <h3 className="text-xl font-semibold text-gray-600 mb-2">
            {filters.searchQuery ? `No cars found for "${filters.searchQuery}"` : "No cars found"}
          </h3>
          <p className="text-gray-500">
            {filters.searchQuery
              ? "Try searching with different keywords or check the spelling"
              : "Try adjusting your filters to see more results"}
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedCars.map((car) => (
              <Card key={car.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <Image
                    src="/placeholder.svg?height=200&width=300"
                    alt={car.name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=200&width=300"
                    }}
                  />
                  <div className="absolute top-2 right-2 flex space-x-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button
                      size="sm"
                      variant="secondary"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ArrowUpDown className="w-4 h-4" />
                    </Button>
                  </div>
                  <div className="absolute bottom-2 left-2 bg-white rounded-full px-2 py-1 flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{car.rating}</span>
                    <span className="text-xs text-gray-500">({car.reviews})</span>
                  </div>
                  {car.isPopular && (
                    <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs font-medium">
                      Popular
                    </div>
                  )}
                </div>

                <CardContent className="p-4">
                  <div className="mb-2">
                    <span className="text-xs text-gray-500 uppercase tracking-wide">{car.brand}</span>
                    <h3 className="font-semibold text-lg">{car.name}</h3>
                    <span className="text-xs text-blue-600">{car.segment}</span>
                  </div>

                  <p className="text-red-600 font-bold text-xl mb-3">{car.priceDisplay}</p>

                  <div className="grid grid-cols-2 gap-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-1">
                      <Fuel className="w-4 h-4" />
                      <span>{car.variants[0]?.fuelType}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Settings className="w-4 h-4" />
                      <span>{car.variants[0]?.transmission}</span>
                    </div>
                    <div>Mileage: {car.variants[0]?.mileage}</div>
                    <div>{car.bodyType}</div>
                  </div>

                  <div className="flex space-x-2">
                    <Button asChild variant="outline" className="flex-1">
                      <Link href={`/cars/${car.id}`}>View Details</Link>
                    </Button>
                    <Button className="flex-1">Get Quote</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {sortedCars.length >= 12 && (
            <div className="flex justify-center mt-8">
              <Button variant="outline" size="lg">
                Load More Cars
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}

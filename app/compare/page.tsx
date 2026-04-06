"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus, X, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const availableCars = [
  {
    id: 1,
    name: "Maruti Suzuki Swift",
    price: "₹5.85 - 8.67 Lakh",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.2,
    mileage: "23.2 kmpl",
    engine: "1197 cc",
    fuelType: "Petrol",
    transmission: "Manual/AMT",
  },
  {
    id: 2,
    name: "Hyundai Grand i10 Nios",
    price: "₹5.92 - 8.75 Lakh",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.1,
    mileage: "20.7 kmpl",
    engine: "1197 cc",
    fuelType: "Petrol",
    transmission: "Manual/AMT",
  },
  {
    id: 3,
    name: "Tata Altroz",
    price: "₹6.60 - 10.74 Lakh",
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.0,
    mileage: "25.11 kmpl",
    engine: "1199 cc",
    fuelType: "Petrol",
    transmission: "Manual",
  },
]

export default function ComparePage() {
  const [selectedCars, setSelectedCars] = useState<typeof availableCars>([])
  const [searchTerm, setSearchTerm] = useState("")

  const addCarToCompare = (car: (typeof availableCars)[0]) => {
    if (selectedCars.length < 3 && !selectedCars.find((c) => c.id === car.id)) {
      setSelectedCars([...selectedCars, car])
    }
  }

  const removeCarFromCompare = (carId: number) => {
    setSelectedCars(selectedCars.filter((car) => car.id !== carId))
  }

  const filteredCars = availableCars.filter(
    (car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()) && !selectedCars.find((c) => c.id === car.id),
  )

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Compare Cars</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Compare Cars</h1>
        <p className="text-gray-600">Compare up to 3 cars side by side to make the best choice</p>
      </div>

      {/* Selected Cars for Comparison */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {[0, 1, 2].map((index) => (
          <Card key={index} className="min-h-96">
            {selectedCars[index] ? (
              <div>
                <div className="relative">
                  <Image
                    src={selectedCars[index].image || "/placeholder.svg"}
                    alt={selectedCars[index].name}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Button
                    size="sm"
                    variant="destructive"
                    className="absolute top-2 right-2"
                    onClick={() => removeCarFromCompare(selectedCars[index].id)}
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-lg mb-2">{selectedCars[index].name}</h3>
                  <p className="text-red-600 font-bold text-xl mb-4">{selectedCars[index].price}</p>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Rating:</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span>{selectedCars[index].rating}</span>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span>Mileage:</span>
                      <span>{selectedCars[index].mileage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Engine:</span>
                      <span>{selectedCars[index].engine}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Fuel Type:</span>
                      <span>{selectedCars[index].fuelType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Transmission:</span>
                      <span>{selectedCars[index].transmission}</span>
                    </div>
                  </div>
                </CardContent>
              </div>
            ) : (
              <CardContent className="p-6 flex flex-col items-center justify-center h-96 border-2 border-dashed border-gray-300">
                <Plus className="w-12 h-12 text-gray-400 mb-4" />
                <p className="text-gray-500 text-center">Add a car to compare</p>
              </CardContent>
            )}
          </Card>
        ))}
      </div>

      {selectedCars.length > 1 && (
        <div className="mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2">Specification</th>
                      {selectedCars.map((car) => (
                        <th key={car.id} className="text-center py-2">
                          {car.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Price</td>
                      {selectedCars.map((car) => (
                        <td key={car.id} className="text-center py-2">
                          {car.price}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Rating</td>
                      {selectedCars.map((car) => (
                        <td key={car.id} className="text-center py-2">
                          <div className="flex items-center justify-center space-x-1">
                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                            <span>{car.rating}</span>
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Mileage</td>
                      {selectedCars.map((car) => (
                        <td key={car.id} className="text-center py-2">
                          {car.mileage}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Engine</td>
                      {selectedCars.map((car) => (
                        <td key={car.id} className="text-center py-2">
                          {car.engine}
                        </td>
                      ))}
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 font-medium">Fuel Type</td>
                      {selectedCars.map((car) => (
                        <td key={car.id} className="text-center py-2">
                          {car.fuelType}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="py-2 font-medium">Transmission</td>
                      {selectedCars.map((car) => (
                        <td key={car.id} className="text-center py-2">
                          {car.transmission}
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Add Cars Section */}
      <Card>
        <CardHeader>
          <CardTitle>Add Cars to Compare</CardTitle>
          <div className="w-full max-w-md">
            <Input
              type="text"
              placeholder="Search cars..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredCars.map((car) => (
              <Card key={car.id} className="cursor-pointer hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={car.image || "/placeholder.svg"}
                    alt={car.name}
                    width={300}
                    height={150}
                    className="w-full h-32 object-cover rounded-t-lg"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1">{car.name}</h3>
                  <p className="text-red-600 font-bold mb-2">{car.price}</p>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm">{car.rating}</span>
                    </div>
                    <span className="text-sm text-gray-600">{car.mileage}</span>
                  </div>
                  <Button
                    onClick={() => addCarToCompare(car)}
                    disabled={selectedCars.length >= 3}
                    className="w-full"
                    size="sm"
                  >
                    Add to Compare
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

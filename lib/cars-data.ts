export interface CarData {
  id: number
  name: string
  brand: string
  model: string
  slug: string
  price: string
  priceNumeric: number
  image: string
  rating: number
  reviews: number
  fuelType: string
  transmission: string
  mileage: string
  bodyType: string
  keywords: string[]
}

export const carsDatabase: CarData[] = [
  {
    id: 1,
    name: "Maruti Suzuki Swift",
    brand: "Maruti Suzuki",
    model: "Swift",
    slug: "maruti-suzuki-swift",
    price: "₹5.85 - 8.67 Lakh",
    priceNumeric: 5.85,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.2,
    reviews: 1250,
    fuelType: "Petrol",
    transmission: "Manual",
    mileage: "23.2 kmpl",
    bodyType: "Hatchback",
    keywords: ["swift", "maruti", "suzuki", "hatchback", "petrol", "manual"],
  },
  {
    id: 2,
    name: "Hyundai Creta",
    brand: "Hyundai",
    model: "Creta",
    slug: "hyundai-creta",
    price: "₹10.87 - 18.73 Lakh",
    priceNumeric: 10.87,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.4,
    reviews: 890,
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: "17.4 kmpl",
    bodyType: "SUV",
    keywords: ["creta", "hyundai", "suv", "petrol", "automatic"],
  },
  {
    id: 3,
    name: "Tata Nexon",
    brand: "Tata",
    model: "Nexon",
    slug: "tata-nexon",
    price: "₹7.60 - 14.08 Lakh",
    priceNumeric: 7.6,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.1,
    reviews: 2100,
    fuelType: "Petrol",
    transmission: "Manual",
    mileage: "17.57 kmpl",
    bodyType: "SUV",
    keywords: ["nexon", "tata", "suv", "petrol", "manual"],
  },
  {
    id: 4,
    name: "Honda City",
    brand: "Honda",
    model: "City",
    slug: "honda-city",
    price: "₹11.82 - 16.35 Lakh",
    priceNumeric: 11.82,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.3,
    reviews: 750,
    fuelType: "Petrol",
    transmission: "CVT",
    mileage: "17.8 kmpl",
    bodyType: "Sedan",
    keywords: ["city", "honda", "sedan", "petrol", "cvt"],
  },
  {
    id: 5,
    name: "Mahindra XUV700",
    brand: "Mahindra",
    model: "XUV700",
    slug: "mahindra-xuv700",
    price: "₹13.45 - 25.15 Lakh",
    priceNumeric: 13.45,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
    reviews: 650,
    fuelType: "Petrol",
    transmission: "Automatic",
    mileage: "13 kmpl",
    bodyType: "SUV",
    keywords: ["xuv700", "mahindra", "suv", "petrol", "automatic"],
  },
  {
    id: 6,
    name: "Toyota Innova Crysta",
    brand: "Toyota",
    model: "Innova Crysta",
    slug: "toyota-innova-crysta",
    price: "₹17.86 - 26.55 Lakh",
    priceNumeric: 17.86,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.4,
    reviews: 420,
    fuelType: "Diesel",
    transmission: "Manual",
    mileage: "15.6 kmpl",
    bodyType: "MUV",
    keywords: ["innova", "crysta", "toyota", "muv", "diesel", "manual"],
  },
  {
    id: 7,
    name: "Hyundai i20",
    brand: "Hyundai",
    model: "i20",
    slug: "hyundai-i20",
    price: "₹7.04 - 11.21 Lakh",
    priceNumeric: 7.04,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.0,
    reviews: 980,
    fuelType: "Petrol",
    transmission: "Manual",
    mileage: "20.35 kmpl",
    bodyType: "Hatchback",
    keywords: ["i20", "hyundai", "hatchback", "petrol", "manual"],
  },
  {
    id: 8,
    name: "Tata Harrier",
    brand: "Tata",
    model: "Harrier",
    slug: "tata-harrier",
    price: "₹14.69 - 22.69 Lakh",
    priceNumeric: 14.69,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.2,
    reviews: 560,
    fuelType: "Diesel",
    transmission: "Automatic",
    mileage: "16.35 kmpl",
    bodyType: "SUV",
    keywords: ["harrier", "tata", "suv", "diesel", "automatic"],
  },
  {
    id: 9,
    name: "Kia Seltos",
    brand: "Kia",
    model: "Seltos",
    slug: "kia-seltos",
    price: "₹10.90 - 18.45 Lakh",
    priceNumeric: 10.9,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.3,
    reviews: 720,
    fuelType: "Petrol",
    transmission: "AMT",
    mileage: "16.8 kmpl",
    bodyType: "SUV",
    keywords: ["seltos", "kia", "suv", "petrol", "amt"],
  },
  {
    id: 10,
    name: "Volkswagen Polo",
    brand: "Volkswagen",
    model: "Polo",
    slug: "volkswagen-polo",
    price: "₹6.79 - 10.99 Lakh",
    priceNumeric: 6.79,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.1,
    reviews: 430,
    fuelType: "Petrol",
    transmission: "Manual",
    mileage: "18.24 kmpl",
    bodyType: "Hatchback",
    keywords: ["polo", "volkswagen", "hatchback", "petrol", "manual"],
  },
  {
    id: 11,
    name: "Mahindra Thar",
    brand: "Mahindra",
    model: "Thar",
    slug: "mahindra-thar",
    price: "₹13.53 - 16.78 Lakh",
    priceNumeric: 13.53,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.6,
    reviews: 890,
    fuelType: "Petrol",
    transmission: "Manual",
    mileage: "15.2 kmpl",
    bodyType: "SUV",
    keywords: ["thar", "mahindra", "suv", "petrol", "manual", "offroad"],
  },
  {
    id: 12,
    name: "Honda Amaze",
    brand: "Honda",
    model: "Amaze",
    slug: "honda-amaze",
    price: "₹6.32 - 9.96 Lakh",
    priceNumeric: 6.32,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.0,
    reviews: 650,
    fuelType: "Petrol",
    transmission: "CVT",
    mileage: "18.3 kmpl",
    bodyType: "Sedan",
    keywords: ["amaze", "honda", "sedan", "petrol", "cvt"],
  },
  {
    id: 13,
    name: "Maruti Suzuki Baleno",
    brand: "Maruti Suzuki",
    model: "Baleno",
    slug: "maruti-suzuki-baleno",
    price: "₹6.35 - 9.69 Lakh",
    priceNumeric: 6.35,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.1,
    reviews: 1100,
    fuelType: "Petrol",
    transmission: "Manual",
    mileage: "22.35 kmpl",
    bodyType: "Hatchback",
    keywords: ["baleno", "maruti", "suzuki", "hatchback", "petrol", "manual"],
  },
  {
    id: 14,
    name: "Tata Altroz",
    brand: "Tata",
    model: "Altroz",
    slug: "tata-altroz",
    price: "₹6.60 - 10.74 Lakh",
    priceNumeric: 6.6,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.0,
    reviews: 780,
    fuelType: "Petrol",
    transmission: "Manual",
    mileage: "25.11 kmpl",
    bodyType: "Hatchback",
    keywords: ["altroz", "tata", "hatchbook", "petrol", "manual"],
  },
  {
    id: 15,
    name: "Hyundai Venue",
    brand: "Hyundai",
    model: "Venue",
    slug: "hyundai-venue",
    price: "₹7.94 - 12.72 Lakh",
    priceNumeric: 7.94,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.2,
    reviews: 650,
    fuelType: "Petrol",
    transmission: "Manual",
    mileage: "18.15 kmpl",
    bodyType: "SUV",
    keywords: ["venue", "hyundai", "suv", "petrol", "manual"],
  },
  {
    id: 16,
    name: "Maruti Suzuki Dzire",
    brand: "Maruti Suzuki",
    model: "Dzire",
    slug: "maruti-suzuki-dzire",
    price: "₹6.57 - 9.39 Lakh",
    priceNumeric: 6.57,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.3,
    reviews: 1400,
    fuelType: "Petrol",
    transmission: "Manual",
    mileage: "24.12 kmpl",
    bodyType: "Sedan",
    keywords: ["dzire", "maruti", "suzuki", "sedan", "petrol", "manual"],
  },
  {
    id: 17,
    name: "Mahindra Scorpio",
    brand: "Mahindra",
    model: "Scorpio",
    slug: "mahindra-scorpio",
    price: "₹13.62 - 17.42 Lakh",
    priceNumeric: 13.62,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.1,
    reviews: 920,
    fuelType: "Diesel",
    transmission: "Manual",
    mileage: "15.4 kmpl",
    bodyType: "SUV",
    keywords: ["scorpio", "mahindra", "suv", "diesel", "manual"],
  },
  {
    id: 18,
    name: "Toyota Fortuner",
    brand: "Toyota",
    model: "Fortuner",
    slug: "toyota-fortuner",
    price: "₹32.59 - 50.34 Lakh",
    priceNumeric: 32.59,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.5,
    reviews: 340,
    fuelType: "Diesel",
    transmission: "Automatic",
    mileage: "14.4 kmpl",
    bodyType: "SUV",
    keywords: ["fortuner", "toyota", "suv", "diesel", "automatic", "premium"],
  },
  {
    id: 19,
    name: "Kia Sonet",
    brand: "Kia",
    model: "Sonet",
    slug: "kia-sonet",
    price: "₹7.15 - 13.99 Lakh",
    priceNumeric: 7.15,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.2,
    reviews: 580,
    fuelType: "Petrol",
    transmission: "Manual",
    mileage: "18.4 kmpl",
    bodyType: "SUV",
    keywords: ["sonet", "kia", "suv", "petrol", "manual"],
  },
  {
    id: 20,
    name: "Honda Jazz",
    brand: "Honda",
    model: "Jazz",
    slug: "honda-jazz",
    price: "₹7.99 - 10.87 Lakh",
    priceNumeric: 7.99,
    image: "/placeholder.svg?height=200&width=300",
    rating: 4.0,
    reviews: 420,
    fuelType: "Petrol",
    transmission: "CVT",
    mileage: "17.1 kmpl",
    bodyType: "Hatchback",
    keywords: ["jazz", "honda", "hatchback", "petrol", "cvt"],
  },
]

export function searchCars(query: string): CarData[] {
  if (!query || query.length < 2) return []

  const searchTerm = query.toLowerCase().trim()

  return carsDatabase
    .filter((car) => {
      // Check if search term matches car name, brand, model, or keywords
      const nameMatch = car.name.toLowerCase().includes(searchTerm)
      const brandMatch = car.brand.toLowerCase().includes(searchTerm)
      const modelMatch = car.model.toLowerCase().includes(searchTerm)
      const keywordMatch = car.keywords.some(
        (keyword) => keyword.toLowerCase().includes(searchTerm) || searchTerm.includes(keyword.toLowerCase()),
      )

      return nameMatch || brandMatch || modelMatch || keywordMatch
    })
    .slice(0, 5) // Limit to top 5 results
}

export function findExactCarMatch(query: string): CarData | null {
  if (!query || query.length < 2) return null

  const searchTerm = query.toLowerCase().trim()

  // First try exact name match
  let exactMatch = carsDatabase.find(
    (car) =>
      car.name.toLowerCase() === searchTerm ||
      car.model.toLowerCase() === searchTerm ||
      `${car.brand.toLowerCase()} ${car.model.toLowerCase()}` === searchTerm,
  )

  if (exactMatch) return exactMatch

  // Then try partial but strong matches
  exactMatch = carsDatabase.find((car) => {
    const carFullName = `${car.brand} ${car.model}`.toLowerCase()
    const modelName = car.model.toLowerCase()

    // Check if search term strongly matches
    return (
      (modelName.includes(searchTerm) && searchTerm.length >= 3) ||
      (carFullName.includes(searchTerm) && searchTerm.length >= 4) ||
      car.keywords.some((keyword) => keyword.toLowerCase() === searchTerm)
    )
  })

  return exactMatch || null
}

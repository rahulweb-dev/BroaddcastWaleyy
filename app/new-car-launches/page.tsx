import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { BuyerTools } from "@/components/buyer-tools"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

interface CarLaunch {
  id: number
  name: string
  image: string
  price: string
  priceValue: string
  launchDate: string
  launchDateFormatted: string
  showroomPrice: string
}

const carLaunches: CarLaunch[] = [
  {
    id: 1,
    name: "Tata Harrier EV",
    image: "/placeholder.svg?height=200&width=300",
    price: "Rs. 21.49 Lakh",
    priceValue: "onwards",
    launchDate: "3rd Jun",
    launchDateFormatted: "3 Jun 2024",
    showroomPrice: "Avg. Ex-Showroom price",
  },
  {
    id: 2,
    name: "Volkswagen Golf GTI",
    image: "/placeholder.svg?height=200&width=300",
    price: "Rs. 53.00 Lakh",
    priceValue: "onwards",
    launchDate: "20th May",
    launchDateFormatted: "20 May 2024",
    showroomPrice: "Avg. Ex-Showroom price",
  },
  {
    id: 3,
    name: "Kia Carens Clavis",
    image: "/placeholder.svg?height=200&width=300",
    price: "Rs. 11.50 Lakh",
    priceValue: "onwards",
    launchDate: "23rd May",
    launchDateFormatted: "23 May 2024",
    showroomPrice: "Avg. Ex-Showroom price",
  },
  {
    id: 4,
    name: "Tata Altroz",
    image: "/placeholder.svg?height=200&width=300",
    price: "Rs. 6.89 Lakh",
    priceValue: "onwards",
    launchDate: "22nd May",
    launchDateFormatted: "22 May 2024",
    showroomPrice: "Avg. Ex-Showroom price",
  },
  {
    id: 5,
    name: "Lamborghini Temerario",
    image: "/placeholder.svg?height=200&width=300",
    price: "Rs. 6.00 Crore",
    priceValue: "onwards",
    launchDate: "15th May",
    launchDateFormatted: "15 May 2024",
    showroomPrice: "Avg. Ex-Showroom price",
  },
  {
    id: 6,
    name: "Skoda Kodiaq",
    image: "/placeholder.svg?height=200&width=300",
    price: "Rs. 38.50 Lakh",
    priceValue: "onwards",
    launchDate: "10th May",
    launchDateFormatted: "10 May 2024",
    showroomPrice: "Avg. Ex-Showroom price",
  },
]

export default function NewCarLaunchesPage() {
  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>New Car Launches</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-3/4">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">New Car Launches</h1>
            <p className="text-gray-600">
              Stay updated with new car launches, comprehensive car reviews, latest car news, expert advice and much
              more on our website. The list of new car launches in 2024 includes Tata Harrier EV (Rs. 21.49 Lakh) and
              Volkswagen Golf GTI (Rs. 53.00 Lakh). Get latest information about 58 new cars.
            </p>
            <div className="mt-2">
              <Button variant="link" className="p-0 h-auto text-red-600">
                Read More
              </Button>
            </div>
          </div>

          <div className="mb-6">
            <RadioGroup defaultValue="english" className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="english" id="english" />
                <Label htmlFor="english">Continue in English</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="hindi" id="hindi" />
                <Label htmlFor="hindi">हिंदी में</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-6">
            {carLaunches.map((car) => (
              <Card key={car.id} className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="relative md:w-1/3">
                    <div className="absolute top-4 left-4 bg-orange-100 text-orange-800 px-2 py-1 rounded text-xs font-medium">
                      Launched On {car.launchDate}
                    </div>
                    <Image
                      src={car.image || "/placeholder.svg"}
                      alt={car.name}
                      width={300}
                      height={200}
                      className="w-full h-48 md:h-full object-cover"
                    />
                  </div>
                  <div className="p-6 md:w-2/3">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-lg">
                        <Link href={`/cars/${car.id}`} className="hover:text-red-600 flex items-center">
                          {car.name} <ChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                      </h3>
                    </div>
                    <div className="mb-4">
                      <div className="font-bold text-xl">
                        {car.price} <span className="text-sm font-normal text-gray-500">{car.priceValue}</span>
                      </div>
                      <div className="text-sm text-gray-500">{car.showroomPrice}</div>
                    </div>
                    <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                      Get Best Offer
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="lg:w-1/4">
          <BuyerTools />

          <div className="mt-8 bg-gray-100 p-4 rounded-lg">
            <div className="bg-gray-800 text-white p-4 rounded-t-lg">
              <h3 className="font-semibold">Buying a New Car?</h3>
              <p className="text-sm">Ask the Experts</p>
            </div>
            <div className="bg-white p-4 rounded-b-lg">
              <p className="font-bold text-lg">08068441441</p>
              <p className="text-xs text-gray-500">(Toll free)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

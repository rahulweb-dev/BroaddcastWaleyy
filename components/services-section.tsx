"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Car, Calculator, Shield, MapPin, FileText, Wrench, ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Car,
    title: "Buy New Cars",
    description: "Explore latest models with best prices and offers",
    link: "/cars",
  },
  {
    icon: Calculator,
    title: "EMI Calculator",
    description: "Calculate your car loan EMI easily",
    link: "/emi-calculator",
  },
  {
    icon: Shield,
    title: "Car Insurance",
    description: "Compare and buy car insurance online",
    link: "/insurance",
  },
  {
    icon: MapPin,
    title: "Find Dealers",
    description: "Locate dealers near your location",
    link: "/dealers",
  },
  {
    icon: FileText,
    title: "Car Reviews",
    description: "Read expert and user reviews",
    link: "/reviews",
  },
  {
    icon: Wrench,
    title: "Car Services",
    description: "Book service appointments online",
    link: "/services",
  },
]

export function ServicesSection() {
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">
            Our Services
          </h2>
          <p className="text-gray-600">
            Complete automotive solutions for your car needs
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <Card
                key={index}
                className="border hover:shadow-md transition cursor-pointer"
              >
                <CardContent className="p-5 text-center">

                  {/* Icon */}
                  <div className="flex justify-center mb-3">
                    <div className="bg-gray-100 p-3 rounded-lg">
                      <Icon className="w-6 h-6 text-gray-700" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-semibold mb-1">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-gray-500 mb-3">
                    {service.description}
                  </p>

                  {/* Link */}
                  <Link
                    href={service.link}
                    className="text-red-500 text-sm font-medium inline-flex items-center gap-1"
                  >
                    View
                    <ArrowRight className="w-3 h-3" />
                  </Link>

                </CardContent>
              </Card>
            )
          })}
        </div>

      </div>
    </section>
  )
}
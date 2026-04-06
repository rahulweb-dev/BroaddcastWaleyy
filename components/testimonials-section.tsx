"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Mumbai",
    rating: 5,
    text: "Found my dream car within a week! The platform is incredibly user-friendly and the dealer was very professional.",
    car: "Hyundai Creta",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    text: "Excellent service and transparent pricing. The EMI calculator helped me plan my budget perfectly.",
    car: "Maruti Swift",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 3,
    name: "Amit Patel",
    location: "Bangalore",
    rating: 4,
    text: "Great experience selling my old car. Got a fair price and the process was hassle-free.",
    car: "Honda City",
    image: "/placeholder.svg?height=60&width=60",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    location: "Chennai",
    rating: 5,
    text: "The comparison feature saved me so much time. Could easily compare different models and make an informed decision.",
    car: "Tata Nexon",
    image: "/placeholder.svg?height=60&width=60",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real experiences from real customers who found their perfect cars with us
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <Card className="bg-gray-800 border-gray-700">
                    <CardContent className="p-8 text-center">
                      <Quote className="w-12 h-12 text-red-500 mx-auto mb-6" />

                      <p className="text-lg text-gray-300 mb-6 leading-relaxed">"{testimonial.text}"</p>

                      <div className="flex justify-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating ? "text-yellow-400 fill-current" : "text-gray-600"
                            }`}
                          />
                        ))}
                      </div>

                      <div className="flex items-center justify-center space-x-4">
                        <img
                          src={testimonial.image || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div className="text-left">
                          <h4 className="font-semibold text-white">{testimonial.name}</h4>
                          <p className="text-sm text-gray-400">{testimonial.location}</p>
                          <p className="text-sm text-red-400">Bought: {testimonial.car}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            onClick={prevTestimonial}
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-gray-800 border-gray-600 hover:bg-gray-700"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            onClick={nextTestimonial}
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-gray-800 border-gray-600 hover:bg-gray-700"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-red-500 scale-125" : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useState } from "react"
import { TrendingUp, Users, Award, Car } from "lucide-react"

const stats = [
  {
    icon: Car,
    value: 50000,
    label: "Cars Listed",
    suffix: "+",
  },
  {
    icon: Users,
    value: 1000000,
    label: "Happy Customers",
    suffix: "+",
  },
  {
    icon: Award,
    value: 500,
    label: "Trusted Dealers",
    suffix: "+",
  },
  {
    icon: TrendingUp,
    value: 98,
    label: "Customer Satisfaction",
    suffix: "%",
  },
]

function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <span className="text-3xl md:text-4xl font-bold text-gray-900">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function StatsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Trusted by Millions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join the largest automotive community in India with verified dealers and satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="text-center group hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-red-600" />
                </div>
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                <p className="text-gray-600 mt-2 font-medium">{stat.label}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

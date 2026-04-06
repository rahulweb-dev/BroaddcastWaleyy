"use client"

import {
  IndianRupee,
  Car,
  Zap,
  Fuel,
  Leaf,
  Users,
  Settings,
  ChevronRight
} from "lucide-react"

export default function FindCarsSection() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-2xl font-semibold mb-6">
          Find The Cars Of Your Choice
        </h2>

        {/* Filter Box */}
        <div className="bg-gray-50 rounded-2xl p-6 border">

          {/* Budget */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-gray-700 font-medium mr-2">
              Budget
            </span>

            <FilterButton icon={IndianRupee} label="Under 5 Lakh" />
            <FilterButton icon={IndianRupee} label="Under 10 Lakh" />
            <FilterButton icon={IndianRupee} label="Under 15 Lakh" />

            <span className="mx-2 text-gray-300">|</span>

            <span className="text-gray-700 font-medium">
              Body Type
            </span>

            <FilterButton icon={Car} label="SUV" />
            <FilterButton icon={Car} label="Hatchback" />
            <FilterButton icon={Car} label="Sedan" />
          </div>

          {/* Fuel */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-gray-700 font-medium mr-2">
              Fuel Type & Others
            </span>

            <FilterButton icon={Zap} label="Electric" />
            <FilterButton icon={Leaf} label="Hybrid" />
            <FilterButton icon={Fuel} label="CNG" />
            <FilterButton icon={Users} label="7 Seater" />
            <FilterButton icon={Settings} label="Automatic" />
          </div>

        </div>

        {/* View More */}
        <div className="mt-4">
          <button className="flex items-center text-gray-700 font-medium hover:text-red-500">
            View More Filters
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>

      </div>
    </section>
  )
}


/* Reusable Button */

function FilterButton({ icon: Icon, label }) {
  return (
    <button className="flex items-center gap-2 border rounded-lg px-4 py-2 text-sm bg-white hover:shadow-sm hover:border-gray-400 transition">
      <Icon className="w-4 h-4 text-gray-600" />
      {label}
    </button>
  )
}
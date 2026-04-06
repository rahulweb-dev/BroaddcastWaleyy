"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Search, Star } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { carsDatabase, type CarData } from "@/lib/cars-database"

export function SearchDropdown() {
  const [query, setQuery] = useState("")
  const [suggestions, setSuggestions] = useState<CarData[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const router = useRouter()
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Enhanced search function
  const searchCars = (searchQuery: string): CarData[] => {
    if (!searchQuery || searchQuery.length < 2) return []

    const searchTerm = searchQuery.toLowerCase().trim()
    const results: { car: CarData; score: number }[] = []

    carsDatabase.forEach((car) => {
      let score = 0

      // Exact name match (highest priority)
      if (car.name.toLowerCase() === searchTerm) {
        score += 100
      }
      // Exact model match
      else if (car.model.toLowerCase() === searchTerm) {
        score += 90
      }
      // Exact brand match
      else if (car.brand.toLowerCase() === searchTerm) {
        score += 80
      }
      // Name contains search term
      else if (car.name.toLowerCase().includes(searchTerm)) {
        score += 70
      }
      // Model contains search term
      else if (car.model.toLowerCase().includes(searchTerm)) {
        score += 60
      }
      // Brand contains search term
      else if (car.brand.toLowerCase().includes(searchTerm)) {
        score += 50
      }
      // Keywords match
      else if (car.keywords.some((keyword) => keyword.toLowerCase().includes(searchTerm))) {
        score += 40
      }
      // Partial matches
      else if (
        car.name.toLowerCase().includes(searchTerm) ||
        car.brand.toLowerCase().includes(searchTerm) ||
        car.model.toLowerCase().includes(searchTerm) ||
        searchTerm.includes(car.model.toLowerCase()) ||
        car.keywords.some(
          (keyword) => keyword.toLowerCase().includes(searchTerm) || searchTerm.includes(keyword.toLowerCase()),
        )
      ) {
        score += 30
      }

      // Boost popular cars
      if (car.isPopular && score > 0) {
        score += 10
      }

      if (score > 0) {
        results.push({ car, score })
      }
    })

    // Sort by score and return top 8 results
    return results
      .sort((a, b) => b.score - a.score)
      .slice(0, 8)
      .map((result) => result.car)
  }

  // Find exact match for direct navigation
  const findExactCarMatch = (searchQuery: string): CarData | null => {
    if (!searchQuery || searchQuery.length < 2) return null

    const searchTerm = searchQuery.toLowerCase().trim()

    // Try exact matches first
    let exactMatch = carsDatabase.find(
      (car) =>
        car.name.toLowerCase() === searchTerm ||
        car.model.toLowerCase() === searchTerm ||
        `${car.brand.toLowerCase()} ${car.model.toLowerCase()}` === searchTerm ||
        car.keywords.some((keyword) => keyword.toLowerCase() === searchTerm),
    )

    if (exactMatch) return exactMatch

    // Try strong partial matches
    exactMatch = carsDatabase.find((car) => {
      const carFullName = `${car.brand} ${car.model}`.toLowerCase()
      const modelName = car.model.toLowerCase()

      return (
        (modelName.includes(searchTerm) && searchTerm.length >= 3) ||
        (carFullName.includes(searchTerm) && searchTerm.length >= 4)
      )
    })

    return exactMatch || null
  }

  useEffect(() => {
    if (query.length >= 2) {
      const results = searchCars(query)
      setSuggestions(results)
      setIsOpen(results.length > 0)
      setSelectedIndex(-1)
    } else {
      setSuggestions([])
      setIsOpen(false)
      setSelectedIndex(-1)
    }
  }, [query])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
        setSelectedIndex(-1)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const handleSearch = (searchQuery?: string) => {
    const searchTerm = searchQuery || query
    if (!searchTerm.trim()) return

    // Try to find exact match first
    const exactMatch = findExactCarMatch(searchTerm)

    if (exactMatch) {
      // Redirect to specific car page
      router.push(`/cars/${exactMatch.id}`)
    } else {
      // Redirect to cars page with search filter
      router.push(`/cars?search=${encodeURIComponent(searchTerm)}`)
    }

    setQuery("")
    setIsOpen(false)
    setSelectedIndex(-1)
    inputRef.current?.blur()
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault()
        setSelectedIndex((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev))
        break
      case "ArrowUp":
        e.preventDefault()
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : -1))
        break
      case "Enter":
        e.preventDefault()
        if (selectedIndex >= 0 && suggestions[selectedIndex]) {
          handleSearch(suggestions[selectedIndex].name)
        } else {
          handleSearch()
        }
        break
      case "Escape":
        setIsOpen(false)
        setSelectedIndex(-1)
        inputRef.current?.blur()
        break
    }
  }

  const handleSuggestionClick = (car: CarData) => {
    router.push(`/cars/${car.id}`)
    setQuery("")
    setIsOpen(false)
    setSelectedIndex(-1)
  }

  return (
    <div ref={searchRef} className="relative w-full max-w-md">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search cars (e.g., Thar, Swift, Creta)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length >= 2 && setIsOpen(suggestions.length > 0)}
          className="pl-10 pr-12"
        />
        <Button
          size="sm"
          onClick={() => handleSearch()}
          className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 px-3"
        >
          <Search className="w-3 h-3" />
        </Button>
      </div>

      {isOpen && suggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg z-50 mt-1 max-h-96 overflow-y-auto">
          <div className="p-2">
            <div className="text-xs text-gray-500 mb-2 px-2">
              Found {suggestions.length} car{suggestions.length !== 1 ? "s" : ""}
            </div>
            {suggestions.map((car, index) => (
              <div
                key={car.id}
                onClick={() => handleSuggestionClick(car)}
                className={`flex items-center space-x-3 p-3 rounded-md cursor-pointer transition-colors ${
                  index === selectedIndex ? "bg-blue-50 border border-blue-200" : "hover:bg-gray-50"
                }`}
              >
                <Image
                  src={car.image || "/placeholder.svg"}
                  alt={car.name}
                  width={60}
                  height={40}
                  className="rounded object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-sm truncate">{car.name}</h4>
                  <div className="flex items-center space-x-2 text-xs text-gray-500">
                    <span>{car.priceDisplay}</span>
                    <span>•</span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-current" />
                      <span>{car.rating}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400">
                    {car.variants[0]?.fuelType} • {car.variants[0]?.transmission} • {car.bodyType}
                  </div>
                </div>
                {car.isPopular && <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Popular</span>}
              </div>
            ))}
          </div>

          {query.length >= 2 && (
            <div className="border-t border-gray-100 p-2">
              <button
                onClick={() => handleSearch()}
                className="w-full text-left px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              >
                Search for "{query}" in all cars →
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

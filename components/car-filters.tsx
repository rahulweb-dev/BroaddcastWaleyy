"use client"

import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { brands, bodyTypes, fuelTypes, transmissionTypes, segments } from "@/lib/cars-database"
import type { FilterState } from "@/app/cars/page"

interface CarFiltersProps {
  filters: FilterState
  setFilters: (filters: FilterState) => void
}

export function CarFilters({ filters, setFilters }: CarFiltersProps) {
  const handleBrandChange = (brand: string, checked: boolean) => {
    const newBrands = checked ? [...filters.selectedBrands, brand] : filters.selectedBrands.filter((b) => b !== brand)
    setFilters({ ...filters, selectedBrands: newBrands })
  }

  const handleFuelTypeChange = (fuel: string, checked: boolean) => {
    const newFuelTypes = checked
      ? [...filters.selectedFuelTypes, fuel]
      : filters.selectedFuelTypes.filter((f) => f !== fuel)
    setFilters({ ...filters, selectedFuelTypes: newFuelTypes })
  }

  const handleTransmissionChange = (transmission: string, checked: boolean) => {
    const newTransmissions = checked
      ? [...filters.selectedTransmissions, transmission]
      : filters.selectedTransmissions.filter((t) => t !== transmission)
    setFilters({ ...filters, selectedTransmissions: newTransmissions })
  }

  const handleBodyTypeChange = (bodyType: string, checked: boolean) => {
    const newBodyTypes = checked
      ? [...filters.selectedBodyTypes, bodyType]
      : filters.selectedBodyTypes.filter((b) => b !== bodyType)
    setFilters({ ...filters, selectedBodyTypes: newBodyTypes })
  }

  const handleSegmentChange = (segment: string, checked: boolean) => {
    const newSegments = checked
      ? [...(filters.selectedSegments || []), segment]
      : (filters.selectedSegments || []).filter((s) => s !== segment)
    setFilters({ ...filters, selectedSegments: newSegments })
  }

  const clearAllFilters = () => {
    setFilters({
      priceRange: [0, 50],
      selectedBrands: [],
      selectedFuelTypes: [],
      selectedTransmissions: [],
      selectedBodyTypes: [],
      selectedSegments: [],
      searchQuery: filters.searchQuery, // Keep search query
    })
  }

  const hasActiveFilters =
    filters.priceRange[0] > 0 ||
    filters.priceRange[1] < 50 ||
    filters.selectedBrands.length > 0 ||
    filters.selectedFuelTypes.length > 0 ||
    filters.selectedTransmissions.length > 0 ||
    filters.selectedBodyTypes.length > 0 ||
    (filters.selectedSegments && filters.selectedSegments.length > 0)

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Filters</CardTitle>
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearAllFilters}>
              <X className="w-4 h-4 mr-1" />
              Clear All
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Price Range */}
        <div>
          <Label className="text-base font-semibold mb-3 block">Price Range (₹ Lakh)</Label>
          <div className="px-2">
            <Slider
              value={filters.priceRange}
              onValueChange={(value) => setFilters({ ...filters, priceRange: value as [number, number] })}
              max={50}
              step={1}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-gray-600">
              <span>₹{filters.priceRange[0]} L</span>
              <span>₹{filters.priceRange[1]} L</span>
            </div>
          </div>
        </div>

        {/* Brand Filter */}
        <div>
          <Label className="text-base font-semibold mb-3 block">Brand ({brands.length})</Label>
          <div className="max-h-48 overflow-y-auto space-y-2">
            {brands.map((brand) => (
              <div key={brand} className="flex items-center space-x-2">
                <Checkbox
                  id={brand}
                  checked={filters.selectedBrands.includes(brand)}
                  onCheckedChange={(checked) => handleBrandChange(brand, checked as boolean)}
                />
                <Label htmlFor={brand} className="text-sm cursor-pointer">
                  {brand}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Body Type Filter */}
        <div>
          <Label className="text-base font-semibold mb-3 block">Body Type</Label>
          <div className="space-y-2">
            {bodyTypes.map((bodyType) => (
              <div key={bodyType} className="flex items-center space-x-2">
                <Checkbox
                  id={bodyType}
                  checked={filters.selectedBodyTypes.includes(bodyType)}
                  onCheckedChange={(checked) => handleBodyTypeChange(bodyType, checked as boolean)}
                />
                <Label htmlFor={bodyType} className="text-sm cursor-pointer">
                  {bodyType}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Fuel Type Filter */}
        <div>
          <Label className="text-base font-semibold mb-3 block">Fuel Type</Label>
          <div className="space-y-2">
            {fuelTypes.map((fuel) => (
              <div key={fuel} className="flex items-center space-x-2">
                <Checkbox
                  id={fuel}
                  checked={filters.selectedFuelTypes.includes(fuel)}
                  onCheckedChange={(checked) => handleFuelTypeChange(fuel, checked as boolean)}
                />
                <Label htmlFor={fuel} className="text-sm cursor-pointer">
                  {fuel}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Transmission Filter */}
        <div>
          <Label className="text-base font-semibold mb-3 block">Transmission</Label>
          <div className="space-y-2">
            {transmissionTypes.map((transmission) => (
              <div key={transmission} className="flex items-center space-x-2">
                <Checkbox
                  id={transmission}
                  checked={filters.selectedTransmissions.includes(transmission)}
                  onCheckedChange={(checked) => handleTransmissionChange(transmission, checked as boolean)}
                />
                <Label htmlFor={transmission} className="text-sm cursor-pointer">
                  {transmission}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Segment Filter */}
        <div>
          <Label className="text-base font-semibold mb-3 block">Segment</Label>
          <div className="space-y-2">
            {segments.map((segment) => (
              <div key={segment} className="flex items-center space-x-2">
                <Checkbox
                  id={segment}
                  checked={(filters.selectedSegments || []).includes(segment)}
                  onCheckedChange={(checked) => handleSegmentChange(segment, checked as boolean)}
                />
                <Label htmlFor={segment} className="text-sm cursor-pointer">
                  {segment}
                </Label>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

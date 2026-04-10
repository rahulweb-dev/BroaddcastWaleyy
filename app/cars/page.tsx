'use client';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { CarFilters } from '@/components/car-filters';
import { CarGrid } from '@/components/car-grid';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import { Filter, SlidersHorizontal } from 'lucide-react';

export interface FilterState {
  priceRange: [number, number];
  selectedBrands: string[];
  selectedFuelTypes: string[];
  selectedTransmissions: string[];
  selectedBodyTypes: string[];
  selectedSegments?: string[];
  searchQuery: string;
}

export default function CarsPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const filterQuery = searchParams.get('filter');
  const [filters, setFilters] = useState<FilterState>({
    priceRange: [0, 50],
    selectedBrands: [],
    selectedFuelTypes: [],
    selectedTransmissions: [],
    selectedBodyTypes: [],
    selectedSegments: [],
    searchQuery: searchQuery,
  });

useEffect(() => {
  if (searchQuery) {
    setFilters((prev) => ({ ...prev, searchQuery }))
  }

  if (!filterQuery) return

  const filter = filterQuery.toLowerCase()

  switch (filter) {
    case 'suv':
      setFilters((prev) => ({
        ...prev,
        selectedBodyTypes: ['SUV'],
      }))
      break

    case 'hatchback':
      setFilters((prev) => ({
        ...prev,
        selectedBodyTypes: ['Hatchback'],
      }))
      break

    case 'sedan':
      setFilters((prev) => ({
        ...prev,
        selectedBodyTypes: ['Sedan'],
      }))
      break

    case 'electric':
      setFilters((prev) => ({
        ...prev,
        selectedFuelTypes: ['Electric'],
      }))
      break

    case 'automatic':
      setFilters((prev) => ({
        ...prev,
        selectedTransmissions: ['Automatic'],
      }))
      break

    case 'under5':
      setFilters((prev) => ({
        ...prev,
        priceRange: [0, 5],
      }))
      break

    case 'under10':
      setFilters((prev) => ({
        ...prev,
        priceRange: [0, 10],
      }))
      break

    case 'under15':
      setFilters((prev) => ({
        ...prev,
        priceRange: [0, 15],
      }))
      break
  }
}, [searchQuery, filterQuery])
  return (
    <div className='max-w-7xl mx-auto px-4 py-6'>
      {/* Breadcrumb */}
      <Breadcrumb className='mb-4'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />

          <BreadcrumbItem>
            <BreadcrumbPage>All Cars</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {/* Header */}
      <div className='mb-6'>
        <h1 className='text-2xl font-semibold mb-2'>Find Your Perfect Car</h1>

        <p className='text-gray-600 text-sm'>
          Browse latest cars with filters and search options
        </p>
      </div>

      {/* Search Result Banner */}
      {searchQuery && (
        <div className='mb-6 p-4 bg-blue-50 border border-blue-100 rounded-lg'>
          <h2 className='text-lg font-semibold text-blue-800'>
            Search results for "{searchQuery}"
          </h2>

          <p className='text-sm text-blue-600'>
            Showing cars matching your search criteria
          </p>
        </div>
      )}

      {/* Layout */}
      <div className='grid grid-cols-1 lg:grid-cols-4 gap-6'>
        {/* Filters */}
        <aside className='lg:col-span-1'>
          <div className='sticky top-20'>
            <div className='flex items-center gap-2 mb-3'>
              <Filter className='w-4 h-4' />
              <h2 className='font-semibold'>Filters</h2>
            </div>

            <div className='bg-white border rounded-xl p-4 shadow-sm'>
              <CarFilters filters={filters} setFilters={setFilters} />
            </div>
          </div>
        </aside>

        {/* Cars Grid */}
        <main className='lg:col-span-3'>
          {/* Top Bar */}
          <div className='flex justify-between items-center mb-4'>
            <h2 className='font-semibold text-lg'>Available Cars</h2>

            <button className='flex items-center gap-2 border px-3 py-2 rounded-lg text-sm hover:bg-gray-50'>
              <SlidersHorizontal className='w-4 h-4' />
              Sort
            </button>
          </div>

          {/* Grid */}
          <CarGrid filters={filters} />
        </main>
      </div>
    </div>
  );
}

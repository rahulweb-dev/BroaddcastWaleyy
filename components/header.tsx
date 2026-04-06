'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown, MapPin, Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SearchDropdown } from '@/components/search-dropdown';
import { LocationSelector } from '@/components/location-selector';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='bg-white border-b sticky top-0 z-50'>
      <div className='max-w-7xl mx-auto px-4'>
        <div className='flex items-center justify-between h-16'>
          {/* Logo */}
          <Link href='/' className='flex items-center gap-2'>
            <div className='w-9 h-9 bg-red-600 rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold'>BC</span>
            </div>

            <span className='text-xl font-semibold text-gray-800'>
              Broaddcast
            </span>
          </Link>

          {/* Navigation */}
          <nav className='hidden lg:flex items-center gap-8'>
            {/* New Cars */}
            <div className='relative group'>
              <Link
                href='/cars'
                className='flex items-center gap-1 text-gray-700 hover:text-red-600 font-medium'
              >
                NEW CARS
                <ChevronDown className='w-4 h-4' />
              </Link>

              {/* Dropdown */}
              <div className='absolute top-full left-0 mt-3 w-56 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition'>
                <div className='p-3 space-y-2'>
                  <Link href='/cars' className='dropdown-item'>
                    Browse All Cars
                  </Link>

                  <Link href='/new-car-launches' className='dropdown-item'>
                    New Launches
                  </Link>

                  <Link href='/cars/popular' className='dropdown-item'>
                    Popular Cars
                  </Link>

                  <Link href='/cars/upcoming' className='dropdown-item'>
                    Upcoming Cars
                  </Link>
                </div>
              </div>
            </div>

            {/* Used Cars */}
            <div className='relative group'>
              <Link
                href='/used-cars'
                className='flex items-center gap-1 text-gray-700 hover:text-red-600 font-medium'
              >
                USED CARS
                <ChevronDown className='w-4 h-4' />
              </Link>

              <div className='absolute top-full left-0 mt-3 w-64 bg-white border rounded-lg shadow-lg opacity-0 invisible group-hover:visible group-hover:opacity-100 transition'>
                <div className='p-3 space-y-2'>
                  <Link href='/used-cars' className='dropdown-item'>
                    Explore Used Cars
                  </Link>

                  <Link href='/used-cars/sell' className='dropdown-item'>
                    Sell Your Car
                  </Link>

                  <Link href='/used-cars/valuation' className='dropdown-item'>
                    Car Valuation
                  </Link>

                  <Link href='/used-cars/dealers' className='dropdown-item'>
                    Find Dealers
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href='/news'
              className='text-gray-700 hover:text-red-600 font-medium'
            >
              REVIEWS & NEWS
            </Link>
          </nav>

          {/* Right Section */}
          <div className='hidden md:flex items-center gap-3'>
            <SearchDropdown />

            <LocationSelector />

            <Button variant='ghost' size='icon'>
              <Bell className='w-5 h-5' />
            </Button>

            <Button variant='outline' className='ml-2'>
              Login
            </Button>
          </div>

          {/* Mobile Menu */}
          <button
            className='lg:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className='w-6 h-6' />
            ) : (
              <Menu className='w-6 h-6' />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='lg:hidden py-4 border-t'>
            <div className='mb-4'>
              <SearchDropdown />
            </div>

            <nav className='flex flex-col gap-4'>
              <Link href='/cars'>NEW CARS</Link>

              <Link href='/used-cars'>USED CARS</Link>

              <Link href='/news'>REVIEWS & NEWS</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

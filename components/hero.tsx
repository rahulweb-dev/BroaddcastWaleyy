'use client';
import BrandLogoSwiper from '@/components/BrandLogoSwiper';
import CarSectionSlider from '@/components/CarSectionSlider';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { SearchDropdown } from '@/components/search-dropdown';
import {
  ChevronLeft,
  ChevronRight,
  Star,
  TrendingUp,
  Award,
  Users,
} from 'lucide-react';
import FindCarsSection from '@/components/FindCarsSection';
import {
  mostSearchedCars,
  electricCars,
  upcomingCars,
  latestCars,
  suvCars,
  hatchbackCars,
  sedanCars,
} from '@/lib/car-sections';
const heroSlides = [
  {
    id: 1,
    title: 'Find Your Perfect Car',
    subtitle: 'Discover from thousands of new & used cars',
    image:
      'https://media.cars24.com/india/cms/prod/banners/root/2026/04/02/0b3c8433-de0c-4f15-9681-652e167b31c0-homepage-desktop-banner-2.png',
    category: 'New Cars',
  },
  {
    id: 2,
    title: 'Best Used Car Deals',
    subtitle: 'Certified pre-owned vehicles with warranty',
    image:
      '/no5qv9b_1808753.avif',
    category: 'Used Cars',
  },
  {
    id: 3,
    title: 'Compare & Choose',
    subtitle: 'Side-by-side comparison of your favorite cars',
    image:
      'https://media.cars24.com/india/cms/prod/banners/root/2026/04/02/0b3c8433-de0c-4f15-9681-652e167b31c0-homepage-desktop-banner-2.png',
    category: 'Compare',
  },
];

const brands = [
  {
    name: 'Maruti',
    logo: 'https://stimg.cardekho.com/pwa/img/brandLogo_168x84/maruti.jpg',
  },
  {
    name: 'Hyundai',
    logo: 'https://stimg.cardekho.com/pwa/img/brandLogo_168x84/hyundai.jpg',
  },
  {
    name: 'Tata',
    logo: 'https://stimg.cardekho.com/pwa/img/brandLogo_168x84/tata.jpg',
  },
  {
    name: 'Mahindra',
    logo: 'https://stimg.cardekho.com/pwa/img/brandLogo_168x84/mahindra.jpg',
  },
  {
    name: 'Honda',
    logo: 'https://stimg.cardekho.com/pwa/img/brandLogo_168x84/honda.jpg',
  },
  {
    name: 'Kia',
    logo: 'https://stimg.cardekho.com/pwa/img/brandLogo_168x84/kia.jpg',
  },
  {
    name: 'Renault',
    logo: 'https://stimg.cardekho.com/pwa/img/brandLogo_168x84/renault.jpg',
  },
  {
    name: 'Volkswagen',
    logo: '/brands/volkswagen.png',
  },
  {
    name: 'Ford',
    logo: '/brands/ford.png',
  },
  {
    name: 'Toyota',
    logo: '/brands/toyota.png',
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroSlides.length) % heroSlides.length,
    );
  };

  const currentHero = heroSlides[currentSlide];

  return (
    <>
      {' '}
      <section className='relative h-[650px] flex items-center overflow-hidden'>
        {/* Background Image */}
        <div className='absolute inset-0'>
          <img
            src={currentHero.image}
            alt='banner'
            className='w-full h-full object-cover transition-all duration-1000'
          />

          <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent' />
        </div>

        {/* Content */}
        <div className='relative z-10 container mx-auto px-6'>
          <div className='max-w-3xl text-white space-y-6'>
            {/* Badge */}
            <div className='inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2'>
              <Star className='w-4 h-4' />
              {currentHero.category}
            </div>

            {/* Heading */}
            <h1 className='text-4xl md:text-6xl font-bold leading-tight'>
              {currentHero.title}
            </h1>

            <p className='text-lg text-white/90'>{currentHero.subtitle}</p>

            {/* Search Card */}
            <Card className='bg-white shadow-2xl border-0 p-5 text-black'>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                <div>
                  <label className='text-sm font-medium'>Search Cars</label>
                  <SearchDropdown />
                </div>

                <div>
                  <label className='text-sm font-medium'>Budget</label>
                  <select className='w-full border p-3 rounded-lg'>
                    <option>Any Budget</option>
                    <option>Under 5 Lakh</option>
                    <option>5-10 Lakh</option>
                    <option>10-20 Lakh</option>
                  </select>
                </div>

                <div>
                  <label className='text-sm font-medium'>City</label>
                  <select className='w-full border p-3 rounded-lg'>
                    <option>Select City</option>
                    <option>Hyderabad</option>
                    <option>Chennai</option>
                    <option>Bangalore</option>
                  </select>
                </div>

                <Button className='mt-6 h-12 bg-blue-600 hover:bg-blue-700 text-white'>
                  Search Cars
                </Button>
              </div>
            </Card>

            {/* Stats */}
            <div className='flex gap-8 pt-6 text-white'>
              <div>
                <div className='flex items-center gap-2'>
                  <TrendingUp />
                  <span className='text-2xl font-bold'>50K+</span>
                </div>
                <p className='text-sm'>Cars Listed</p>
              </div>

              <div>
                <div className='flex items-center gap-2'>
                  <Users />
                  <span className='text-2xl font-bold'>1M+</span>
                </div>
                <p className='text-sm'>Customers</p>
              </div>

              <div>
                <div className='flex items-center gap-2'>
                  <Award />
                  <span className='text-2xl font-bold'>500+</span>
                </div>
                <p className='text-sm'>Dealers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prevSlide}
          className='absolute left-6 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:scale-110 transition p-3 rounded-full'
        >
          <ChevronLeft />
        </button>

        <button
          onClick={nextSlide}
          className='absolute right-6 top-1/2 -translate-y-1/2 bg-white shadow-lg hover:scale-110 transition p-3 rounded-full'
        >
          <ChevronRight />
        </button>
      </section>{' '}
      <div className='max-w-6xl mx-auto'>
        <BrandLogoSwiper brands={brands} /> <FindCarsSection />
        <Searched />
      </div>
    </>
  );
}

export function Searched() {


  return (
    <div className=''>
      <CarSectionSlider
        title='Most Searched Cars'
        cars={mostSearchedCars}
        type='popular'
      />

      <CarSectionSlider
        title='Electric Cars'
        cars={electricCars}
        type='electric'
      />

      <CarSectionSlider title='SUV Cars' cars={suvCars} type='suv' />

      <CarSectionSlider
        title='Hatchback Cars'
        cars={hatchbackCars}
        type='hatchback'
      />

      <CarSectionSlider title='Sedan Cars' cars={sedanCars} type='sedan' />

      <CarSectionSlider
        title='Upcoming Cars'
        cars={upcomingCars}
        type='upcoming'
      />

      <CarSectionSlider title='Latest Cars' cars={latestCars} type='latest' />
    </div>
  );
}

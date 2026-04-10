'use client';

import { use, useState } from 'react';
import OfferPopup from '@/components/forms/OfferPopup';
import Image from 'next/image';
import { Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { EMICalculator } from '@/components/emi-calculator';
import { getCarById, getCompetitors } from '@/lib/cars-database';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

type Props = {
  params: Promise<{ id: string }>;
};

export default function CarDetailPage({ params }: Props) {
  // FIX 1: Use React.use() to unwrap params in a client component (replaces `await params`)
  const { id } = use(params);

  const carId = Number(id);

  // FIX 1 (continued): useState is now valid — this is a client component, not async server component
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // FIX 5: track active image

  const carData = getCarById(carId);
  const competitors = getCompetitors(carId);

  if (!carData) {
    return (
      <div className='container mx-auto px-4 py-6'>
        <div className='text-center py-12'>
          <h1 className='text-2xl font-bold text-gray-800 mb-4'>
            Car Not Found
          </h1>
          <p className='text-gray-600'>
            The car you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  // FIX 5: Use currentImageIndex instead of hardcoded index 0
  const mainImage = carData.images?.[currentImageIndex] || '/placeholder.svg';

  return (
    <div className='container mx-auto px-4 py-6'>
      {/* Breadcrumb */}
      <Breadcrumb className='mb-6'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/cars'>Cars</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>{carData.name}</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        <div className='lg:col-span-2'>
          {/* Image Gallery */}
          <Card className='mb-6'>
            <CardContent className='p-0'>
              <div className='relative'>
                <Image
                  src={mainImage}
                  alt={carData.name}
                  width={600}
                  height={400}
                  className='w-full h-96 object-cover rounded-t-lg'
                />

                {/* FIX 5: Image counter now reflects the active image */}
                <div className='absolute bottom-4 right-4 bg-black/60 text-white px-2 py-1 rounded text-sm'>
                  {currentImageIndex + 1} / {carData.images?.length || 1}
                </div>

                {carData.isPopular && (
                  <div className='absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded text-sm'>
                    Popular Choice
                  </div>
                )}
              </div>

              {/* FIX 5: Thumbnails are now clickable and update the main image */}
              <div className='grid grid-cols-4 gap-2 p-4'>
                {(carData.images || []).slice(0, 4).map((img, index) => (
                  <Image
                    key={index}
                    src={img || '/placeholder.svg'}
                    alt={`${carData.name}-${index}`}
                    width={150}
                    height={100}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-full h-20 object-cover rounded cursor-pointer border-2 transition-all ${
                      currentImageIndex === index
                        ? 'border-red-600 opacity-100'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  />
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Tabs defaultValue='overview'>
            <TabsList className='grid grid-cols-5 w-full'>
              <TabsTrigger value='overview'>Overview</TabsTrigger>
              <TabsTrigger value='specifications'>Specifications</TabsTrigger>
              <TabsTrigger value='features'>Features</TabsTrigger>
              <TabsTrigger value='variants'>Variants</TabsTrigger>
              <TabsTrigger value='emi'>EMI Calculator</TabsTrigger>
            </TabsList>

            {/* Overview */}
            <TabsContent value='overview'>
              <Card>
                <CardHeader>
                  <CardTitle>About {carData.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-gray-600 mb-4'>{carData.overview}</p>
                  <ul className='space-y-2'>
                    {carData.keyHighlights.map((item, index) => (
                      <li key={index} className='flex gap-2 items-start'>
                        <Shield className='w-4 h-4 text-green-600 mt-0.5 shrink-0' />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Specifications */}
            <TabsContent value='specifications'>
              <Card>
                <CardHeader>
                  <CardTitle>Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* FIX 3: Dynamically render all specification fields */}
                  <div className='divide-y'>
                    {Object.entries(carData.specifications).map(
                      ([key, value]) => (
                        <div key={key} className='flex justify-between py-3'>
                          <span className='text-gray-500 capitalize'>
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </span>
                          <span className='font-medium text-right'>
                            {String(value)}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* FIX 2: Features tab now has content */}
            <TabsContent value='features'>
              <Card>
                <CardHeader>
                  <CardTitle>Features</CardTitle>
                </CardHeader>
                <CardContent>
                  {carData.features && carData.features.length > 0 ? (
                    <ul className='grid sm:grid-cols-2 gap-2'>
                      {carData.features.map((feature, index) => (
                        <li
                          key={index}
                          className='flex items-center gap-2 text-sm text-gray-700'
                        >
                          <span className='w-2 h-2 rounded-full bg-red-600 shrink-0' />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className='text-gray-500 text-sm'>
                      No features listed for this car.
                    </p>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Variants */}
            <TabsContent value='variants'>
              <Card>
                <CardHeader>
                  <CardTitle>Variants</CardTitle>
                </CardHeader>
                <CardContent>
                  {carData.variants.map((variant, index) => (
                    <div key={index} className='border p-4 rounded mb-3'>
                      <div className='flex justify-between items-center'>
                        <div>
                          <h4 className='font-semibold'>{variant.name}</h4>
                          <p className='text-sm text-gray-500'>
                            {variant.fuelType} | {variant.transmission}
                          </p>
                        </div>
                        <div className='text-right'>
                          <p className='font-bold mb-1'>₹{variant.price} L</p>
                          {/* FIX 6: Get Quote now opens the OfferPopup */}
                          <Button size='sm' onClick={() => setOpen(true)}>
                            Get Quote
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            {/* EMI Calculator */}
            <TabsContent value='emi'>
              <EMICalculator
                carPrice={carData.priceRange.min * 100000}
                carName={carData.name}
              />
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className='space-y-6'>
          <Card>
            <CardContent className='p-6'>
              <Badge>{carData.brand}</Badge>
              <h1 className='text-2xl font-bold mt-2'>{carData.name}</h1>
              <p className='text-3xl font-bold text-red-600 mt-2'>
                {carData.priceDisplay}
              </p>

              <button
                onClick={() => setOpen(true)}
                className='mt-4 w-full bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors'
              >
                Check Offers
              </button>

              {/* FIX 1: OfferPopup is now correctly rendered (useState works in client component) */}
              
              <OfferPopup isOpen={open} onClose={() => setOpen(false)} carName={carData.name}/>
            </CardContent>
          </Card>

          {/* Competitors */}
          <Card>
            <CardHeader>
              <CardTitle>Similar Cars</CardTitle>
            </CardHeader>
            <CardContent>
              {competitors.slice(0, 3).map((item) => (
                <div key={item.id} className='flex gap-3 mb-3 items-center'>
                  <Image
                    src={item.images?.[0] || '/placeholder.svg'}
                    alt={item.name}
                    width={60}
                    height={40}
                    className='rounded object-cover'
                  />
                  <div>
                    <h4 className='text-sm font-medium'>{item.name}</h4>
                    <p className='text-xs text-gray-500'>{item.priceDisplay}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

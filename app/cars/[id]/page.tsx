'use client';

import { useState } from 'react';
import OfferPopup from '@/components/forms/OfferPopup';
import Image from 'next/image';
import { Shield } from 'lucide-react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { EMICalculator } from '@/components/emi-calculator';
import { getCarById, getCompetitors } from '@/lib/cars-database';
import { use } from 'react';
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
  const { id } = use(params);

  const carId = Number(id);

  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);

  const carData = getCarById(carId);
  const competitors = getCompetitors(carId);

  if (!carData) {
    return (
      <div className='container mx-auto px-4 py-6'>
        <h1>Car Not Found</h1>
      </div>
    );
  }

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

      <div className='grid lg:grid-cols-3 gap-8'>
        {/* Left Section */}

        <div className='lg:col-span-2'>
          {/* Gallery */}

          <Card className='mb-6'>
            <CardContent className='p-0'>
              <Swiper navigation modules={[Navigation]}>
                {carData.images.map((img, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      src={img}
                      alt={carData.name}
                      width={800}
                      height={400}
                      className='w-full h-96 object-cover'
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </CardContent>
          </Card>

          {/* Colors */}

          {carData.colors && (
            <Card className='mb-6'>
              <CardHeader>
                <CardTitle>Available Colors</CardTitle>
              </CardHeader>

              <CardContent>
                <div className='flex gap-4'>
                  {carData.colors.map((color, index) => (
                    <div
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className='cursor-pointer text-center'
                    >
                      <div
                        className={`w-10 h-10 rounded-full border-2
${selectedColor === index ? 'border-red-600' : 'border-gray-300'}
`}
                        style={{ backgroundColor: color.code }}
                      />

                      <p className='text-xs mt-1'>{color.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* 360 Viewer */}

          <Card className='mb-6'>
            <CardHeader>
              <CardTitle>360° View</CardTitle>
            </CardHeader>

            <CardContent>
              <div className='aspect-video bg-gray-100 rounded-lg flex items-center justify-center'>
                360° Viewer Coming Soon
              </div>
            </CardContent>
          </Card>

          {/* Tabs */}

          <Tabs defaultValue='overview'>
            <TabsList className='grid grid-cols-5'>
              <TabsTrigger value='overview'>Overview</TabsTrigger>
              <TabsTrigger value='specifications'>Specifications</TabsTrigger>
              <TabsTrigger value='features'>Features</TabsTrigger>
              <TabsTrigger value='variants'>Variants</TabsTrigger>
              <TabsTrigger value='emi'>EMI</TabsTrigger>
            </TabsList>

            {/* Overview */}

            <TabsContent value='overview'>
              <Card>
                <CardHeader>
                  <CardTitle>About {carData.name}</CardTitle>
                </CardHeader>

                <CardContent>
                  <p>{carData.overview}</p>

                  <ul className='mt-4 space-y-2'>
                    {carData.keyHighlights.map((item, index) => (
                      <li key={index} className='flex gap-2'>
                        <Shield className='w-4 h-4 text-green-600' />
                        {item}
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
                  {Object.entries(carData.specifications).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className='flex justify-between py-2 border-b'
                      >
                        <span>{key}</span>

                        <span>{String(value)}</span>
                      </div>
                    ),
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Features */}

            <TabsContent value='features'>
              <Card>
                <CardHeader>
                  <CardTitle>Features</CardTitle>
                </CardHeader>

                <CardContent>
                  <div className='grid grid-cols-2 gap-3'>
                    {Array.isArray(carData.features) ? (
                      carData.features.map((item, index) => (
                        <div key={index} className='flex gap-2 items-center'>
                          <div className='w-2 h-2 bg-red-600 rounded-full' />
                          <span>{item}</span>
                        </div>
                      ))
                    ) : (
                      <p className='text-gray-500 text-sm'>
                        No features available
                      </p>
                    )}
                  </div>
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
                    <div key={index} className='border p-4 mb-3 rounded'>
                      <div className='flex justify-between'>
                        <div>
                          <h4>{variant.name}</h4>
                          <p>{variant.fuelType}</p>
                        </div>

                        <div>
                          <Button onClick={() => setOpen(true)}>
                            Get Quote
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value='emi'>
              <EMICalculator
                carPrice={carData.priceRange.min * 100000}
                carName={carData.name}
              />
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}

        <div className='space-y-6 sticky top-24'>
          <Card>
            <CardContent className='p-6'>
              <Badge>{carData.brand}</Badge>

              <h1 className='text-2xl mt-2'>{carData.name}</h1>

              <p className='text-3xl text-red-600'>{carData.priceDisplay}</p>

              <button
                onClick={() => setOpen(true)}
                className='w-full bg-red-600 text-white py-3 mt-4 rounded'
              >
                Get Offers
              </button>

              <OfferPopup
                isOpen={open}
                onClose={() => setOpen(false)}
                carName={carData.name}
              />
            </CardContent>
          </Card>

          {/* Price Breakup */}

          <Card>
            <CardHeader>
              <CardTitle>Price Breakup</CardTitle>
            </CardHeader>

            <CardContent>
              <div className='space-y-2'>
                <div className='flex justify-between'>
                  <span>Ex Showroom</span>
                  <span>{carData.priceDisplay}</span>
                </div>

                <div className='flex justify-between'>
                  <span>Insurance</span>
                  <span>₹45,000</span>
                </div>

                <div className='flex justify-between'>
                  <span>RTO</span>
                  <span>₹80,000</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Compare Cars */}

          <Card>
            <CardHeader>
              <CardTitle>Compare Cars</CardTitle>
            </CardHeader>

            <CardContent>
              {competitors.slice(0, 3).map((item) => (
                <div key={item.id} className='flex justify-between mb-3'>
                  <span>{item.name}</span>

                  <Button size='sm'>Compare</Button>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Dealers */}

          <Card>
            <CardHeader>
              <CardTitle>Dealers</CardTitle>
            </CardHeader>

            <CardContent>
              <div className='border p-3 rounded mb-2'>
                Saboo Motors Hyderabad
              </div>

              <div className='border p-3 rounded'>Popular Motors Mumbai</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Floating CTA */}

      <div className='fixed bottom-0 left-0 right-0 bg-white border p-3 lg:hidden'>
        <div className='flex gap-3'>
          <button
            onClick={() => setOpen(true)}
            className='flex-1 bg-red-600 text-white py-3 rounded'
          >
            Get Offers
          </button>

          <button className='flex-1 border py-3 rounded'>Test Drive</button>
        </div>
      </div>
    </div>
  );
}

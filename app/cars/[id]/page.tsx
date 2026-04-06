import Image from 'next/image'
import { Star, Fuel, Settings, Calendar, Users, Shield } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { EMICalculator } from '@/components/emi-calculator'
import { getCarById, getCompetitors } from '@/lib/cars-database'
import {
Breadcrumb,
BreadcrumbItem,
BreadcrumbLink,
BreadcrumbList,
BreadcrumbPage,
BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

export default function CarDetailPage({ params }: { params: { id: string } }) {

const carId = Number.parseInt(params.id)
const carData = getCarById(carId)
const competitors = getCompetitors(carId)

if (!carData) {
return (
<div className="container mx-auto px-4 py-6">
<div className="text-center py-12">
<h1 className="text-2xl font-bold text-gray-800 mb-4">
Car Not Found
</h1>
<p className="text-gray-600">
The car you're looking for doesn't exist.
</p>
</div>
</div>
)
}

const mainImage = carData.images?.[0] || "/placeholder.svg"

return (

<div className="container mx-auto px-4 py-6">

{/* Breadcrumb */}

<Breadcrumb className="mb-6">
<BreadcrumbList>

<BreadcrumbItem>
<BreadcrumbLink href="/">Home</BreadcrumbLink>
</BreadcrumbItem>

<BreadcrumbSeparator />

<BreadcrumbItem>
<BreadcrumbLink href="/cars">Cars</BreadcrumbLink>
</BreadcrumbItem>

<BreadcrumbSeparator />

<BreadcrumbItem>
<BreadcrumbPage>{carData.name}</BreadcrumbPage>
</BreadcrumbItem>

</BreadcrumbList>
</Breadcrumb>



<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2">

{/* Image */}

<Card className="mb-6">
<CardContent className="p-0">

<div className="relative">

<Image
src={mainImage}
alt={carData.name}
width={600}
height={400}
className="w-full h-96 object-cover rounded-t-lg"
/>

<div className="absolute bottom-4 right-4 bg-black/60 text-white px-2 py-1 rounded text-sm">
1 / {carData.images?.length || 1}
</div>

{carData.isPopular && (

<div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded text-sm">
Popular Choice
</div>

)}

</div>


{/* thumbnails */}

<div className="grid grid-cols-4 gap-2 p-4">

{(carData.images || []).slice(0,4).map((img,index)=>(

<Image
key={index}
src={img || "/placeholder.svg"}
alt={`${carData.name}-${index}`}
width={150}
height={100}
className="w-full h-20 object-cover rounded cursor-pointer"
/>

))}

</div>

</CardContent>
</Card>



{/* Tabs */}

<Tabs defaultValue="overview">

<TabsList className="grid grid-cols-5 w-full">

<TabsTrigger value="overview">Overview</TabsTrigger>
<TabsTrigger value="specifications">Specifications</TabsTrigger>
<TabsTrigger value="features">Features</TabsTrigger>
<TabsTrigger value="variants">Variants</TabsTrigger>
<TabsTrigger value="emi">EMI Calculator</TabsTrigger>

</TabsList>



{/* Overview */}

<TabsContent value="overview">

<Card>

<CardHeader>
<CardTitle>About {carData.name}</CardTitle>
</CardHeader>

<CardContent>

<p className="text-gray-600 mb-4">
{carData.overview}
</p>

<ul className="space-y-2">

{carData.keyHighlights.map((item,index)=>(

<li key={index} className="flex gap-2">
<Shield className="w-4 h-4 text-green-600"/>
{item}
</li>

))}

</ul>

</CardContent>

</Card>

</TabsContent>



{/* Specifications */}

<TabsContent value="specifications">

<Card>

<CardHeader>
<CardTitle>Specifications</CardTitle>
</CardHeader>

<CardContent>

<div className="grid md:grid-cols-2 gap-6">

<div>
Engine : {carData.specifications.engine}
</div>

<div>
Power : {carData.specifications.maxPower}
</div>

</div>

</CardContent>

</Card>

</TabsContent>



{/* Variants */}

<TabsContent value="variants">

<Card>

<CardHeader>
<CardTitle>Variants</CardTitle>
</CardHeader>

<CardContent>

{carData.variants.map((variant,index)=>(

<div key={index} className="border p-4 rounded mb-3">

<div className="flex justify-between">

<div>

<h4>{variant.name}</h4>

<p className="text-sm text-gray-500">
{variant.fuelType} | {variant.transmission}
</p>

</div>

<div>

<p className="font-bold">
₹{variant.price} L
</p>

<Button size="sm">
Get Quote
</Button>

</div>

</div>

</div>

))}

</CardContent>

</Card>

</TabsContent>



<TabsContent value="emi">

<EMICalculator
carPrice={carData.priceRange.min * 100000}
carName={carData.name}
/>

</TabsContent>

</Tabs>

</div>



{/* Sidebar */}

<div className="space-y-6">

<Card>

<CardContent className="p-6">

<Badge>{carData.brand}</Badge>

<h1 className="text-2xl font-bold mt-2">
{carData.name}
</h1>

<p className="text-3xl font-bold text-red-600 mt-2">
{carData.priceDisplay}
</p>

<Button className="w-full mt-4">
Get Best Price
</Button>

</CardContent>

</Card>



{/* Competitors */}

<Card>

<CardHeader>
<CardTitle>Similar Cars</CardTitle>
</CardHeader>

<CardContent>

{competitors.slice(0,3).map((item)=>(

<div key={item.id} className="flex gap-3 mb-3">

<Image
src={item.images?.[0] || "/placeholder.svg"}
alt={item.name}
width={60}
height={40}
className="rounded"
/>

<div>

<h4 className="text-sm">
{item.name}
</h4>

<p className="text-xs text-gray-500">
{item.priceDisplay}
</p>

</div>

</div>

))}

</CardContent>

</Card>

</div>

</div>

</div>

)
}
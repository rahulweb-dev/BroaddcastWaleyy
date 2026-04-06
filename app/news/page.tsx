import Image from "next/image"
import Link from "next/link"
import { Calendar, User, Eye } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

const newsArticles = [
  {
    id: 1,
    title: "Top 10 Electric Cars to Launch in 2024",
    excerpt:
      "Discover the most anticipated electric vehicles coming to Indian market this year with advanced features and competitive pricing...",
    image: "/placeholder.svg?height=200&width=300",
    author: "CarWale Team",
    date: "2024-01-15",
    category: "Electric Cars",
    views: 15420,
    featured: true,
  },
  {
    id: 2,
    title: "New Safety Regulations for Cars in India",
    excerpt:
      "Government announces new safety standards that will affect all car manufacturers and improve road safety across the country...",
    image: "/placeholder.svg?height=200&width=300",
    author: "Auto Expert",
    date: "2024-01-12",
    category: "News",
    views: 8930,
    featured: false,
  },
  {
    id: 3,
    title: "Best Cars Under 10 Lakhs in 2024",
    excerpt:
      "Complete guide to the most value-for-money cars in the budget segment with detailed analysis and recommendations...",
    image: "/placeholder.svg?height=200&width=300",
    author: "Review Team",
    date: "2024-01-10",
    category: "Reviews",
    views: 12650,
    featured: true,
  },
  {
    id: 4,
    title: "Maruti Suzuki Launches New Hybrid Technology",
    excerpt: "India's largest carmaker introduces advanced hybrid powertrain technology across multiple models...",
    image: "/placeholder.svg?height=200&width=300",
    author: "Tech Reporter",
    date: "2024-01-08",
    category: "Technology",
    views: 6780,
    featured: false,
  },
  {
    id: 5,
    title: "Car Sales Report: December 2023",
    excerpt:
      "Monthly analysis of car sales figures across different segments and brands in the Indian automotive market...",
    image: "/placeholder.svg?height=200&width=300",
    author: "Market Analyst",
    date: "2024-01-05",
    category: "Market",
    views: 4520,
    featured: false,
  },
  {
    id: 6,
    title: "Upcoming SUVs in 2024: What to Expect",
    excerpt: "A comprehensive look at the most exciting SUV launches planned for 2024 in the Indian market...",
    image: "/placeholder.svg?height=200&width=300",
    author: "SUV Expert",
    date: "2024-01-03",
    category: "SUVs",
    views: 9870,
    featured: false,
  },
]

export default function NewsPage() {
  const featuredArticles = newsArticles.filter((article) => article.featured)
  const regularArticles = newsArticles.filter((article) => !article.featured)

  return (
    <div className="container mx-auto px-4 py-6">
      <Breadcrumb className="mb-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>News</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Latest Car News</h1>
        <p className="text-gray-600">Stay updated with the latest automotive news, reviews, and industry insights</p>
      </div>

      {/* Featured Articles */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Stories</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {featuredArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={400}
                  height={250}
                  className="w-full h-64 object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-red-600">{article.category}</Badge>
              </div>

              <CardContent className="p-6">
                <h3 className="font-bold text-xl mb-3 line-clamp-2">
                  <Link href={`/news/${article.id}`} className="hover:text-red-600">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-4 h-4" />
                    <span>{article.views.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Regular Articles */}
      <section>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">More News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map((article) => (
            <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <Image
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <Badge variant="secondary" className="absolute top-2 left-2">
                  {article.category}
                </Badge>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                  <Link href={`/news/${article.id}`} className="hover:text-red-600">
                    {article.title}
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{article.excerpt}</p>

                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center space-x-2">
                    <span>{article.author}</span>
                    <span>•</span>
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="w-3 h-3" />
                    <span>{article.views.toLocaleString()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

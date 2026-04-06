"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"

const featuredNews = {
  title: "Electric Vehicle Sales Surge 150% in India",
  excerpt:
    "The Indian electric vehicle market is experiencing unprecedented growth with new models and government incentives driving adoption across major cities.",
  image: "/placeholder.svg?height=300&width=500",
  category: "Electric Vehicles",
  date: "Dec 6, 2024",
  readTime: "5 min read",
  trending: true,
}

const newsArticles = [
  {
    title: "New Safety Regulations for 2025 Cars",
    excerpt: "Government announces mandatory safety features for all new vehicles launching in 2025.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Policy",
    date: "Dec 5, 2024",
    readTime: "3 min read",
  },
  {
    title: "Maruti Suzuki Launches Hybrid Technology",
    excerpt: "India's largest carmaker introduces advanced hybrid systems across multiple models.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Technology",
    date: "Dec 4, 2024",
    readTime: "4 min read",
  },
  {
    title: "Car Loan Interest Rates Drop to 7.5%",
    excerpt: "Major banks reduce car loan rates making vehicle purchases more affordable.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Finance",
    date: "Dec 3, 2024",
    readTime: "2 min read",
  },
  {
    title: "Upcoming Car Launches in January 2025",
    excerpt: "Preview of exciting new models set to debut in the new year.",
    image: "/placeholder.svg?height=200&width=300",
    category: "Launches",
    date: "Dec 2, 2024",
    readTime: "6 min read",
  },
]

export function NewsSection() {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Automotive News</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest trends, launches, and developments in the automotive industry
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Featured Article */}
          <div className="lg:col-span-2">
            <Card className="group cursor-pointer transition-all duration-300 hover:shadow-2xl border-0 bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={featuredNews.image || "/placeholder.svg"}
                    alt={featuredNews.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <Badge className="bg-red-600 text-white">{featuredNews.category}</Badge>
                    {featuredNews.trending && (
                      <Badge variant="secondary" className="bg-orange-100 text-orange-800">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                    {featuredNews.title}
                  </h3>

                  <p className="text-gray-600 mb-6 leading-relaxed">{featuredNews.excerpt}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {featuredNews.date}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {featuredNews.readTime}
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-300"
                    >
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* News List */}
          <div className="space-y-6">
            {newsArticles.map((article, index) => (
              <Card
                key={index}
                className="group cursor-pointer transition-all duration-300 hover:shadow-lg border-0 bg-white"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <CardContent className="p-0">
                  <div className="flex">
                    <img
                      src={article.image || "/placeholder.svg"}
                      alt={article.title}
                      className="w-24 h-24 object-cover rounded-l-lg"
                    />
                    <div className="p-4 flex-1">
                      <Badge variant="secondary" className="text-xs mb-2">
                        {article.category}
                      </Badge>

                      <h4 className="font-semibold text-gray-900 mb-2 text-sm leading-tight group-hover:text-red-600 transition-colors">
                        {article.title}
                      </h4>

                      <p className="text-xs text-gray-600 mb-2 line-clamp-2">{article.excerpt}</p>

                      <div className="flex items-center text-xs text-gray-500 space-x-3">
                        <span>{article.date}</span>
                        <span>{article.readTime}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/news">
            <Button size="lg" variant="outline" className="px-8">
              View All News
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

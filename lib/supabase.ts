import { createClient } from "@supabase/supabase-js"

// Create a single supabase client for the entire app
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Create a singleton instance for client-side usage
export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Create a function for server-side usage (to avoid singleton issues in server components)
export const createServerSupabaseClient = () => {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}

// Type definitions for our database tables
export type Car = {
  id: string
  name: string
  brand: string
  model: string
  year: number
  price_min: number
  price_max: number
  fuel_type: string
  transmission: string
  engine_capacity: number
  mileage: number
  seating_capacity: number
  body_type: string
  image_url: string
  description: string
  features: string[]
  specifications: Record<string, any>
  status: string
  created_at: string
  updated_at: string
}

export type NewsArticle = {
  id: string
  title: string
  content: string
  excerpt: string
  author: string
  category: string
  tags: string[]
  image_url: string
  status: string
  published_at: string | null
  created_at: string
  updated_at: string
}

export type Review = {
  id: string
  car_id: string
  user_name: string
  user_email: string
  rating: number
  title: string
  content: string
  pros: string[]
  cons: string[]
  status: string
  created_at: string
  updated_at: string
}

export type ContactLead = {
  id: string
  name: string
  email: string
  phone: string
  message: string
  source: string
  status: string
  created_at: string
  updated_at: string
}

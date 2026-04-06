-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create cars table
CREATE TABLE IF NOT EXISTS cars (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  brand VARCHAR(100) NOT NULL,
  model VARCHAR(100) NOT NULL,
  year INTEGER NOT NULL,
  price_min INTEGER NOT NULL,
  price_max INTEGER NOT NULL,
  fuel_type VARCHAR(50) NOT NULL,
  transmission VARCHAR(50) NOT NULL,
  engine_capacity DECIMAL(3,1),
  mileage DECIMAL(4,1),
  seating_capacity INTEGER,
  body_type VARCHAR(50),
  image_url TEXT,
  description TEXT,
  features TEXT[],
  specifications JSONB,
  status VARCHAR(20) DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create news_articles table
CREATE TABLE IF NOT EXISTS news_articles (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(500) NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  author VARCHAR(100) NOT NULL,
  category VARCHAR(100) NOT NULL,
  tags TEXT[],
  image_url TEXT,
  status VARCHAR(20) DEFAULT 'draft',
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create reviews table
CREATE TABLE IF NOT EXISTS reviews (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  car_id UUID REFERENCES cars(id) ON DELETE CASCADE,
  user_name VARCHAR(100) NOT NULL,
  user_email VARCHAR(255) NOT NULL,
  rating INTEGER NOT NULL CHECK (rating >= 1 AND rating <= 5),
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  pros TEXT[],
  cons TEXT[],
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contact_leads table
CREATE TABLE IF NOT EXISTS contact_leads (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  message TEXT,
  source VARCHAR(50) DEFAULT 'contact_form',
  status VARCHAR(20) DEFAULT 'new',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_cars_brand ON cars(brand);
CREATE INDEX IF NOT EXISTS idx_cars_fuel_type ON cars(fuel_type);
CREATE INDEX IF NOT EXISTS idx_cars_price ON cars(price_min, price_max);
CREATE INDEX IF NOT EXISTS idx_cars_status ON cars(status);

CREATE INDEX IF NOT EXISTS idx_news_status ON news_articles(status);
CREATE INDEX IF NOT EXISTS idx_news_category ON news_articles(category);
CREATE INDEX IF NOT EXISTS idx_news_published ON news_articles(published_at);

CREATE INDEX IF NOT EXISTS idx_reviews_car_id ON reviews(car_id);
CREATE INDEX IF NOT EXISTS idx_reviews_status ON reviews(status);
CREATE INDEX IF NOT EXISTS idx_reviews_rating ON reviews(rating);

CREATE INDEX IF NOT EXISTS idx_contact_status ON contact_leads(status);
CREATE INDEX IF NOT EXISTS idx_contact_created ON contact_leads(created_at);

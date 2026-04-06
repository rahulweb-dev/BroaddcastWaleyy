-- Enable Row Level Security
ALTER TABLE cars ENABLE ROW LEVEL SECURITY;
ALTER TABLE news_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_leads ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public can view active cars" ON cars
  FOR SELECT USING (status = 'active');

CREATE POLICY "Public can view published articles" ON news_articles
  FOR SELECT USING (status = 'published');

CREATE POLICY "Public can view approved reviews" ON reviews
  FOR SELECT USING (status = 'approved');

-- Admin policies (you'll need to adjust these based on your auth setup)
CREATE POLICY "Admin full access cars" ON cars
  FOR ALL USING (true);

CREATE POLICY "Admin full access articles" ON news_articles
  FOR ALL USING (true);

CREATE POLICY "Admin full access reviews" ON reviews
  FOR ALL USING (true);

CREATE POLICY "Admin full access contacts" ON contact_leads
  FOR ALL USING (true);

-- Allow public to insert reviews and contact leads
CREATE POLICY "Public can insert reviews" ON reviews
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Public can insert contact leads" ON contact_leads
  FOR INSERT WITH CHECK (true);

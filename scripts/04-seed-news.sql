-- Insert sample news articles
INSERT INTO news_articles (title, content, excerpt, author, category, tags, image_url, status, published_at) VALUES
('Top 10 Cars to Buy in 2024', 'Here are the best cars you should consider buying in 2024. From fuel-efficient hatchbacks to premium SUVs, we have covered all segments...', 'Discover the best cars to buy in 2024 across all segments', 'CarWale Editorial', 'Buying Guide', ARRAY['2024', 'buying guide', 'best cars'], '/placeholder.svg?height=200&width=400', 'published', NOW() - INTERVAL '2 days'),

('Electric Cars: The Future is Here', 'Electric vehicles are revolutionizing the automotive industry. With government support and improving infrastructure...', 'Everything you need to know about electric cars in India', 'Rajesh Kumar', 'Electric Vehicles', ARRAY['electric', 'EV', 'future'], '/placeholder.svg?height=200&width=400', 'published', NOW() - INTERVAL '5 days'),

('New Car Launches This Month', 'Several exciting new cars are launching this month. From Maruti Suzuki to Hyundai, here are all the upcoming launches...', 'Latest car launches and their expected prices', 'Priya Sharma', 'Launches', ARRAY['launches', 'new cars', 'upcoming'], '/placeholder.svg?height=200&width=400', 'published', NOW() - INTERVAL '1 day'),

('Car Maintenance Tips for Monsoon', 'Monsoon season requires special care for your car. Here are essential maintenance tips to keep your vehicle in top condition...', 'Essential car care tips for the rainy season', 'Amit Singh', 'Maintenance', ARRAY['maintenance', 'monsoon', 'tips'], '/placeholder.svg?height=200&width=400', 'published', NOW() - INTERVAL '7 days'),

('Best Family Cars Under 15 Lakhs', 'Looking for a family car under 15 lakhs? We have compiled a list of the best options available in the market...', 'Top family car recommendations within budget', 'Sneha Patel', 'Buying Guide', ARRAY['family cars', 'budget', 'under 15 lakhs'], '/placeholder.svg?height=200&width=400', 'draft', NULL);

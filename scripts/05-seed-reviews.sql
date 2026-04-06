-- Insert sample reviews
INSERT INTO reviews (car_id, user_name, user_email, rating, title, content, pros, cons, status) VALUES
((SELECT id FROM cars WHERE name = 'Maruti Suzuki Swift' LIMIT 1), 'Rahul Verma', 'rahul@example.com', 4, 'Great car for city driving', 'I have been driving Swift for 6 months now. It is perfect for city commuting with excellent fuel efficiency.', ARRAY['Excellent mileage', 'Easy to drive', 'Good build quality'], ARRAY['Limited boot space', 'Rear seat comfort'], 'approved'),

((SELECT id FROM cars WHERE name = 'Hyundai Creta' LIMIT 1), 'Priya Singh', 'priya@example.com', 5, 'Perfect family SUV', 'Creta has been an amazing experience. The features and comfort it offers are outstanding.', ARRAY['Spacious interior', 'Great features', 'Smooth ride'], ARRAY['Slightly expensive', 'Average mileage'], 'approved'),

((SELECT id FROM cars WHERE name = 'Tata Nexon' LIMIT 1), 'Amit Kumar', 'amit@example.com', 5, 'Best in safety', 'Nexon EV is fantastic. Zero emissions and great performance. Highly recommended for eco-conscious buyers.', ARRAY['5-star safety', 'Zero emissions', 'Good performance'], ARRAY['Charging infrastructure', 'Higher initial cost'], 'approved'),

((SELECT id FROM cars WHERE name = 'Honda City' LIMIT 1), 'Neha Gupta', 'neha@example.com', 4, 'Reliable sedan', 'Honda City has been my companion for long drives. Very reliable and comfortable.', ARRAY['Reliable engine', 'Comfortable seats', 'Good resale value'], ARRAY['Road noise', 'Average rear space'], 'pending'),

((SELECT id FROM cars WHERE name = 'Toyota Fortuner' LIMIT 1), 'Vikash Sharma', 'vikash@example.com', 5, 'Premium SUV experience', 'Fortuner is the king of SUVs. Perfect for both city and highway driving.', ARRAY['Powerful engine', 'Premium feel', 'Great off-road capability'], ARRAY['High maintenance cost', 'Fuel consumption'], 'approved');

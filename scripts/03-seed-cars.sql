-- Insert sample car data
INSERT INTO cars (name, brand, model, year, price_min, price_max, fuel_type, transmission, engine_capacity, mileage, seating_capacity, body_type, image_url, description, features, specifications) VALUES
('Maruti Suzuki Swift', 'Maruti Suzuki', 'Swift', 2024, 599000, 899000, 'Petrol', 'Manual', 1.2, 23.2, 5, 'Hatchback', '/placeholder.svg?height=200&width=300', 'Popular hatchback with excellent fuel efficiency', ARRAY['ABS', 'Airbags', 'Power Steering', 'AC'], '{"engine": "1.2L K-Series", "power": "90 PS", "torque": "113 Nm"}'),

('Hyundai Creta', 'Hyundai', 'Creta', 2024, 1099000, 1999000, 'Petrol', 'Automatic', 1.5, 17.4, 5, 'SUV', '/placeholder.svg?height=200&width=300', 'Premium compact SUV with advanced features', ARRAY['Sunroof', 'Touchscreen', 'Cruise Control', 'Wireless Charging'], '{"engine": "1.5L Turbo GDI", "power": "160 PS", "torque": "253 Nm"}'),

('Tata Nexon', 'Tata', 'Nexon', 2024, 799000, 1599000, 'Electric', 'Automatic', 0.0, 312, 5, 'SUV', '/placeholder.svg?height=200&width=300', '5-star safety rated compact SUV', ARRAY['5-Star Safety', 'Harman Audio', 'iRA Connected Features'], '{"motor": "Permanent Magnet Synchronous", "power": "143 PS", "torque": "250 Nm"}'),

('Mahindra Thar', 'Mahindra', 'Thar', 2024, 1399000, 1699000, 'Diesel', 'Manual', 2.2, 15.2, 4, 'SUV', '/placeholder.svg?height=200&width=300', 'Iconic off-road SUV', ARRAY['4WD', 'Convertible Top', 'Off-road Tyres'], '{"engine": "2.2L mHawk", "power": "130 PS", "torque": "300 Nm"}'),

('Honda City', 'Honda', 'City', 2024, 1199000, 1699000, 'Petrol', 'CVT', 1.5, 17.8, 5, 'Sedan', '/placeholder.svg?height=200&width=300', 'Premium sedan with Honda reliability', ARRAY['Honda SENSING', 'Sunroof', 'Alexa Connectivity'], '{"engine": "1.5L i-VTEC", "power": "121 PS", "torque": "145 Nm"}'),

('Toyota Fortuner', 'Toyota', 'Fortuner', 2024, 3299000, 4999000, 'Diesel', 'Automatic', 2.8, 14.2, 7, 'SUV', '/placeholder.svg?height=200&width=300', 'Premium 7-seater SUV', ARRAY['4WD', 'Leather Seats', 'JBL Audio', '360 Camera'], '{"engine": "2.8L Turbo Diesel", "power": "204 PS", "torque": "500 Nm"}'),

('Kia Seltos', 'Kia', 'Seltos', 2024, 1099000, 1999000, 'Petrol', 'Automatic', 1.5, 16.8, 5, 'SUV', '/placeholder.svg?height=200&width=300', 'Feature-rich compact SUV', ARRAY['UVO Connect', 'Bose Audio', 'Ventilated Seats'], '{"engine": "1.5L Turbo GDI", "power": "160 PS", "torque": "253 Nm"}'),

('Maruti Suzuki Baleno', 'Maruti Suzuki', 'Baleno', 2024, 649000, 999000, 'Petrol', 'Manual', 1.2, 22.9, 5, 'Hatchback', '/placeholder.svg?height=200&width=300', 'Premium hatchback with spacious interior', ARRAY['SmartPlay Studio', 'Cruise Control', 'Auto AC'], '{"engine": "1.2L DualJet", "power": "90 PS", "torque": "113 Nm"}'),

('Hyundai Verna', 'Hyundai', 'Verna', 2024, 1099000, 1799000, 'Petrol', 'Automatic', 1.5, 18.4, 5, 'Sedan', '/placeholder.svg?height=200&width=300', 'Stylish sedan with premium features', ARRAY['BlueLink', 'Wireless Charging', 'Bose Audio'], '{"engine": "1.5L Turbo GDI", "power": "160 PS", "torque": "253 Nm"}'),

('MG Hector', 'MG', 'Hector', 2024, 1499000, 2199000, 'Petrol', 'CVT', 1.5, 14.2, 5, 'SUV', '/placeholder.svg?height=200&width=300', 'Internet-enabled SUV', ARRAY['i-SMART', 'Panoramic Sunroof', 'Infinity Audio'], '{"engine": "1.5L Turbo", "power": "143 PS", "torque": "250 Nm"}');

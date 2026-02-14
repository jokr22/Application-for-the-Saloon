-- Database Schema for Apon Saloon

-- Create database
-- CREATE DATABASE apon_saloon;

-- Connect to the database
-- \c apon_saloon;

-- Services table
CREATE TABLE IF NOT EXISTS services (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    duration INTEGER NOT NULL, -- in minutes
    image VARCHAR(500),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Appointments table
CREATE TABLE IF NOT EXISTS appointments (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR(255) NOT NULL,
    customer_phone VARCHAR(50) NOT NULL,
    customer_email VARCHAR(255),
    service_id INTEGER REFERENCES services(id),
    appointment_date DATE NOT NULL,
    appointment_time TIME NOT NULL,
    status VARCHAR(50) DEFAULT 'pending', -- pending, confirmed, completed, cancelled
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Gallery table
CREATE TABLE IF NOT EXISTS gallery (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    category VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert sample services
INSERT INTO services (name, description, price, duration, image) VALUES
('Haircut', 'Professional haircut with styling', 15.00, 30, 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=400'),
('Hair Coloring', 'Full hair coloring service', 50.00, 120, 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=400'),
('Hair Styling', 'Professional hair styling', 25.00, 45, 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=400'),
('Facial Treatment', 'Rejuvenating facial treatment', 40.00, 60, 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=400'),
('Manicure', 'Classic manicure service', 20.00, 30, 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=400'),
('Pedicure', 'Relaxing pedicure service', 25.00, 45, 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=400'),
('Hair Spa', 'Deep conditioning hair spa', 35.00, 60, 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=400'),
('Beard Trim', 'Professional beard trimming', 10.00, 20, 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=400');

-- Insert sample gallery images
INSERT INTO gallery (title, image_url, category) VALUES
-- Haircut category (5 images)
('Modern Haircut', 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800', 'haircut'),
('Classic Fade', 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800', 'haircut'),
('Trendy Cut', 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800', 'haircut'),
('Short Cut', 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800', 'haircut'),
('Layered Cut', 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800', 'haircut'),

-- Hair Coloring category (5 images)
('Hair Color', 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800', 'coloring'),
('Blonde Highlights', 'https://images.unsplash.com/photo-1560869713-bf57afe34fe7?w=800', 'coloring'),
('Red Hair Color', 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800', 'coloring'),
('Brunette Color', 'https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=800', 'coloring'),
('Balayage', 'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?w=800', 'coloring'),

-- Hair Styling category (5 images)
('Hair Style', 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=800', 'styling'),
('Wavy Hair', 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800', 'styling'),
('Curly Styling', 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800', 'styling'),
('Straight Style', 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800', 'styling'),
('Updo Style', 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800', 'styling'),

-- Skincare/Facial category (5 images)
('Facial Treatment', 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800', 'skincare'),
('Deep Facial', 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800', 'skincare'),
('Anti-Aging Facial', 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800', 'skincare'),
('Hydrating Facial', 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=800', 'skincare'),
('Facial Massage', 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800', 'skincare'),

-- Nails/Manicure/Pedicure category (7 images)
('Manicure', 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800', 'nails'),
('Pedicure', 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800', 'nails'),
('Nail Art', 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800', 'nails'),
('Gel Manicure', 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800', 'nails'),
('Nail Polish', 'https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=800', 'nails'),
('Foot Spa', 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?w=800', 'nails'),
('Acrylic Nails', 'https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800', 'nails'),

-- Spa category (5 images)
('Hair Spa', 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=800', 'spa'),
('Hair Treatment', 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800', 'spa'),
('Scalp Treatment', 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800', 'spa'),
('Deep Conditioning', 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=800', 'spa'),
('Relaxing Spa', 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800', 'spa'),

-- Grooming/Beard category (5 images)
('Beard Trim', 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800', 'grooming'),
('Beard Styling', 'https://images.unsplash.com/photo-1503951914875-452162b1f1f1?w=800', 'grooming'),
('Classic Beard', 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800', 'grooming'),
('Beard Grooming', 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800', 'grooming'),
('Mustache Style', 'https://images.unsplash.com/photo-1503951914875-452162b1f1f1?w=800', 'grooming');

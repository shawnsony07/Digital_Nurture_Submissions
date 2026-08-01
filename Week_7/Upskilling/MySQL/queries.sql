-- ANSI SQL for Event Portal
CREATE TABLE Users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    city VARCHAR(100) NOT NULL,
    registration_date DATE NOT NULL
);

-- 1. User Upcoming Events
SELECT e.* FROM Events e JOIN Registrations r ON e.event_id = r.event_id 
WHERE r.user_id = 1 AND e.status = 'upcoming' ORDER BY e.start_date;

-- 2. Top Rated Events
SELECT event_id, AVG(rating) as avg_rating FROM Feedback 
GROUP BY event_id HAVING COUNT(*) >= 10 ORDER BY avg_rating DESC;

-- 11. Daily New User Count
SELECT registration_date, COUNT(*) FROM Users 
WHERE registration_date >= DATE_SUB(CURDATE(), INTERVAL 7 DAY) 
GROUP BY registration_date;

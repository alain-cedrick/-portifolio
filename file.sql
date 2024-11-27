CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,   -- Unique ID for each user
    email VARCHAR(255) NOT NULL UNIQUE,       -- User's email (must be unique)
    username VARCHAR(255) NOT NULL UNIQUE,    -- User's chosen username (must be unique)
    password_hash VARCHAR(255) NOT NULL,      -- Hashed password for security
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,  -- Timestamp when the user registers
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP -- Timestamp for last update
);


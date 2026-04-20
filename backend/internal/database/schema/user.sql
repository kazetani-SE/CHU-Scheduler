CREATE TYPE gender_type AS ENUM('male','female','other');

CREATE TABLE users (
    id UUID PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    gender gender_type,
    email VARCHAR(255) UNIQUE,
    phone VARCHAR(20) UNIQUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

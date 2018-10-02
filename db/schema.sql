CREATE DATABASE burger_db;
USE burger_db;

CREATE TABLE burger (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN
)

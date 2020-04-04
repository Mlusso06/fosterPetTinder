CREATE DATABASE IF NOT EXISTS fosterPets_db;
USE fosterPets_db;

DROP TABLE IF EXISTS cats;

CREATE TABLE cats(
    id int NOT NULL AUTO_INCREMENT,
    cat_name VARCHAR (255) NOT NULL,
    cat_gender VARCHAR(1),
    cat_age VARCHAR(50),
    kid_friendly BOOLEAN,
    animal_friendly BOOLEAN,
    PRIMARY KEY (id)
);

CREATE TABLE dogs(
    id int NOT NULL AUTO_INCREMENT,
    dog_name VARCHAR (255) NOT NULL,
    dog_gender VARCHAR(1),
    dog_age VARCHAR(50),
    kid_friendly BOOLEAN,
    animal_friendly BOOLEAN,
    PRIMARY KEY (id)
);

CREATE TABLE petComments(
    id INT NOT NULL AUTO_INCREMENT,
    author VARCHAR(50) NOT NULL,
    comment VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_updated TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

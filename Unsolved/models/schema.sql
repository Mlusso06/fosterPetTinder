CREATE DATABASE IF NOT EXISTS fosterPets_db;
USE fosterPets_db;

DROP TABLE IF EXISTS cats;

CREATE TABLE cats(
    id int NOT NULL AUTO_INCREMENT,
    cat_name varchar (255) NOT NULL,
    cat_gender varchar(1),
    cat_age varchar(50),
    kid_friendly BOOLEAN,
    animal_friendly BOOLEAN,
    PRIMARY KEY (id)
);

CREATE TABLE dogs(
    id int NOT NULL AUTO_INCREMENT,
    dog_name varchar (255) NOT NULL,
    dog_gender varchar(1),
    dog_age varchar(50),
    kid_friendly BOOLEAN,
    animal_friendly BOOLEAN,
    PRIMARY KEY (id)
)


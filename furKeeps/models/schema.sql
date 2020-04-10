CREATE DATABASE IF NOT EXISTS fosterPets_db;
USE fosterPets_db;

CREATE DATABASE IF NOT EXISTS fosterPets_db;
USE fosterPets_db;
​
DROP TABLE IF EXISTS pets;
​
CREATE TABLE pets(
    id int NOT NULL AUTO_INCREMENT,
    pet_name VARCHAR (255) NOT NULL,
    pet_type VARCHAR (50) NOT NULL,
    pet_gender VARCHAR(1),
    pet_age VARCHAR(50),
    kid_friendly BOOLEAN,
    animal_friendly BOOLEAN,
    match_score INT NOT NULL,
    pet_photo VARCHAR (500) NOT NULL,
    match_score INT NOT NULL,
    PRIMARY KEY (id)
);
​
CREATE TABLE petComments(
    id INT NOT NULL AUTO_INCREMENT,
    author VARCHAR(50) NOT NULL,
    comment VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    last_updated TIMESTAMP NOT NULL ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);


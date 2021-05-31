CREATE SCHEMA `uniquiry`; 
USE `uniquiry`;


SET NAMES utf8;
SET character_set_client = utf8mb4;


CREATE TABLE `Users` (
	`userID` VARCHAR(45) UNIQUE NOT NULL,
    `passWord` VARCHAR(15) NOT NULL
		CHECK (LENGTH(`passWord`) >= 6 AND LENGTH(`passWord`) <= 15),
    PRIMARY KEY(`userID`)
    );
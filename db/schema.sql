DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

-- Created the table "schools" 
CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  name varchar(50),
  devoured boolean,
  primary key (id)
);

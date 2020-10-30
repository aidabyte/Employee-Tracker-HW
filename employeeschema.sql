DROP DATABASE IF EXISTS employee_db;

CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE employee (
id int AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id int,
PRIMARY KEY(id)
);



INSERT INTO employee(first_name, last_name, role_id)
VALUE ("Mark", "Jones", 1);
INSERT INTO employee(first_name, last_name, role_id)
VALUE ("Roberta", "Smith", 1);


CREATE TABLE role (
id int AUTO_INCREMENT NOT NULL,
title VARCHAR(30) NOT NULL,
salary DECIMAL(10,2) NULL,
department_id int (15) NOT NULL,
PRIMARY KEY (id)
);


CREATE TABLE department (
id int AUTO_INCREMENT NOT NULL,
name VARCHAR(30) NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (department_id) references department(id)
);








# EXPRESS API PROJECT

//MySQL commands
//mySql table commands

//commandLine commands
//shOW DATABASES
SHOW databases;

//use a particular database i.e. my database name is `database1.1.0`:
USE database1.1.0;

//Show tables in the database
SHOW TABLES;

//create a database `sampleBD`
CREATE DATABASE sampleDB;

//create table `userinfo`
CREATE TABLE usersinfo (username VARCHAR(255), password VARCHAR(255), id (INT));

//shOW recently created table userinfo
DESCRIBE userinfo;

//SELECT ALL
SELECT \* FROM `database1.1.0`.userinfo;

// add to table
INSERT INTO `database1.1.0`.`userinfo` (`firstname`, `lastname`, `id`) VALUES ('ade', 'az', '1');

// remove from item from table (userinfo) where ID is the primary key
DELETE FROM `database1.1.0`.`userinfo` WHERE (`id` = '2');

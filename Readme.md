# EXPRESS API PROJECT

This is a personal Node Js API project using Express Js and AWS resources(mysql, S3 bucket, and Cloudfront).

- [x] Localhost database instance
- [ ] Creating mysql database instance from AWS
- [ ] Use S3 Bucket for uploading static assets(images and videos)
- [ ] Deploy API to a hosting server
- [ ] Create a frontend application to consume API

# Basic mysql2 database commands

`SELECT * FROM userinfo`

`INSERT INTO userinfo VALUES ("${firstname}", '${lastname}', '${id}')`

# Basic mysql database CLI commands

`SHOW databases;`

`USE database1.1.0;`

`SHOW TABLES;`

`CREATE DATABASE sampleDB;`

`CREATE TABLE usersinfo (username VARCHAR(255), password VARCHAR(255), id (INT));`

`DESCRIBE userinfo;`

`SELECT * FROM database1.1.0.userinfo;`

`INSERT INTO database1.1.0.userinfo ('firstname', 'lastname', 'id') VALUES ('ade', 'az', '1');`

`DELETE FROM database1.1.0.userinfo WHERE ('id' = '2');`

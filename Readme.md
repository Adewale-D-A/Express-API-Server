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

`'SELECT * FROM table WHERE id=? LIMIT ?, 5',[ user_id, start ]`

`'SELECT * FROM 'table' WHERE 'name' = "Page" AND 'age' > 45'`

# Basic mysql database CLI commands

`CREATE DATABASE sampleDB;`

`SHOW databases;`

`USE database1.1.0;`

`CREATE TABLE usersinfo (username VARCHAR(255), password VARCHAR(255), id (INT), date DATE);`

`SHOW TABLES;`

`DESCRIBE userinfo;`

`SELECT * FROM userinfo WHERE id > 5`

`INSERT INTO userinfo ('firstname', 'lastname', 'id') VALUES ('ade', 'az', '1');`

`DELETE FROM userinfo WHERE ('id' = '2' AND name="shola");`

`UPDATE userinfo SET birth = '1989-08-31' WHERE name = 'Bowser';`

**_mysql_ formatS**
_Date format:_ `YYYY-MM-DD`

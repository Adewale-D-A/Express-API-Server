const mysql = require("mysql2");
const databaseSecrets = require("./privateData");

module.exports = mysql.createConnection({
  host: "localhost",
  user: databaseSecrets.user,
  password: databaseSecrets.password,
  database: databaseSecrets.name,
});

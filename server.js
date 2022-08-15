const express = require("express");
const server = express();

//use of JWT
var jwt = require("jsonwebtoken");

//db instance initialization
const db = require("./databaseCredentials");
db.connect();

const DatabaseQuery = require("./queryDatabase");
const vanillaQueries = require("./vanillaQueries");

server.use(express.urlencoded({ extended: false }));
server.use(express.json());

// Querying Database
server.use("/database/query", DatabaseQuery);

//Normal queries
server.use("/vanilla/query", vanillaQueries);

server.post("/login", (req, res) => {
  const { username, password } = req.body;
  db.query(
    `SELECT * FROM user_registration WHERE (username = "${username}" AND password="${password}")`,
    (err, result) => {
      if (err) {
        res.status(400).send({
          success: false,
          message: err,
        });
      }
      if (result.length === 0) {
        res.status(200).send({
          message: "no user found in the database",
        });
      }
      if (result.length !== 0) {
        const token = jwt.sign(
          { username: username, password: password },
          "form",
          { expiresIn: "1h" }
        );
        res.status(200).send({
          success: true,
          message: result,
          token: token,
        });
      }
    }
  );
});

//authorize user
server.post("/verify", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  jwt.verify(token, "form", (error, verify) => {
    if (error) {
      res.status(401).send({
        success: false,
        message: error,
      });
    }
    res.status(200).send({
      success: true,
      message: verify,
    });
  });
});
//localhost:5000/
server.get("/", (request, response) => {
  response.status(200).send("Hello, this is the home page");
});

server.listen(5000, () => {
  console.log("my server is listening...");
});
// db.end();

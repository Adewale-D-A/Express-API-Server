const express = require("express");
const server = express();

const DatabaseQuery = require("./queryDatabase");
const vanillaQueries = require("./vanillaQueries");

server.use(express.urlencoded({ extended: false }));
server.use(express.json());

// Querying Database
server.use("/database/query", DatabaseQuery);

//Normal queries
server.use("/vanilla/query", vanillaQueries);

//localhost:5000/
server.get("/", (request, response) => {
  response.status(200).send("Hello, this is the home page");
});

server.listen(5000, () => {
  console.log("my server is listening...");
});
// db.end();

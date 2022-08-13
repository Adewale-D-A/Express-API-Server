const express = require("express");
const server = express();
const router = express.Router();

//localhost:5000/paramAde
router.get("/params:name", (request, response) => {
  const { name } = request.params;
  response.status(200).send(`your params value is ${name}`);
});

//localhost:5000/query?value=17
router.get("/query", (request, response) => {
  const { value } = request.query;
  response.status(200).send(`your query value is ${value}`);
});

module.exports = router;

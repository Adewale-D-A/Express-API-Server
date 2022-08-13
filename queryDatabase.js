const express = require("express");
const router = express.Router();

const db = require("./databaseCredentials");
db.connect();

//get all items in a table
router.get("/selectall", (request, response) => {
  db.query("SELECT * FROM `userinfo`", (err, results) => {
    if (err) {
      response
        .status(404)
        .send({ success: false, message: "resource not found" });
    }
    response.status(200).send({ success: true, data: results });
  });
});

//insert into a database
router.post("/insertinto", (request, response) => {
  const { firstname, lastname, id } = request.body;
  if (firstname && lastname && id) {
    db.query(
      `INSERT INTO userinfo VALUES ("${firstname}", '${lastname}', '${id}')`,
      (err, result) => {
        if (err) {
          response.status(400).send({
            success: false,
            message: "could not add data into database",
            response: {
              firstname: "random",
              lastname: "random2",
              id: "3",
            },
          });
        }
        response.status(200).send({ success: true, data: request.body });
      }
    );
  } else {
    response.status(400).send({
      success: false,
      message: "Bad payload",
      response: {
        firstname: "random",
        lastname: "random2",
        id: "3",
      },
    });
  }
});

//post into database
//localhost:5000/post
router.post("/data/payload", (request, response) => {
  const incomingPayload = request.body;
  console.log(incomingPayload);
  response.status(200).send({ success: true, data: incomingPayload });
});

module.exports = router;

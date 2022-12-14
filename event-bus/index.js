const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");

const app = express();
app.use(bodyParser.json());

app.post("/events", (req, res) => {
  const event = req.body;

  axios.post("http://localhost:4000/events", event).catch((err) => console.log(err.message));
  axios.post("http://localhost:5000/events", event).catch((err) => console.log(err.message));
  axios.post("http://localhost:7000/events", event).catch((err) => console.log(err.message));
  axios.post("http://localhost:8000/events", event).catch((err) => console.log(err));

  res.send({ status: "OK" });
});

app.listen(4005, () => {
  console.log("Listening on 4005");
});

const express = require("express");
//const mongoose = require("mongoose");
//const path = require("path");

//const routes = require("./routes");
const { User } = require("./models/User");
const db = require("./config/connection");
const routes = require("../src/routes");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
});

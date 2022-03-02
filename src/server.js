const express = require("express");

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

const express = require("express");
const db = require("./config/connection");
//const routes = require("../src/controller");

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Please go to /api.");
});
// app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
  });
});

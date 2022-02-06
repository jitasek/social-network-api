const router = require("express").Router();
//const db = require("./config/connection");
//const mongoose = require("mongoose");

const apiRoutes = require("./api");

router.use("/api", apiRoutes);
router.get("/", (req, res) => {
  res.send("Wrong route. Please go to /api.");
});

module.exports = router;

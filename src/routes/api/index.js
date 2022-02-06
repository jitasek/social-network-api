const router = require("express").Router();
//const db = require("./config/connection");
//const mongoose = require("mongoose");

const userRoutes = require("./user");
//const thoughtRoutes = require("./thought");
//const reactionRoutes = require("./reaction");

router.use("/users", userRoutes);
//router.use("/thoughts", thoughtRoutes)
//router.use("/reactions", reactionRoutes);

module.exports = router;

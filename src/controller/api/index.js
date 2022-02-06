const router = require("express").Router();

const userRoutes = require("./user");
//const thoughtRoutes = require("./user");
//const reactionRoutes = require("./user");

router.use("/users", userRoutes);
//router.use("/thoughts", thoughtRoutes)
//router.use("/reactions", reactionRoutes);

module.exports = router;

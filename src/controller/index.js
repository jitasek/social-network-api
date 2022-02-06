const router = require("express").Router();
const apiRoutes = require("./api");

router.use("/api", apiRoutes);
router.get("/", (req, res) => {
  res.send("Please go to /api.");
});

module.exports = router;

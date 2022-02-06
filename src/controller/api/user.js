const router = require("express").Router();
//const { User } = require("../../models/");

router.get("/", (req, res) => {
  res.json({ msg: "You will get a list of users" });
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.json({ msg: "You will get a list of users" });
});

module.exports = router;

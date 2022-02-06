const router = require("express").Router();

const { User } = require("../../models/");

router.get("/", async (req, res) => {
  const users = await User.find({});
  res.json({ users });
});

router.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      ...req.body,
    });
    res.json({ newUser, msg: "New user created" });
  } catch (error) {
    console.log(error);
    res.status(500).send("Something went wrong while creating the user.");
  }
});

module.exports = router;

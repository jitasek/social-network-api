const router = require("express").Router();

const { User } = require("../../models/");

// Get all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find({});
    res.json({ users });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ msg: "Something went wrong while retrieving users." });
  }
});

// Get one user
router.get("/:id", async (req, res) => {
  try {
    const users = await User.find({ _id: req.params.id });
    res.json({ users });
  } catch (error) {
    res
      .status(500)
      .send({ msg: "Something went wrong while retrieving the user." });
  }
});

// Create user
router.post("/", async (req, res) => {
  try {
    const newUser = await User.create({
      ...req.body,
    });
    res.json({ newUser, msg: "New user created" });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ msg: "Something went wrong while creating the user." });
  }
});

module.exports = router;

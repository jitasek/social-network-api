const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
} = require("../../controller/api/user");

// users
router.route("/").get(getUsers).post(createUser);

// users/:userId
router.route("/:userId").get(getSingleUser);

module.exports = router;

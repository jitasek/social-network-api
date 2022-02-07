const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
} = require("../../controller/api/user");

// users
router.route("/").get(getUsers).post(createUser);

// users/:userId
router.route("/:userId").get(getSingleUser).put(updateUser);

module.exports = router;

const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controller/api/user");

// users
router.route("/").get(getUsers).post(createUser);

// users/:userId
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

module.exports = router;

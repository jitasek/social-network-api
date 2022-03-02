const router = require("express").Router();

const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controller/api/user");

// users
router.route("/").get(getUsers).post(createUser);

// users/:userId
router.route("/:userId").get(getSingleUser).put(updateUser).delete(deleteUser);

// users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).put(removeFriend);

module.exports = router;

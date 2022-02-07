const router = require("express").Router();

const { User } = require("../../models/");

// Get all users
module.exports = {
  async getUsers(req, res) {
    try {
      const users = await User.find({});
      res.json({ users });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ msg: "Something went wrong while retrieving users." });
    }
  },

  // Get one user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId }).select(
        "-__v"
      );
      // .populate([{path: "thoughts", select: "-__v"}, {path: "friends", select: "-__v"}]);
      if (!user) {
        res.status(404).json({ msg: "No user with this ID." });
      } else {
        res.json(user);
      }
    } catch (error) {
      res
        .status(500)
        .send({ msg: "Something went wrong while retrieving the user." });
    }
  },

  // Create user
  async createUser(req, res) {
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
  },

  // Update user
  async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      ).select("-__v");

      if (!user) {
        res.status(404).json({ msg: "No user with this ID." });
      } else {
        res.json(user);
      }
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ msg: "Something went wrong while updating the user." });
    }
  },

  // Delete user - TO DO (bonus): remove user's thoughts and responses too
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndRemove({ _id: req.params.userId });
      if (!user) {
        res.status(404).json({ msg: "No user with this ID." });
      } else {
        res.json({ msg: "User successfully deleted." });
      }
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ msg: "Something went wrong while deleting the user." });
    }
  },

  // add a friend = update user adding a friend to them
  async addFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );
      if (!user) {
        res.status(404).json({ msg: "No user with this ID." });
      } else {
        res.json(user);
      }
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ msg: "Something went wrong while updating the user." });
    }
  },

  // delete a friend = update user removing a friend of theirs
  async removeFriend(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { new: true }
      );
      if (!user) {
        res.status(404).json({ msg: "No user with this ID." });
      } else {
        res.json({ msg: "Friend successfully removed." });
      }
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ msg: "Something went wrong while deleting the user." });
    }
  },
};

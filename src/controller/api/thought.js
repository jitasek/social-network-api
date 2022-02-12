const router = require("express").Router();

const { Thought, User } = require("../../models/");

module.exports = {
  // Get all thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find({});
      res.json({ thoughts });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ msg: "Something went wrong while retrieving thoughts." });
    }
  },
  // Get single thought

  async getSingleThought(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })
        .select("-__v")
        .populate({ path: "username", select: "-__v" });
      if (!thought) {
        res.status(404).json({ msg: "No thought with this ID." });
      } else {
        res.json(thought);
      }
    } catch (error) {
      res
        .status(500)
        .send({ msg: "Something went wrong while retrieving the thought." });
    }
  },

  // Create thought - not working correctly at the moment
  async createThought(req, res) {
    try {
      const newThought = await Thought.create({
        ...req.body,
      });
      // Update user with their new thought
      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $push: { thoughts: newThought } },
        { new: true }
      );
      if (!user) {
        res.status(404).json({ msg: "No user with this ID." });
      }
      res.json({ user, msg: "Thought created" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ msg: "Something went wrong while creating the thought." });
    }
  },
  // Update thought
  async updateThought(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { new: true }
      ).select("-__v");

      if (!thought) {
        res.status(404).json({ msg: "No thought with this ID." });
      } else {
        res.json(thought);
      }
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ msg: "Something went wrong while updating the thought." });
    }
  },
  // Delete thought
  async deleteThought(req, res) {
    try {
      await Thought.deleteOne({
        _id: req.params.thoughtId,
      });
      // if (!deletedThought) {
      //   res.status(404).json({ msg: "No thought with this ID." });
      // } else {
      //   // Delete this thought from its user
      //   const user = await User.updateOne(
      //     { _id: req.params._id },
      //     { $pull: { thoughts: deletedThought._id } }
      //   );
      //   console.log(user);
      //   if (!user) {
      //     res.status(404).json({ msg: "No user with this ID." });
      //   } else {
      //     res.json({ msg: "User also successfully updated." });
      //   }
      // }
      res.status(200).json({ msg: "Successfully deleted thought." });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ msg: "Something went wrong while deleting the thought." });
    }
  },

  // REACTIONS

  // Add reaction
  async addReaction(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { new: true }
      );
      if (!thought) {
        res.status(404).json({ msg: "No thought with this ID." });
      }
      res.json({ thought, msg: "New reaction added" });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ msg: "Something went wrong while adding the reaction." });
    }
  },

  // Delete reaction
};

//const router = require("express").Router();

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
  // Get one thought
  // Create thought - not working correctly at the moment
  async createThought(req, res) {
    try {
      const newThought = await Thought.create({
        ...req.body,
      });
      // Update user with their new thought
      const user = await User.findOneAndUpdate(
        { _id: req.body.username },
        { $push: { thoughts: newThought_id } },
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
        .send({ msg: "Something went wrong while creating the thought." });
    }
  },
  // Update thought
  // Delete thought
};

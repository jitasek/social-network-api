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

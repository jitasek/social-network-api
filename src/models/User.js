const mongoose = require("mongoose");

const validateEmail = function (email) {
  const regex = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  return regex.test(email);
};

// Schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    validate: [validateEmail, "Please fill in a valid email address. "],
  },
  // thoughts: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "Thought",
  //   },
  // ],
  // friends: [
  //   {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: "User",
  //   },
  // ],
});

// Create model
const User = mongoose.model("User", userSchema);

module.exports = User;

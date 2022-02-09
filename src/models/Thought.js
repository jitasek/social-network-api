const mongoose = require("mongoose");
const moment = require("moment");

// Schema
const thoughtSchema = new mongoose.Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) =>
        moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },
    username: [
      {
        type: String,
        required: true,
        //trim: true,
      },
    ],
    //reactions: [reactionSchema],
  },
  {
    toJSON: {
      virtuals: true,
      getters: true,
    },
    id: false,
    versionKey: false,
  }
);

// virtual property that retrieves the amount of reactoins per thought
thoughtSchema
  .virtual("reactionCount")
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Create model
const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;

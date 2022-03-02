const router = require("express").Router();

const {
  getThoughts,
  createThought,
  getSingleThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction,
} = require("../../controller/api/thought");

// thoughts

router.route("/").get(getThoughts).post(createThought);

// thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// thoughts/:thoughtId/reactions
router.route("/:thoughtId/reactions").post(addReaction);

// thoughts/:thoughtId/reactions/:reactionId
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

module.exports = router;

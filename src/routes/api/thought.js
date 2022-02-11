const router = require("express").Router();

const {
  getThoughts,
  createThought,
  getSingleThought,
  updateThought,
  deleteThought,
} = require("../../controller/api/thought");

// thoughts

router.route("/").get(getThoughts).post(createThought);

// thoughts/:thoughtId
router
  .route("/:thoughtId")
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// thoughts/:thoughtId/reactions - TO DO

module.exports = router;

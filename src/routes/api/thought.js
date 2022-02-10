const router = require("express").Router();

const {
  getThoughts,
  createThought,
  getSingleThought,
  updateThought,
} = require("../../controller/api/thought");

// thoughts

router.route("/").get(getThoughts).post(createThought);

// thoughts/:thoughtId
router.route("/:thoughtId").get(getSingleThought).put(updateThought);

// thoughts/:thoughtId/reactions

module.exports = router;

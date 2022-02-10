const router = require("express").Router();

const {
  getThoughts,
  createThought,
  getSingleThought,
} = require("../../controller/api/thought");

// thoughts

router.route("/").get(getThoughts).post(createThought);

// thoughts/:thoughtId
router.route("/:thoughtId").get(getSingleThought);

// thoughts/:thoughtId/reactions

module.exports = router;

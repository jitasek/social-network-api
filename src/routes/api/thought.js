const router = require("express").Router();

const { getThoughts, createThought } = require("../../controller/api/thought");

// thoughts

router.route("/").get(getThoughts).post(createThought);

// thoughts/:thoughtId/reactions

module.exports = router;

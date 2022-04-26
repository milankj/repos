const express = require("express");
const rootController = require("../controllers/root.controller");

const router = express.Router();

router.route("/").get(rootController.getRoot);

module.exports = router;
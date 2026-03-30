const express = require("express");
const router = express.Router();

const blankController = require("../controller/blankController");

router.get("/", blankController.getBlank);

module.exports = router;
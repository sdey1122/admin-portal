const express = require("express");
const router = express.Router();

const errorController = require("../controller/404Controller");

router.get("/", errorController.getError);

module.exports = router;
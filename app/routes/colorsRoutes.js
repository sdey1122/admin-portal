const express = require("express");
const router = express.Router();

const colorsController = require("../controller/colorsController");

router.get("/", colorsController.getColors);

module.exports = router;
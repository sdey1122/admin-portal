const express = require("express");
const router = express.Router();

const bordersController = require("../controller/bordersController");

router.get("/", bordersController.getBorders);

module.exports = router;
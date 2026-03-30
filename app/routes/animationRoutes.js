const express = require("express");
const router = express.Router();

const animationController = require("../controller/animationController");

router.get("/", animationController.getAnimation);

module.exports = router;
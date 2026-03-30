const express = require("express");
const router = express.Router();

const buttonsController = require("../controller/buttonsController");

router.get("/", buttonsController.getButtons);

module.exports = router;
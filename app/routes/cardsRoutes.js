const express = require("express");
const router = express.Router();

const cardsController = require("../controller/cardsController");

router.get("/", cardsController.getCards);

module.exports = router;
const express = require("express");
const router = express.Router();

const othersController = require("../controller/othersController");

router.get("/", othersController.getOthers);

module.exports = router;
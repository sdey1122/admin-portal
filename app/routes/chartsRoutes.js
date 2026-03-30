const express = require("express");
const router = express.Router();

const chartsController = require("../controller/chartsController");

router.get("/", chartsController.getCharts);

module.exports = router;
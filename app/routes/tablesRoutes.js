const express = require("express");
const router = express.Router();

const tablesController = require("../controller/tablesController");

router.get("/", tablesController.getTables);

module.exports = router;
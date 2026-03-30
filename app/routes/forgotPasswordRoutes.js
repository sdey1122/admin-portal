const express = require("express");
const router = express.Router();

const forgotPasswordController = require("../controller/forgotPasswordController");

router.get("/", forgotPasswordController.getForgotPassword);

module.exports = router;
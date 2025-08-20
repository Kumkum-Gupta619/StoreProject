const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");

// Public
router.post("/signup", authController.signup);  // register user
router.post("/login", authController.login);    // login

module.exports = router;

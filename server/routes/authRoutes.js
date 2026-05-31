const express = require("express");//API gateway
const router = express.Router();

const authController = require("../controllers/authController");

// ✅ Correct routes
router.post("/signup", authController.signup);
router.post("/login", authController.login);

module.exports = router;
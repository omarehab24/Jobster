const express = require("express");
const router = express.Router();
const { register, login, updateUser } = require("../controllers/auth");
const authenticateUser = require("../middleware/authentication");
const testUser = require("../middleware/testUser");
const rateLimiter = require("express-rate-limit");

const apiLimiter = rateLimiter({
  // 15 minutes
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: {
    msg: "Too many request from this IP, try again in 15 minutes",
  },
});

router.post("/register", apiLimiter, register);
router.post("/login", apiLimiter, login);
router.patch("/updateUser", authenticateUser, testUser, updateUser);

module.exports = router;

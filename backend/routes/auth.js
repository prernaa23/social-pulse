const express = require("express");
const router = express.Router();
// const passport = require("passport");
const { login, register } = require("../controllers/auth");

router.post("/register", register);
router.post("/login", login);

// router.get("/logout", users.logout);

module.exports = router;

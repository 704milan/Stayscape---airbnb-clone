const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveOriginalUrl } = require("../utils/middleware");
const userController = require("../controllers/users");

//signup user
router
  .route("/signup")
  .get(userController.signupForm)
  .post(wrapAsync(userController.signup));

//login user
router
  .route("/login")
  .get(userController.loginForm)
  .post(
    saveOriginalUrl,
    passport.authenticate("local", {
      failureRedirect: "/user/login",
      failureFlash: true,
    }),
    userController.login
  );

//logout user
router.route("/logout").get(userController.logout);

module.exports = router;

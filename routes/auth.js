const { check } = require("express-validator");
const passport = require("passport");
const {
  signUp,
  handleSignUp,
  handleLogin,
  handleLogout,
} = require("../controllers/auth");
const { validateUser } = require("../utils/validation");

const authRoute = require("express").Router();

authRoute.route("/sign-up").get(signUp).post(validateUser, handleSignUp);

authRoute
  .route("/login")
  .get(handleLogin)
  .post(
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/auth/login",
    })
  );

authRoute.get("/logout", handleLogout);

module.exports = authRoute;

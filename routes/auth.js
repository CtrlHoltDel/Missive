const passport = require("passport");
const {
  register,
  handleRegister,
  handleLogin,
  handleLogout,
} = require("../controllers/auth");

const authRoute = require("express").Router();

authRoute.route("/register").get(register).post(handleRegister);

authRoute
  .route("/login")
  .get(handleLogin)
  .post(
    passport.authenticate("local", {
      successRedirect: "/",
      failureRedirect: "/auth/login",
      failureMessage: true,
    })
  );

authRoute.get("/logout", handleLogout);

module.exports = authRoute;

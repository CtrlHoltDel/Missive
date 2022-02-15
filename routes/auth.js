const {
  serveRegister,
  handleRegister,
  serveLogin,
  handleLogout,
  loginPost,
} = require("../controllers/auth");

const authRoute = require("express").Router();

authRoute.route("/register").get(serveRegister).post(handleRegister);
authRoute.route("/login").get(serveLogin).post(loginPost);
authRoute.get("/logout", handleLogout);

module.exports = authRoute;

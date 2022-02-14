const { signUpUser } = require("../models/auth");

exports.handleSignUp = (req, res, next) => {
  const { username, password } = req.body;

  signUpUser(username, password)
    .then(() => {
      res.redirect("/auth/login");
    })
    .catch((err) => {
      next(err);
    });
};

exports.signUp = (req, res, next) => {
  res.render("sign-up-form");
};

exports.handleLogin = (req, res, next) => {
  res.render("login-form");
};

exports.handleLogout = (req, res, next) => {
  req.logOut();
  res.redirect("/");
};

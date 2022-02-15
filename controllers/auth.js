const { signUpUser } = require("../models/auth");

exports.handleRegister = (req, res, next) => {
  const { username, password, confirm } = req.body;

  signUpUser(username, password, confirm)
    .then(() => {
      res.redirect("/auth/login");
    })
    .catch((err) => {
      next(err);
    });
};

exports.register = (req, res, next) => {
  res.render("register-form");
};

exports.handleLogin = (req, res, next) => {
  let error = null;

  if (req.session.messages)
    error = req.session.messages[req.session.messages?.length - 1];

  res.render("login-form", { error });
};

exports.handleLogout = (req, res, next) => {
  req.logOut();
  res.redirect("/");
};

const passport = require("passport");
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

exports.serveRegister = (req, res, next) => {
  res.render("register-form");
};

exports.serveLogin = (req, res, next) => {
  res.render("login-form");
};

exports.loginPost = (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) return next(err);
    if (!user) return res.render("login-form", { error: info.message });
    req.login(user, (err) => {
      if (err) return next(err);
      res.redirect("/");
    });
  })(req, res, next);
};

exports.handleLogout = (req, res, next) => {
  req.logOut();
  res.redirect("/");
};

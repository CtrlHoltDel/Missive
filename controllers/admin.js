const { User } = require("../models/Schema");

exports.serveAdmin = (req, res, next) => {
  res.render("admin");
};

exports.handleAdmin = (req, res, next) => {
  if (req.user.username !== req.body.admin) {
    res.render("admin", { error: "Incorrect Username" });
  } else {
    User.updateOne(
      { username: req.user.username },
      {
        $set: {
          administrator: true,
        },
      }
    ).then(() => {
      res.redirect("/");
    });
  }
};

exports.serveAdminPanel = (req, res, next) => {
  User.find({}, { username: 1 })
    .then((users) => {
      res.render("admin-panel", { users });
    })
    .catch((err) => {
      next(err);
    });
};

const { User } = require("../models/Schema");

exports.validateUser = (req, res, next) => {
  const { username } = req.body;
  User.findOne({ username })
    .then((user) => {
      return user
        ? res.render("error", { error: "Username already exists" })
        : next();
    })
    .catch((err) => {
      next(err);
    });
};

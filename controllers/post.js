const { createPost } = require("../models/post");

exports.servePost = (req, res, next) => {
  res.render("post-form");
};

exports.submitPost = (req, res, next) => {
  createPost(req.body.post, req.user.username)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      next(err);
    });
};

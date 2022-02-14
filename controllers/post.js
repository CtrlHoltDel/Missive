const { postPost } = require("../models/post");

exports.newPost = (req, res, next) => {
  if (!req.user) res.redirect("/");

  res.render("post-form");
};

exports.submitPost = (req, res, next) => {
  postPost(req.body.post, req.user.username)
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
      next(err);
    });
};

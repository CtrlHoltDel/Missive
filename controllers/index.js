const { Post } = require("../models/Schema");

exports.serveIndex = (req, res, next) => {
  Post.find()
    .sort({ post_date: -1 })
    .then((posts) => {
      res.render("index", { posts, noPosts: posts.length === 0 });
    })
    .catch((err) => {
      next(err);
    });
};

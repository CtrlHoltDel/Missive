const { Post } = require("./Schema");

exports.postPost = (body, username) => {
  const postInstance = new Post({ body, username, post_date: Date.now() });

  return postInstance.save();
};

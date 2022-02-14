const { newPost, submitPost } = require("../controllers/post");

const postRoute = require("express").Router();

postRoute.route("/").get(newPost).post(submitPost);

module.exports = postRoute;

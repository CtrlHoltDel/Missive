const { servePost, submitPost } = require("../controllers/post");

const postRoute = require("express").Router();

postRoute.route("/").get(servePost).post(submitPost);

module.exports = postRoute;

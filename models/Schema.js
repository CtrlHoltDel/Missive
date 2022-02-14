const { formatDate } = require("../utils/utils");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  username: { type: String, required: true },
  body: { type: String, required: true },
  post_date: { type: Date, required: true },
});

PostSchema.virtual("formatted_date").get(function () {
  return formatDate(this.post_date).formattedDate;
});

PostSchema.virtual("formatted_time").get(function () {
  return formatDate(this.post_date).time;
});

const Post = mongoose.model("Posts", PostSchema);

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
  })
);

module.exports = { Post, User };

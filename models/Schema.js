const mongoose = require("mongoose");

exports.User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
  })
);

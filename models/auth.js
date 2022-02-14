const bcrypt = require("bcryptjs/dist/bcrypt");
const res = require("express/lib/response");
const { User } = require("./Schema");

exports.signUpUser = (username, password) => {
  return bcrypt
    .hash(password, 10)
    .then((hashedPassword) => {
      if (!hashedPassword) return Promise.reject("No hashed password");
      return new User({ username, password: hashedPassword });
    })
    .then((userInstance) => {
      userInstance.save();
    });
};

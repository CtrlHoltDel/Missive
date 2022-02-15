const bcrypt = require("bcryptjs/dist/bcrypt");
const { User } = require("./Schema");

exports.signUpUser = (username, password, confirm) => {
  if (password !== confirm) return Promise.reject("Passwords do not match");
  return User.findOne({ username })
    .then((duplicateUsername) => {
      return duplicateUsername
        ? Promise.reject("User with that name already exists")
        : bcrypt.hash(password, 10);
    })
    .then((hashedPassword) => {
      if (!hashedPassword) return Promise.reject("No hashed password");
      return new User({ username, password: hashedPassword });
    })
    .then((userInstance) => {
      userInstance.save();
    });
};

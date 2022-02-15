const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models/Schema");
const passport = require("passport");
const bcrypt = require("bcryptjs");

passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
      const userInfo = await User.findOne({ username });

      if (!userInfo) return done(null, false, { message: "Invalid Username" });

      const checkPassword = await bcrypt.compare(password, userInfo.password);

      return checkPassword
        ? done(null, userInfo)
        : done(null, false, { message: "Incorrect password" });
    } catch (err) {
      return done(err);
    }
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

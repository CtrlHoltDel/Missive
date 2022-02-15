const db = require("./mongoDB/config");
db.on("error", console.error.bind(console, "mongo connection error"));

const express = require("express");
const path = require("path");
const passport = require("passport");
const session = require("cookie-session");

const authRoute = require("./routes/auth");
const postRoute = require("./routes/post");
const indexRouter = require("./routes");
require("./strategies/local");

const { validationError, serverError } = require("./errors/errors");
const { authenticateUser } = require("./utils/utils");
const adminRouter = require("./routes/admin");

const app = express();

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.locals.currentUser = req.user;
  next();
});

app.get("/", indexRouter);
app.use("/auth", authRoute);
app.use("/post", authenticateUser, postRoute);
app.use("/admin", authenticateUser, adminRouter);

app.get("/*", (req, res, next) => {
  res.render("404");
});

app.use(validationError);
app.use(serverError);

module.exports = app;

const db = require("./mongoDB/config");
db.on("error", console.error.bind(console, "mongo connection error"));

const express = require("express");
const path = require("path");

const session = require("express-session");

const passport = require("passport");
const authRoute = require("./routes/auth");
const { validationError, serverError } = require("./errors/errors");
const postRoute = require("./routes/post");
const indexRouter = require("./routes");
require("./strategies/local");

const app = express();

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

app.use(
  session({
    secret: "cats",
    // cookie: { maxAge: 2000 },
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
app.use("/post", postRoute);

app.get("/*", (req, res, next) => {
  res.render("404");
});

app.use(validationError);
app.use(serverError);

module.exports = app;

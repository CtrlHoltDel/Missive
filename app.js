const db = require("./mongoDB/config");
db.on("error", console.error.bind(console, "mongo connection error"));

const express = require("express");
const path = require("path");
const bcrypt = require("bcryptjs");

const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const app = express();

app.set("views", `${__dirname}/views`);
app.set("view engine", "pug");

app.use(express.static(path.join(__dirname, "public")));

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));

app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.render("index", { title: "Missive" });
});

module.exports = app;

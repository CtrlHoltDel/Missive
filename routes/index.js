const { index } = require("../controllers");

const indexRouter = require("express").Router();

indexRouter.get("/", index);

module.exports = indexRouter;

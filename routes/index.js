const { serveIndex } = require("../controllers");

const indexRouter = require("express").Router();

indexRouter.get("/", serveIndex);

module.exports = indexRouter;

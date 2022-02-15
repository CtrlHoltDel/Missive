const {
  serveAdmin,
  handleAdmin,
  serveAdminPanel,
} = require("../controllers/admin");

const { checkAdmin } = require("../utils/utils");

const adminRouter = require("express").Router();

adminRouter.route("/").get(serveAdmin).post(handleAdmin);
adminRouter.get("/panel", checkAdmin, serveAdminPanel);

module.exports = adminRouter;

const { format } = require("date-fns");

exports.formatDate = (unformattedDate) => {
  const date = new Date(unformattedDate);

  const [formattedDate, time] = format(date, "dd/MM/yyyy hh:mm").split(" ");

  return { formattedDate, time };
};

exports.authenticateUser = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.redirect("/");
  }
};

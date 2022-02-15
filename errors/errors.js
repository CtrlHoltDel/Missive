exports.validationError = (err, req, res, next) => {
  if (
    err === "Passwords do not match" ||
    err === "User with that name already exists"
  ) {
    res.render("register-form", { error: err });
  } else {
    next(err);
  }
};

exports.serverError = (err, req, res, next) => {
  console.log(err, "<<Uncaught error");
  res.send(err);
};

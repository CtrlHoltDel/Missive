exports.validationError = (err, req, res, next) => {
  next(err);
};

exports.serverError = (err, req, res, next) => {
  console.log(err, "<<Uncaught error");
  res.send(err);
};

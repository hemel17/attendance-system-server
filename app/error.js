const notFoundHandler = (_req, _res, next) => {
  const error = new Error("Not found!");
  error.status = 404;
  next(error);
};

const errorHandler = (error, _req, res, _next) => {
  const errorStatus = error.status || 500;
  const message = error.message || "Server error";
  res.status(errorStatus).json({
    message: message,
  });
};

module.exports = { notFoundHandler, errorHandler };

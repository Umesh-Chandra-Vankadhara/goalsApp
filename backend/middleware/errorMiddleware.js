//  Middleware is nothing but a functions that gets executed during req and res cycle

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);
  res.json({
    message: err.message,
    //stack trace i.e additional information
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};

module.exports = {
    errorHandler
};

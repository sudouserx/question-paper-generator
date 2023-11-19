const errorHandler = (err, req, res, next) => {
  console.error(err.message);

  if (err.message) {
    return res.status(400).json({ err: err.message });
  }

  // Generic error response for unhandled errors
  res.status(500).json({ err: "Internal Server Error" });
};


module.exports = errorHandler;

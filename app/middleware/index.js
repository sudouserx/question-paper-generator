const queryValidator = (req, res, next) => {
  try {
    // check if totalMark is given as query
    if (!req.query.totalMark) {
      throw new Error("Please provide totalMark");
    }

    // check if easy, medium, and hard are given as query
    if (!req.query.easy || !req.query.medium || !req.query.hard) {
      throw new Error("Please provide easy, medium, and hard difficulty percentages");
    }

    // check if the sum of easy, medium, and hard is 100
    if (
      parseInt(req.query.easy) +
      parseInt(req.query.medium) +
      parseInt(req.query.hard) !== 100
    ) {
      throw new Error("Please provide correct easy, medium, and hard difficulty percentages");
    }

    // If all checks pass, proceed to the next middleware or route handler
    next();
    // return res.status(200).json({ message: "Query validation successful" });
  } catch (error) {
    // Handle the error by sending an appropriate response to the client
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { queryValidator };

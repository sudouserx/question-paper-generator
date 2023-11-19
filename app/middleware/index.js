const queryValidator = async (req, res, next) => {
  try {
    const { totalMark, easy, medium, hard } = req.query;

    // Check if totalMark is given as a query
    if (!totalMark) {
      throw new Error("Please provide totalMark");
    }
    if (!Number.isInteger(parseInt(totalMark))) {
      throw new Error("Please provide totalMark as an integer");
    }

    // Check if easy, medium, and hard are given as a query and are valid integers
    if (
      !Number.isInteger(parseInt(easy)) ||
      !Number.isInteger(parseInt(medium)) ||
      !Number.isInteger(parseInt(hard))
    ) {
      throw new Error(
        "Please provide easy, medium, and hard difficulty percentages as integers"
      );
    }

    // Check if the sum of easy, medium, and hard is 100
    const sum = [parseInt(easy), parseInt(medium), parseInt(hard)].reduce(
      (acc, val) => acc + val,
      0
    );
    if (sum !== 100) {
      throw new Error(
        "Please provide correct easy, medium, and hard difficulty percentages"
      );
    }

    // If all checks pass, proceed to the next middleware or route handler
    next();
  } catch (error) {
    // Forward the error to the central error-handling mechanism
    next(error);
  }
};

module.exports = { queryValidator };

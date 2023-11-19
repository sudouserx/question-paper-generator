const { getQuestions } = require("../services/questions");

const getQuestionsController = async (req, res, next) => {
  try {
    const { totalMark, easy, medium, hard } = req.query;

    const parsedTotalMark = parseInt(totalMark);
    const parsedEasy = parseInt(easy);
    const parsedMedium = parseInt(medium);
    const parsedHard = parseInt(hard);

    const questions = await getQuestions(parsedTotalMark, parsedEasy, parsedMedium, parsedHard);
    return res.json(questions);
  } catch (error) {
    // Forward the error to the central error-handling mechanism
    next(error);
  }
};

module.exports = { getQuestionsController };

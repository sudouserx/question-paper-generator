const { getQuestions } = require("../services/questions");

const getQuestionsController = async (req, res) => {
  try {
    // const { totalMark, easy, medium, hard } = req.query;
    const totalMark = parseInt(req.query.totalMark);
    const easy = parseInt(req.query.easy);
    const medium = parseInt(req.query.medium);
    const hard = parseInt(req.query.hard);

    const questions = await getQuestions(totalMark, easy, medium, hard);
    return res.json(questions);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { getQuestionsController };

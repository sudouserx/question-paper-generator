const data = require("../data/questionBank.json");
const {
  findQuestionsWithGivenTotalMark,
  assertGivenDifficultyPercentage,
} = require("../utilities");

const getQuestions = (
  totalMark,
  easyPercentage,
  mediumPercentage,
  hardPercentage
) => {
  // Find all combinations that have a total mark of the given query
  const questions = data.questions;
  const filteredQuestionCombination = findQuestionsWithGivenTotalMark(
    questions,
    totalMark
  );

  if (filteredQuestionCombination.length === 0) {
    throw new Error("No questions found with the given total mark");
  }

  for (const questionSet of filteredQuestionCombination) {
    // Find question combinations with the given difficulty percentage
    const result = assertGivenDifficultyPercentage(
      questionSet,
      easyPercentage,
      mediumPercentage,
      hardPercentage
    );
    if (result) {
      return questionSet;
    }
  }

  throw new Error("No questions found with the given difficulty percentages");
};

module.exports = { getQuestions };

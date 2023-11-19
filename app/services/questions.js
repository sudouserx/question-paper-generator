const data = require("../data/questionBank.json");
const {
  findQuestionsWithGivenTotalMark,
  assertGivenDifficultyPercentage,
} = require("../utilities");


// error chaining isn't working 

const getQuestions = (
  totalMark,
  easyPercentage,
  mediumPercentage,
  hardPercentage
) => {
  try {
    // find all combination that has total mark of given query
    const questions = data["questions"];
    const filteredQuestionCombination = findQuestionsWithGivenTotalMark(
      questions,
      totalMark
    );
    // console.log(filteredQuestionCombination);

    if (filteredQuestionCombination.length === 0) {
      throw new Error("No questions found with given total mark");
    }

    for (let questions of filteredQuestionCombination) {
      // find question combination with given difficulty percentage
      // console.log(questions);
      const result = assertGivenDifficultyPercentage(
        questions,
        easyPercentage,
        mediumPercentage,
        hardPercentage
      );
      if (result) {
        return questions;
      }
    }
    throw new Error("No questions found with given difficulty percentage")
  } catch (error) {
    throw error;
  }
};

module.exports = { getQuestions };

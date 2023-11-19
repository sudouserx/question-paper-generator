const {
  findQuestionsWithGivenTotalMark,
  assertGivenDifficultyPercentage,
} = require("../utilities");

const data = [
  {
    question: "What is the formula for calculating the area of a circle?",
    subject: "Mathematics",
    topic: "Geometry",
    difficulty: "Hard",
    marks: 5,
  },
  {
    question: "In which year did World War II end?",
    subject: "History",
    topic: "World War II",
    difficulty: "Medium",
    marks: 4,
  },
  {
    question: "What is the chemical symbol for gold?",
    subject: "Chemistry",
    topic: "Elements",
    difficulty: "Easy",
    marks: 2,
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    subject: "Literature",
    topic: "Classic Literature",
    difficulty: "Medium",
    marks: 3,
  },
];

describe("findQuestionsWithGivenTotalMark", () => {
  it("should find questions with the given total mark", () => {
    const totalMark = 14;

    const result = findQuestionsWithGivenTotalMark(data, totalMark);

    // Assert that the result contains the expected questions
    console.log("result", result);
    expect(result).toEqual([data]);
  });
});

describe("assertGivenDifficultyPercentage", () => {
  it("should assert given difficulty percentages", () => {
    const easyPercentage = 25;
    const mediumPercentage = 50;
    const hardPercentage = 25;

    const result = assertGivenDifficultyPercentage(
      data,
      easyPercentage,
      mediumPercentage,
      hardPercentage
    );

    // Assert that the result is true, as the percentages match the provided data
    expect(result).toBe(true);
  });
});

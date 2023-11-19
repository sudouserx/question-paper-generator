const findQuestionsWithGivenTotalMark = (data, totalMark) => {
  const res = [];
  const questions = [];
  
  function dfs(i, qs, cur, total) {
    if (
      total === totalMark &&
      !res.some((arr) => JSON.stringify(arr) === JSON.stringify(cur))
    ) {
      res.push([...cur]);
      questions.push([...qs]);
      return;
    }
    if (i >= data.length || total > totalMark) {
      return;
    }

    // decide to add data[i]
    cur.push(data[i]["marks"]);
    qs.push(data[i]);
    dfs(i + 1, qs, cur, total + data[i]["marks"]);

    // decide not to add data[i]
    cur.pop();
    qs.pop();
    dfs(i + 1, qs, cur, total);
  }
  dfs(0, [], [], 0);
  // console.log(questions);
  return questions;
};



const assertGivenDifficultyPercentage = (
  data,
  _easyPercentage,
  _mediumPercentage,
  _hardPercentage
) => {
  // data is list of possible question combination
  const count = {};

  // Count occurrences of each element in the array
  data.forEach((q) => {
    count[q.difficulty] = (count[q.difficulty] || 0) + 1;
  });

  const total = data.length;

  // calculate percentage of each difficulty
  const easyPercentage = (count["Easy"] / total) * 100 || 0;
  const mediumPercentage = (count["Medium"] / total) * 100 || 0;
  const hardPercentage = (count["Hard"] / total) * 100 || 0;

  if (
    easyPercentage === _easyPercentage &&
    mediumPercentage === _mediumPercentage &&
    hardPercentage === _hardPercentage
  ) {
    return true;
  }
  return false;
};

module.exports = {
  findQuestionsWithGivenTotalMark,
  assertGivenDifficultyPercentage,
};

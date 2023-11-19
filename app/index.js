const express = require("express");
const questions = require("./routes/questions");
const errorHandler = require("./errorHandler");
const app = express();

app.use("/api/questions", questions);

app.use("/", (req, res) => {
  res.send("hello, world");
});

app.use(errorHandler);

module.exports = app;

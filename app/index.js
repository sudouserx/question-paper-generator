const express = require("express");
const questions = require("./routes/questions");
const app = express();

app.use("/api/questions", questions);

app.use("/", (req,res) => {
    res.send("hello, worldh")
})
module.exports = app;
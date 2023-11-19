const { queryValidator } = require("../middleware/index.js");
const { getQuestionsController } = require("../controllers/questions.js");
const router = require("express").Router();

router.get("/", queryValidator, getQuestionsController);

module.exports = router;

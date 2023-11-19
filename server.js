const app = require("./app");
const port = process.env.PORT || "3000";
app.listen(port);

// http://localhost:3000/api/questions?totalMark=20&easy=20&medium=60&hard=20

const express = require("express");
const app = express();

require("../database")(`mongodb://localhost:27017/clients`);

app.use(express.json());

const routes = require("./routes");
routes(app);

app.listen(process.env.PORT || "8080");

module.exports = app;

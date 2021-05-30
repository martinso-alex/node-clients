const express = require("express");
const app = express();

require("../database")(`mongodb://mongodb:27017/clients`);

app.use(express.json());

const routes = require("./routes");
routes(app);

module.exports = app;

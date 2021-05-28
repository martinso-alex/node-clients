const express = require("express");
const app = express();

require("./database")(`mongodb://mongodb:27017/clients`);

app.listen(process.env.PORT || "8080");

module.exports = app;

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const db = require('./db.js');

//Models
require("./model/Note");
require("./model/User");

app.use(bodyParser.json())
app.use("/notes", require("./routes/user"));

app.listen(3000, function() {
  console.log("Server is running");
});

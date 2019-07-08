const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
require("env2")("./.env");

const middleware = [
  bodyParser.urlencoded({ extended: false }),
  bodyParser.json(),
  express.static(path.join(__dirname, "..", "client", "build"))
];

app.use(middleware);
app.disable("x-powered -by");

app.set("PORT", process.env.PORT || 9000);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

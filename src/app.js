const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

let nameUserScoreModel = require("./nameUserScore.model");

require("env2")("./.env");

const app = express();

const middleware = [
  cors(),
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

mongoose.connect("mongodb://127.0.0.1:27017/farage-barrage", {
  useNewUrlParser: true
});
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const nameUserScoreRoutes = express.Router();

app.use("/nameUserScores", nameUserScoreRoutes);

nameUserScoreRoutes.route("/").get((req, res) => {
  nameUserScoreModel.find((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data);
    }
  });
});

nameUserScoreRoutes.route("/:id").get((req, res) => {
  let id = req.params.id;
  nameUserScoreModel.findById(id, (err, data) => {
    res.json(data);
  });
});

nameUserScoreRoutes.route("/add").post((req, res) => {
  let entry = new nameUserScoreModel(req.body);
  entry
    .save()
    .then(response => {
      res.status(200).json({ response: "entry added successfully" });
      console.log(response);
    })
    .catch(err => {
      res.status(400).send("adding new entry failed");
      console.log(err);
    });
});

module.exports = app;

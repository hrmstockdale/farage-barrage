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

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true
});
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const nameUserScoreRoutes = express.Router();

// nameUserScoreRoutes.get("/get", (req, res) => {
//   nameUserScoreModel.find({}, (err, data) => {
//     if (err) {
//       console.log("error ", err);
//     } else {
//       res.json(data);
//       console.log(data);
//     }
//   });
// });

app.use("/nameUserScores", nameUserScoreRoutes);

nameUserScoreRoutes.route("/get").get((req, res) => {
  nameUserScoreModel.find({}, (err, data) => {
    if (err) {
      console.log("error ", err);
    } else {
      res.json(data);
      console.log(data);
    }
  });
});

// nameUserScoreRoutes.route("/get").get((req, res) => {
//   nameUserScoreModel
//     .find({})
//     .then(res => res.json())
//     .catch(err => console.log(err));
// });

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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "build", "index.html"));
});

module.exports = app;

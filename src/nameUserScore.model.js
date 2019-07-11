const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const nameUserScore = new Schema({
  name: { type: String, required: true, maxlength: 50 },
  github: { type: String, required: true, maxlength: 50 },
  score: { type: Number, required: true }
});

module.exports = mongoose.model("nameUserScore", nameUserScore);

const mongoose = require("mongoose");

const genderSchema = new mongoose.Schema({
  genero: String,
});

module.exports = mongoose.model("Gender", genderSchema);
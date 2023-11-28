const mongoose = require("mongoose");

const educationLevelSchema = new mongoose.Schema({
  nivelEducativo: String,
});

module.exports = mongoose.model("EducationLevel", educationLevelSchema);

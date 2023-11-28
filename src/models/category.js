const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  categoria: String,
});

module.exports = mongoose.model("Category", categorySchema);
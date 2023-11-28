const mongoose = require("mongoose");

const entrepreneurialType = new mongoose.Schema({
  emprendedor: String,
});

module.exports = mongoose.model("EntrepreneurialType", entrepreneurialType);
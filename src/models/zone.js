const mongoose = require("mongoose");

const zoneSchema = new mongoose.Schema({
  zona: String,
});

module.exports = mongoose.model("Zone", zoneSchema);

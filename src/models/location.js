const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  departamento: String,
  ciudades: Array,
  pais: String,
});

module.exports = mongoose.model("Location", locationSchema);
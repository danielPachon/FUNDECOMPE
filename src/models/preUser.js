const mongoose = require("mongoose");

const preUserSchema = new mongoose.Schema({
  cedula: Number,
  nombre: String,
  apellidos: String,
  email: String,
  estado: Boolean
});

module.exports = mongoose.model("PreUser", preUserSchema);
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const administratorSchema = new mongoose.Schema({
  nombre: String,
  email: String,
  celular: Number,
  contraseña: String,
});

administratorSchema.pre("save", async function (next) {
  const administrator = this;
  if (administrator.isModified("password")) {
    administrator.password = await bcrypt.hash(administrator.password, 10);
  }
  next();
});

module.exports = mongoose.model("Administrator", administratorSchema);
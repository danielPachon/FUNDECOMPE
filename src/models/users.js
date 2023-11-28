const mongoose = require('mongoose')
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
    primaryKey: true,
  },
  edad: Number,
  fechaIngresoFondo: Date,
  fechaNacimiento: Date,
  celular: Number,
  CursoEconomia: Boolean,
  Capacitacion: Boolean,
  password: String,
  ubicacion: { type: mongoose.Schema.Types.ObjectId, ref: "Location" },
  zona: { type: mongoose.Schema.Types.ObjectId, ref: "Zone" },
  nivelEducativo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EducationLevel",
  },
  emprendedor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "EntrepreneurialType",
  },
  genero: { type: mongoose.Schema.Types.ObjectId, ref: "Gender" },
  nivelSalario: { type: mongoose.Schema.Types.ObjectId, ref: "SalaryLevel" },
  preregistro: { type: mongoose.Schema.Types.ObjectId, ref: "PreUser" },
  urlImage: {
    type: String
  }
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await bcrypt.hash(user.password, 10);
  }
  next();
});

module.exports = mongoose.model('User', userSchema);
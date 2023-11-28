const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const mentorSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true,
    primaryKey: true,
  },
  nombre: {
    type: String,
    required: true,
  },
  apellidos: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  ubicacion: { type: mongoose.Schema.Types.ObjectId, ref: "Ubicacion" },
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: "Categoria" },
  email: {
    type: String,
    required: true,
  },
  celular: {
    type: String,
    required: true,
    maxlength: 10,
  },
  genero: { type: mongoose.Schema.Types.ObjectId, ref: "Genero" },
  dispoVirtual: {
    type: Boolean,
    required: true,
  },
  dispoPresencial: {
    type: Boolean,
    required: true,
  },
  titulosEducativos: [
    {
      titulo: {
        type: String,
        enunm: [
          "Tecnologo",
          "Profesional",
          "Especialización",
          "Maestria",
          "Doctorado",
        ],
        required: true,
      },
      fechaTerminacion: {
        type: Date,
        required: true,
      },
      institucionEducativa: {
        type: String,
        required: true,
      },
    },
  ],
  casoExito: {
    type: String,
  },
  cv: {
    type: Buffer,
    required: false,
  },
  urlLinkedin: {
    type: String,
    required: true,
  },
  urlYoutube: {
    type: String,
    required: true,
  },
  password: String,
});

mentorSchema.pre("save", async function (next) {
  const mentor = this;
  if (mentor.isModified("password")) {
    mentor.password = await bcrypt.hash(mentor.password, 10);
  }
  next();
});

module.exports = mongoose.model("Mentor", mentorSchema);
const Mentor = require("../models/mentors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Controlador para obtener todos los mentores
const getAllMentors = async (req, res) => {
  try {
    const mentors = await Mentor.find();
    res.json(mentors);
  } catch (error) {
    console.error("Error al obtener mentores:", error);
    res.status(500).json({ error: "Error al obtener mentores" });
  }
};

// Controlador para crear un nuevo mentor
const createMentor = async (req, res) => {
  const mentorData = req.body; // Los datos del mentor se envían en el cuerpo de la solicitud
  mentorData.password = bcrypt.hashSync(mentorData.password, 10);

  try {
    const newMentor = await Mentor.create(mentorData);
    res.json(newMentor);
  } catch (error) {
    console.error("Error al crear un mentor:", error);
    res.status(500).json({ error: "Error al crear un mentor" });
  }
};

// Controlador para obtener un mentor por su ID
const getMentorById = async (req, res) => {
  const mentorId = req.params.id; // El ID del mentor se obtiene de los parámetros de la URL

  try {
    const mentor = await Mentor.findById(mentorId);
    if (!mentor) {
      return res.status(404).json({ error: "Mentor no encontrado" });
    }
    res.json(mentor);
  } catch (error) {
    console.error("Error al obtener el mentor:", error);
    res.status(500).json({ error: "Error al obtener el mentor" });
  }
};

// Controlador para actualizar un mentor por su ID
const updateMentor = async (req, res) => {
  const mentorId = req.params.id; // El ID del mentor se obtiene de los parámetros de la URL
  const updatedData = req.body; // Los datos actualizados del mentor se envían en el cuerpo de la solicitud

  try {
    const updatedMentor = await Mentor.findByIdAndUpdate(
      mentorId,
      updatedData,
      { new: true }
    );
    if (!updatedMentor) {
      return res.status(404).json({ error: "Mentor no encontrado" });
    }
    res.json(updatedMentor);
  } catch (error) {
    console.error("Error al actualizar el mentor:", error);
    res.status(500).json({ error: "Error al actualizar el mentor" });
  }
};

// Controlador para eliminar un mentor por su ID
const deleteMentor = async (req, res) => {
  const mentorId = req.params.id; // El ID del mentor se obtiene de los parámetros de la URL

  try {
    const deletedMentor = await Mentor.findByIdAndRemove(mentorId);
    if (!deletedMentor) {
      return res.status(404).json({ error: "Mentor no encontrado" });
    }
    res.json(deletedMentor);
  } catch (error) {
    console.error("Error al eliminar el mentor:", error);
    res.status(500).json({ error: "Error al eliminar el mentor" });
  }
};

const loginMentor = async (req, res) => {
  const { cedula, password } = req.body;

  try {
    const mentor = await Mentor.findOne({ cedula });

    if (!mentor || !bcrypt.compareSync(password, mentor.password)) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    const token = jwt.sign({ mentorId: mentor._id }, "secretKey", { expiresIn: '1h' }); // Cambia 'secretKey' por una clave secreta segura
    res.json({ token });
    console.log("Token:", token);
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ error: "Error al iniciar sesión" });
  }
};

module.exports = {
  getAllMentors,
  createMentor,
  getMentorById,
  updateMentor,
  deleteMentor,
  loginMentor,
};

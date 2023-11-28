const EducationLevel = require("../models/educationLevel");

// Controlador para crear un nuevo nivel educativo
const createEducationLevel = async (req, res) => {
  try {
    const educationLevelData = req.body;
    const newEducationLevel = await EducationLevel.create(educationLevelData);
    res.json(newEducationLevel);
  } catch (error) {
    console.error("Error al crear un nivel educativo:", error);
    res.status(500).json({ error: "Error al crear un nivel educativo" });
  }
};

// Controlador para obtener todos los niveles educativos
const getEducationLevels = async (req, res) => {
  try {
    const educationLevels = await EducationLevel.find();
    res.json(educationLevels);
  } catch (error) {
    console.error("Error al obtener niveles educativos:", error);
    res.status(500).json({ error: "Error al obtener niveles educativos" });
  }
};

// Controlador para obtener un nivel educativo por su ID
const getEducationLevelById = async (req, res) => {
  const educationLevelId = req.params.id;
  try {
    const educationLevel = await EducationLevel.findById(educationLevelId);
    if (!educationLevel) {
      return res.status(404).json({ error: "Nivel educativo no encontrado" });
    }
    res.json(educationLevel);
  } catch (error) {
    console.error("Error al obtener el nivel educativo:", error);
    res.status(500).json({ error: "Error al obtener el nivel educativo" });
  }
};

// Controlador para actualizar un nivel educativo por su ID
const updateEducationLevel = async (req, res) => {
  const educationLevelId = req.params.id;
  const updatedData = req.body;
  try {
    const updatedEducationLevel = await EducationLevel.findByIdAndUpdate(
      educationLevelId,
      updatedData,
      { new: true }
    );
    if (!updatedEducationLevel) {
      return res.status(404).json({ error: "Nivel educativo no encontrado" });
    }
    res.json(updatedEducationLevel);
  } catch (error) {
    console.error("Error al actualizar el nivel educativo:", error);
    res.status(500).json({ error: "Error al actualizar el nivel educativo" });
  }
};

// Controlador para eliminar un nivel educativo por su ID
const deleteEducationLevel = async (req, res) => {
  const educationLevelId = req.params.id;
  try {
    const deletedEducationLevel = await EducationLevel.findByIdAndRemove(
      educationLevelId
    );
    if (!deletedEducationLevel) {
      return res.status(404).json({ error: "Nivel educativo no encontrado" });
    }
    res.json(deletedEducationLevel);
  } catch (error) {
    console.error("Error al eliminar el nivel educativo:", error);
    res.status(500).json({ error: "Error al eliminar el nivel educativo" });
  }
};

module.exports = {
  createEducationLevel,
  getEducationLevels,
  getEducationLevelById,
  updateEducationLevel,
  deleteEducationLevel,
};

const Gender = require("../models/gender");

// Controlador para crear un nuevo género
const createGender = async (req, res) => {
  try {
    const genderData = req.body;
    const newGender = await Gender.create(genderData);
    res.json(newGender);
  } catch (error) {
    console.error("Error al crear un género:", error);
    res.status(500).json({ error: "Error al crear un género" });
  }
};

// Controlador para obtener todos los géneros
const getGenders = async (req, res) => {
  try {
    const genders = await Gender.find();
    res.json(genders);
  } catch (error) {
    console.error("Error al obtener géneros:", error);
    res.status(500).json({ error: "Error al obtener géneros" });
  }
};

// Controlador para obtener un género por su ID
const getGenderById = async (req, res) => {
  const genderId = req.params.id;
  try {
    const gender = await Gender.findById(genderId);
    if (!gender) {
      return res.status(404).json({ error: "Género no encontrado" });
    }
    res.json(gender);
  } catch (error) {
    console.error("Error al obtener el género:", error);
    res.status(500).json({ error: "Error al obtener el género" });
  }
};

// Controlador para actualizar un género por su ID
const updateGender = async (req, res) => {
  const genderId = req.params.id;
  const updatedData = req.body;
  try {
    const updatedGender = await Gender.findByIdAndUpdate(
      genderId,
      updatedData,
      { new: true }
    );
    if (!updatedGender) {
      return res.status(404).json({ error: "Género no encontrado" });
    }
    res.json(updatedGender);
  } catch (error) {
    console.error("Error al actualizar el género:", error);
    res.status(500).json({ error: "Error al actualizar el género" });
  }
};

// Controlador para eliminar un género por su ID
const deleteGender = async (req, res) => {
  const genderId = req.params.id;
  try {
    const deletedGender = await Gender.findByIdAndRemove(genderId);
    if (!deletedGender) {
      return res.status(404).json({ error: "Género no encontrado" });
    }
    res.json(deletedGender);
  } catch (error) {
    console.error("Error al eliminar el género:", error);
    res.status(500).json({ error: "Error al eliminar el género" });
  }
};

module.exports = {
  createGender,
  getGenders,
  getGenderById,
  updateGender,
  deleteGender,
};

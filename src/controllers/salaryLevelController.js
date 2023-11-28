const SalaryLevel = require("../models/salaryLevel");

// Controlador para crear un nuevo nivel de salario
const createSalaryLevel = async (req, res) => {
  try {
    const salaryLevelData = req.body;
    const newSalaryLevel = await SalaryLevel.create(salaryLevelData);
    res.json(newSalaryLevel);
  } catch (error) {
    console.error("Error al crear un nivel de salario:", error);
    res.status(500).json({ error: "Error al crear un nivel de salario" });
  }
};

// Controlador para obtener todos los niveles de salario
const getSalaryLevels = async (req, res) => {
  try {
    const salaryLevels = await SalaryLevel.find();
    res.json(salaryLevels);
  } catch (error) {
    console.error("Error al obtener niveles de salario:", error);
    res.status(500).json({ error: "Error al obtener niveles de salario" });
  }
};

// Controlador para obtener un nivel de salario por su ID
const getSalaryLevelById = async (req, res) => {
  const salaryLevelId = req.params.id;
  try {
    const salaryLevel = await SalaryLevel.findById(salaryLevelId);
    if (!salaryLevel) {
      return res.status(404).json({ error: "Nivel de salario no encontrado" });
    }
    res.json(salaryLevel);
  } catch (error) {
    console.error("Error al obtener el nivel de salario:", error);
    res.status(500).json({ error: "Error al obtener el nivel de salario" });
  }
};

// Controlador para actualizar un nivel de salario por su ID
const updateSalaryLevel = async (req, res) => {
  const salaryLevelId = req.params.id;
  const updatedData = req.body;
  try {
    const updatedSalaryLevel = await SalaryLevel.findByIdAndUpdate(
      salaryLevelId,
      updatedData,
      { new: true }
    );
    if (!updatedSalaryLevel) {
      return res.status(404).json({ error: "Nivel de salario no encontrado" });
    }
    res.json(updatedSalaryLevel);
  } catch (error) {
    console.error("Error al actualizar el nivel de salario:", error);
    res.status(500).json({ error: "Error al actualizar el nivel de salario" });
  }
};

// Controlador para eliminar un nivel de salario por su ID
const deleteSalaryLevel = async (req, res) => {
  const salaryLevelId = req.params.id;
  try {
    const deletedSalaryLevel = await SalaryLevel.findByIdAndRemove(
      salaryLevelId
    );
    if (!deletedSalaryLevel) {
      return res.status(404).json({ error: "Nivel de salario no encontrado" });
    }
    res.json(deletedSalaryLevel);
  } catch (error) {
    console.error("Error al eliminar el nivel de salario:", error);
    res.status(500).json({ error: "Error al eliminar el nivel de salario" });
  }
};

module.exports = {
  createSalaryLevel,
  getSalaryLevels,
  getSalaryLevelById,
  updateSalaryLevel,
  deleteSalaryLevel,
};

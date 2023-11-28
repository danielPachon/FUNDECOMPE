const EntrepreneurialType = require("../models/entrepreneurialType");

// Controlador para crear un nuevo tipo de emprendedor
const createEntrepreneurialType = async (req, res) => {
  try {
    const entrepreneurialTypeData = req.body;
    const newEntrepreneurialType = await EntrepreneurialType.create(
      entrepreneurialTypeData
    );
    res.json(newEntrepreneurialType);
  } catch (error) {
    console.error("Error al crear un tipo de emprendedor:", error);
    res.status(500).json({ error: "Error al crear un tipo de emprendedor" });
  }
};

// Controlador para obtener todos los tipos de emprendedores
const getEntrepreneurialTypes = async (req, res) => {
  try {
    const entrepreneurialTypes = await EntrepreneurialType.find();
    res.json(entrepreneurialTypes);
  } catch (error) {
    console.error("Error al obtener tipos de emprendedores:", error);
    res.status(500).json({ error: "Error al obtener tipos de emprendedores" });
  }
};

// Controlador para obtener un tipo de emprendedor por su ID
const getEntrepreneurialTypeById = async (req, res) => {
  const entrepreneurialTypeId = req.params.id;
  try {
    const entrepreneurialType = await EntrepreneurialType.findById(
      entrepreneurialTypeId
    );
    if (!entrepreneurialType) {
      return res
        .status(404)
        .json({ error: "Tipo de emprendedor no encontrado" });
    }
    res.json(entrepreneurialType);
  } catch (error) {
    console.error("Error al obtener el tipo de emprendedor:", error);
    res.status(500).json({ error: "Error al obtener el tipo de emprendedor" });
  }
};

// Controlador para actualizar un tipo de emprendedor por su ID
const updateEntrepreneurialType = async (req, res) => {
  const entrepreneurialTypeId = req.params.id;
  const updatedData = req.body;
  try {
    const updatedEntrepreneurialType =
      await EntrepreneurialType.findByIdAndUpdate(
        entrepreneurialTypeId,
        updatedData,
        { new: true }
      );
    if (!updatedEntrepreneurialType) {
      return res
        .status(404)
        .json({ error: "Tipo de emprendedor no encontrado" });
    }
    res.json(updatedEntrepreneurialType);
  } catch (error) {
    console.error("Error al actualizar el tipo de emprendedor:", error);
    res
      .status(500)
      .json({ error: "Error al actualizar el tipo de emprendedor" });
  }
};

// Controlador para eliminar un tipo de emprendedor por su ID
const deleteEntrepreneurialType = async (req, res) => {
  const entrepreneurialTypeId = req.params.id;
  try {
    const deletedEntrepreneurialType =
      await EntrepreneurialType.findByIdAndRemove(entrepreneurialTypeId);
    if (!deletedEntrepreneurialType) {
      return res
        .status(404)
        .json({ error: "Tipo de emprendedor no encontrado" });
    }
    res.json(deletedEntrepreneurialType);
  } catch (error) {
    console.error("Error al eliminar el tipo de emprendedor:", error);
    res.status(500).json({ error: "Error al eliminar el tipo de emprendedor" });
  }
};

module.exports = {
  createEntrepreneurialType,
  getEntrepreneurialTypes,
  getEntrepreneurialTypeById,
  updateEntrepreneurialType,
  deleteEntrepreneurialType,
};

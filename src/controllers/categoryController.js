const Category = require("../models/category");

// Controlador para crear una nueva categoría
const createCategory = async (req, res) => {
  try {
    const categoryData = req.body;
    const newCategory = await Category.create(categoryData);
    res.json(newCategory);
  } catch (error) {
    console.error("Error al crear una categoría:", error);
    res.status(500).json({ error: "Error al crear una categoría" });
  }
};

// Controlador para obtener todas las categorías
const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (error) {
    console.error("Error al obtener categorías:", error);
    res.status(500).json({ error: "Error al obtener categorías" });
  }
};

// Controlador para obtener una categoría por su ID
const getCategoryById = async (req, res) => {
  const categoryId = req.params.id;
  try {
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ error: "Categoría no encontrada" });
    }
    res.json(category);
  } catch (error) {
    console.error("Error al obtener la categoría:", error);
    res.status(500).json({ error: "Error al obtener la categoría" });
  }
};

// Controlador para actualizar una categoría por su ID
const updateCategory = async (req, res) => {
  const categoryId = req.params.id;
  const updatedData = req.body;
  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      categoryId,
      updatedData,
      { new: true }
    );
    if (!updatedCategory) {
      return res.status(404).json({ error: "Categoría no encontrada" });
    }
    res.json(updatedCategory);
  } catch (error) {
    console.error("Error al actualizar la categoría:", error);
    res.status(500).json({ error: "Error al actualizar la categoría" });
  }
};

// Controlador para eliminar una categoría por su ID
const deleteCategory = async (req, res) => {
  const categoryId = req.params.id;
  try {
    const deletedCategory = await Category.findByIdAndRemove(categoryId);
    if (!deletedCategory) {
      return res.status(404).json({ error: "Categoría no encontrada" });
    }
    res.json(deletedCategory);
  } catch (error) {
    console.error("Error al eliminar la categoría:", error);
    res.status(500).json({ error: "Error al eliminar la categoría" });
  }
};

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
};

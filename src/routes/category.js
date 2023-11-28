const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController"); // Importa el controlador

// Ruta para crear una nueva categoría
router.post("/categories", categoryController.createCategory);

// Ruta para obtener todas las categorías
router.get("/categories", categoryController.getCategories);

// Ruta para obtener una categoría por su ID
router.get("/categories/:id", categoryController.getCategoryById);

// Ruta para actualizar una categoría por su ID
router.put("/categories/:id", categoryController.updateCategory);

// Ruta para eliminar una categoría por su ID
router.delete("/categories/:id", categoryController.deleteCategory);

module.exports = router;

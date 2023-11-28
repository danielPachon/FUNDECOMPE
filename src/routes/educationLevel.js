const express = require("express");
const router = express.Router();
const educationLevelController = require("../controllers/educationLevelController");

// Ruta para crear un nuevo nivel educativo
router.post("/education-levels", educationLevelController.createEducationLevel);

// Ruta para obtener todos los niveles educativos
router.get("/education-levels", educationLevelController.getEducationLevels);

// Ruta para obtener un nivel educativo por su ID
router.get(
  "/education-levels/:id", educationLevelController.getEducationLevelById);

// Ruta para actualizar un nivel educativo por su ID
router.put(
  "/education-levels/:id",
  educationLevelController.updateEducationLevel
);

// Ruta para eliminar un nivel educativo por su ID
router.delete(
  "/education-levels/:id",
  educationLevelController.deleteEducationLevel
);

module.exports = router;

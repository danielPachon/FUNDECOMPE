const express = require("express");
const router = express.Router();
const entrepreneurialTypeController = require("../controllers/entrepreneurialTypeController"); // Importa el controlador

// Ruta para crear un nuevo tipo de emprendedor
router.post(
  "/entrepreneurialtypes",
  entrepreneurialTypeController.createEntrepreneurialType
);

// Ruta para obtener todos los tipos de emprendedores
router.get(
  "/entrepreneurialtypes",
  entrepreneurialTypeController.getEntrepreneurialTypes
);

// Ruta para obtener un tipo de emprendedor por su ID
router.get(
  "/entrepreneurialtypes/:id",
  entrepreneurialTypeController.getEntrepreneurialTypeById
);

// Ruta para actualizar un tipo de emprendedor por su ID
router.put(
  "/entrepreneurialtypes/:id",
  entrepreneurialTypeController.updateEntrepreneurialType
);

// Ruta para eliminar un tipo de emprendedor por su ID
router.delete(
  "/entrepreneurialtypes/:id",
  entrepreneurialTypeController.deleteEntrepreneurialType
);

module.exports = router;

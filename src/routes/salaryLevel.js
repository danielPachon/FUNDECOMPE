const express = require("express");
const router = express.Router();
const salaryLevelController = require("../controllers/salaryLevelController"); // Importa el controlador

// Ruta para crear un nuevo nivel de salario
router.post("/salary-levels", salaryLevelController.createSalaryLevel);

// Ruta para obtener todos los niveles de salario
router.get("/salary-levels", salaryLevelController.getSalaryLevels);

// Ruta para obtener un nivel de salario por su ID
router.get("/salary-levels/:id", salaryLevelController.getSalaryLevelById);

// Ruta para actualizar un nivel de salario por su ID
router.put("/salary-levels/:id", salaryLevelController.updateSalaryLevel);

// Ruta para eliminar un nivel de salario por su ID
router.delete("/salary-levels/:id", salaryLevelController.deleteSalaryLevel);

module.exports = router;

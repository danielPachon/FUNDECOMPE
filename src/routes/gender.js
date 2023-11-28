const express = require("express");
const router = express.Router();
const genderController = require("../controllers/genderController"); // Importa el controlador

// Ruta para crear un nuevo género
router.post("/genders", genderController.createGender);

// Ruta para obtener todos los géneros
router.get("/genders", genderController.getGenders);

// Ruta para obtener un género por su ID
router.get("/genders/:id", genderController.getGenderById);

// Ruta para actualizar un género por su ID
router.put("/genders/:id", genderController.updateGender);

// Ruta para eliminar un género por su ID
router.delete("/genders/:id", genderController.deleteGender);

module.exports = router;

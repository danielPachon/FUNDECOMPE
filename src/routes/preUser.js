const express = require("express");
const router = express.Router();
const preUserController = require("../controllers/preUserController"); // Importa el controlador

// Ruta para crear un nuevo preusuario
router.post("/preusers", preUserController.createPreUser);

// Ruta para obtener todos los preusuarios
router.get("/preusers", preUserController.getPreUsers);

// Ruta para obtener un preusuario por su ID
router.get("/preusers/:id", preUserController.getPreUserById);

// Ruta para obtener un preusuario por Cedula
router.get("/preusers/cedula/:cedula", preUserController.getPreUserByCedula);

// Ruta para actualizar un preusuario por su ID
router.put("/preusers/:id", preUserController.updatePreUser);

// Ruta para eliminar un preusuario por su ID
router.delete("/preusers/:id", preUserController.deletePreUser);

module.exports = router;

const express = require("express");
const router = express.Router();
const userController = require("../controllers/usersController");

// Ruta para obtener todos los usuarios
router.get("/users", userController.getAllUsers);

// Ruta para crear un nuevo usuario
router.post("/register", userController.createUser);

// Ruta para obtener un usuario por su ID
router.get("/users/:id", userController.getUserById);

// Ruta para actualizar un usuario por su ID
router.put("/users/:id", userController.updateUser);

// Ruta para eliminar un usuario por su ID
router.delete("/users/:id", userController.deleteUser);

// Ruta para iniciar sesión
router.post('/login', userController.loginUser);

module.exports = router;
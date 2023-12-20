const express = require("express");
const router = express.Router();
const mentorController = require("../controllers/mentorsController");

// Ruta para obtener todos los mentores
router.get("/mentors", mentorController.getAllMentors);

// Ruta para crear un nuevo mentor
router.post("/mentors", mentorController.createMentor);

// Ruta para obtener un mentor por su ID
router.get("/mentor/:id", mentorController.getMentorById);

// Ruta para actualizar un mentor por su ID
router.put("/mentors/:id", mentorController.updateMentor);
// Ruta para eliminar un mentor por su ID
router.delete("/mentors/:id", mentorController.deleteMentor);

router.post("/mentor/login", mentorController.loginMentor);

module.exports = router;

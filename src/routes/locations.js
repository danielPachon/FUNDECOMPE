const express = require("express");
const router = express.Router();
const locationController = require("../controllers/locationController"); // Importa el controlador

// Ruta para crear una nueva ubicación
router.post("/locations", locationController.createLocation);

// Ruta para obtener todas las ubicaciones
router.get("/locations", locationController.getLocations);

// Ruta para obtener una ubicación por su ID
router.get("/locations/:id", locationController.getLocationById);

// Ruta para actualizar una ubicación por su ID
router.put("/locations/:id", locationController.updateLocation);

// Ruta para eliminar una ubicación por su ID
router.delete("/locations/:id", locationController.deleteLocation);

module.exports = router;

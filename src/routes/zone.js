const express = require("express");
const router = express.Router();
const zoneController = require("../controllers/zoneController"); // Importa el controlador

// Ruta para crear una nueva zona
router.post("/zones", zoneController.createZone);

// Ruta para obtener todas las zonas
router.get("/zones", zoneController.getZones);

// Ruta para obtener una zona por su ID
router.get("/zones/:id", zoneController.getZoneById);

// Ruta para actualizar una zona por su ID
router.put("/zones/:id", zoneController.updateZone);

// Ruta para eliminar una zona por su ID
router.delete("/zones/:id", zoneController.deleteZone);

module.exports = router;

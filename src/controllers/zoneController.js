const Zone = require("../models/zone");

// Controlador para crear una nueva zona
const createZone = async (req, res) => {
  try {
    const zoneData = req.body;
    const newZone = await Zone.create(zoneData);
    res.json(newZone);
  } catch (error) {
    console.error("Error al crear una zona:", error);
    res.status(500).json({ error: "Error al crear una zona" });
  }
};

// Controlador para obtener todas las zonas
const getZones = async (req, res) => {
  try {
    const zones = await Zone.find();
    res.json(zones);
  } catch (error) {
    console.error("Error al obtener zonas:", error);
    res.status(500).json({ error: "Error al obtener zonas" });
  }
};

// Controlador para obtener una zona por su ID
const getZoneById = async (req, res) => {
  const zoneId = req.params.id;
  try {
    const zone = await Zone.findById(zoneId);
    if (!zone) {
      return res.status(404).json({ error: "Zona no encontrada" });
    }
    res.json(zone);
  } catch (error) {
    console.error("Error al obtener la zona:", error);
    res.status(500).json({ error: "Error al obtener la zona" });
  }
};

// Controlador para actualizar una zona por su ID
const updateZone = async (req, res) => {
  const zoneId = req.params.id;
  const updatedData = req.body;
  try {
    const updatedZone = await Zone.findByIdAndUpdate(zoneId, updatedData, {
      new: true,
    });
    if (!updatedZone) {
      return res.status(404).json({ error: "Zona no encontrada" });
    }
    res.json(updatedZone);
  } catch (error) {
    console.error("Error al actualizar la zona:", error);
    res.status(500).json({ error: "Error al actualizar la zona" });
  }
};

// Controlador para eliminar una zona por su ID
const deleteZone = async (req, res) => {
  const zoneId = req.params.id;
  try {
    const deletedZone = await Zone.findByIdAndRemove(zoneId);
    if (!deletedZone) {
      return res.status(404).json({ error: "Zona no encontrada" });
    }
    res.json(deletedZone);
  } catch (error) {
    console.error("Error al eliminar la zona:", error);
    res.status(500).json({ error: "Error al eliminar la zona" });
  }
};

module.exports = {
  createZone,
  getZones,
  getZoneById,
  updateZone,
  deleteZone,
};

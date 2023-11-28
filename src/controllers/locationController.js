const Location = require("../models/location");

// Controlador para crear una nueva ubicación
const createLocation = async (req, res) => {
  try {
    const locationData = req.body;
    const newLocation = await Location.create(locationData);
    res.json(newLocation);
  } catch (error) {
    console.error("Error al crear una ubicación:", error);
    res.status(500).json({ error: "Error al crear una ubicación" });
  }
};

// Controlador para obtener todas las ubicaciones
const getLocations = async (req, res) => {
  try {
    const locations = await Location.find();
    res.json(locations);
  } catch (error) {
    console.error("Error al obtener ubicaciones:", error);
    res.status(500).json({ error: "Error al obtener ubicaciones" });
  }
};

// Controlador para obtener una ubicación por su ID
const getLocationById = async (req, res) => {
  const locationId = req.params.id;
  try {
    const location = await Location.findById(locationId);
    if (!location) {
      return res.status(404).json({ error: "Ubicación no encontrada" });
    }
    res.json(location);
  } catch (error) {
    console.error("Error al obtener la ubicación:", error);
    res.status(500).json({ error: "Error al obtener la ubicación" });
  }
};

// Controlador para actualizar una ubicación por su ID
const updateLocation = async (req, res) => {
  const locationId = req.params.id;
  const updatedData = req.body;
  try {
    const updatedLocation = await Location.findByIdAndUpdate(
      locationId,
      updatedData,
      { new: true }
    );
    if (!updatedLocation) {
      return res.status(404).json({ error: "Ubicación no encontrada" });
    }
    res.json(updatedLocation);
  } catch (error) {
    console.error("Error al actualizar la ubicación:", error);
    res.status(500).json({ error: "Error al actualizar la ubicación" });
  }
};

// Controlador para eliminar una ubicación por su ID
const deleteLocation = async (req, res) => {
  const locationId = req.params.id;
  try {
    const deletedLocation = await Location.findByIdAndRemove(locationId);
    if (!deletedLocation) {
      return res.status(404).json({ error: "Ubicación no encontrada" });
    }
    res.json(deletedLocation);
  } catch (error) {
    console.error("Error al eliminar la ubicación:", error);
    res.status(500).json({ error: "Error al eliminar la ubicación" });
  }
};

module.exports = {
  createLocation,
  getLocations,
  getLocationById,
  updateLocation,
  deleteLocation,
};

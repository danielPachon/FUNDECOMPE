const PreUser = require("../models/preUser");

// Controlador para crear un nuevo preusuario
const createPreUser = async (req, res) => {
  try {
    const preUserData = req.body;
    const newPreUser = await PreUser.create(preUserData);
    res.json(newPreUser);
  } catch (error) {
    console.error("Error al crear un preusuario:", error);
    res.status(500).json({ error: "Error al crear un preusuario" });
  }
};

// Controlador para obtener todos los preusuarios
const getPreUsers = async (req, res) => {
  try {
    const preUsers = await PreUser.find();
    res.json(preUsers);
  } catch (error) {
    console.error("Error al obtener preusuarios:", error);
    res.status(500).json({ error: "Error al obtener preusuarios" });
  }
};

// Controlador para obtener un preusuario por su ID
const getPreUserById = async (req, res) => {
  const preUserId = req.params.id;
  try {
    const preUser = await PreUser.findById(preUserId);
    if (!preUser) {
      return res.status(404).json({ error: "Preusuario no encontrado" });
    }
    res.json(preUser);
  } catch (error) {
    console.error("Error al obtener el preusuario:", error);
    res.status(500).json({ error: "Error al obtener el preusuario" });
  }
};

const getPreUserByCedula = async (req, res) => {
  const cedula = req.params.cedula; // Obten la cédula de los parámetros de la URL
  try {
    const preUser = await PreUser.findOne({ cedula }); // Busca al preusuario por la cédula
    if (!preUser) {
      return res.status(404).json({ error: "Preusuario no encontrado" });
    }
    res.json(preUser);
  } catch (error) {
    console.error("Error al obtener el preusuario:", error);
    res.status(500).json({ error: "Error al obtener el preusuario" });
  }
};


// Controlador para actualizar un preusuario por su ID
const updatePreUser = async (req, res) => {
  const preUserId = req.params.id;
  const updatedData = req.body;
  try {
    const updatedPreUser = await PreUser.findByIdAndUpdate(
      preUserId,
      updatedData,
      { new: true }
    );
    if (!updatedPreUser) {
      return res.status(404).json({ error: "Preusuario no encontrado" });
    }
    res.json(updatedPreUser);
  } catch (error) {
    console.error("Error al actualizar el preusuario:", error);
    res.status(500).json({ error: "Error al actualizar el preusuario" });
  }
};

// Controlador para eliminar un preusuario por su ID
const deletePreUser = async (req, res) => {
  const preUserId = req.params.id;
  try {
    const deletedPreUser = await PreUser.findByIdAndRemove(preUserId);
    if (!deletedPreUser) {
      return res.status(404).json({ error: "Preusuario no encontrado" });
    }
    res.json(deletedPreUser);
  } catch (error) {
    console.error("Error al eliminar el preusuario:", error);
    res.status(500).json({ error: "Error al eliminar el preusuario" });
  }
};

module.exports = {
  createPreUser,
  getPreUsers,
  getPreUserById,
  getPreUserByCedula,
  updatePreUser,
  deletePreUser,
};

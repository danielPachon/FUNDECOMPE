const User = require("../models/users");
const PreUser = require("../models/preUser");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Controlador para obtener todos los usuarios
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().populate("preregistro"); // Utiliza populate para obtener los datos del preusuario
    res.json(users);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ error: "Error al obtener usuarios" });
  }
};

// Controlador para crear un nuevo usuario
const createUser = async (req, res) => {
  const userData = req.body;

  try {
    const preUser = await PreUser.findById(userData.preregistro);

    if (preUser) {
      userData._id = preUser.cedula;

      const newUser = await User.create(userData);
      res.json(newUser);
    } else {
      res
        .status(400)
        .json({ error: "El usuario no está preregistrado en PreUser" });
    }
  } catch (error) {
    console.error("Error al crear un usuario:", error);
    res.status(500).json({ error: "Error al crear un usuario" });
  }
};

// Controlador para obtener un usuario por su ID
const getUserById = async (req, res) => {
  const userId = req.params.id;

  try {
    const user = await User.findById(userId).populate("preregistro"); // Utiliza populate para obtener los datos del preusuario

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json(user);
  } catch (error) {
    console.error("Error al obtener el usuario:", error);
    res.status(500).json({ error: "Error al obtener el usuario" });
  }
};

// Controlador para actualizar un usuario por su ID
const updateUser = async (req, res) => {
  const userId = req.params.id; // El ID del usuario se obtiene de los parámetros de la URL
  const updatedData = req.body; // Los datos actualizados del usuario se envían en el cuerpo de la solicitud

  try {
    const updatedUser = await User.findByIdAndUpdate(userId, updatedData, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.json(updatedUser);
  } catch (error) {
    console.error("Error al actualizar el usuario:", error);
    res.status(500).json({ error: "Error al actualizar el usuario" });
  }
};

// Controlador para eliminar un usuario por su ID
const deleteUser = async (req, res) => {
  const userId = req.params.id; // El ID del usuario se obtiene de los parámetros de la URL

  try {
    const deletedUser = await User.findByIdAndRemove(userId);
    if (!deletedUser) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
    res.json(deletedUser);
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    res.status(500).json({ error: "Error al eliminar el usuario" });
  }
};

// Controlador para iniciar sesión
const loginUser = async (req, res) => {
  const { _id, password } = req.body;

  try {
    const user = await User.findOne({ _id });

    if (!user) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    const token = jwt.sign({ userId: user._id }, 'secretKey', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.error('Error al iniciar sesión:', error);
    res.status(500).json({ error: 'Error al iniciar sesión' });
  }
};
  
module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
  loginUser,
};

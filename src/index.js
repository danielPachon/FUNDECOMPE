const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const cors = require("cors");

const userRoutes = require('./routes/user');
const mentorRoutes = require('./routes/mentor');
const preUserRoutes = require("./routes/preUser");
const locationRoutes = require("./routes/locations");
const zoneRoutes = require("./routes/zone")
const educationLevelRoutes = require("./routes/educationLevel")
const EntrepreneurialTypeRoutes = require("./routes/entrepreneurialType");
const genderRoutes = require("./routes/gender");
const salaryLevelRoutes = require("./routes/salaryLevel")
const categoryRoutes = require("./routes/category");

require("dotenv").config();

const app = express();

//MongoBd Connection 
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("Conexión exitosa a MongoDB"))
  .catch((error) => console.log("Error de conexión a la base de datos:", error));

app.use(bodyParser.json());

app.use((req, res, next) => {
  const allowedOrigins = [
    "http://localhost:3000",
    "https://frontend.d3pjfjc0k1xqw4.amplifyapp.com",
    "https://axion-dev.fundecompe.org",
    "https://axion.fundecompe.org",
  ];
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS, PUT, PATCH, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
  }
  next();
});

app.use("/api", userRoutes);
app.use("/api", mentorRoutes);
app.use("/api", preUserRoutes);
app.use("/api", locationRoutes);
app.use("/api", zoneRoutes);
app.use("/api", educationLevelRoutes);
app.use("/api", EntrepreneurialTypeRoutes);
app.use("/api", genderRoutes);
app.use("/api", salaryLevelRoutes);
app.use("/api", categoryRoutes);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
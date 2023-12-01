const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const cors = require("cors");

const https = require("https");
const fs = require("fs");   

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

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

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

const options = {
  key: fs.readFileSync("server.key"),
  cert: fs.readFileSync("server.cert"),
};

const server = https.createServer(options, app);

const PORT = process.env.PORT || 9000;

server.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en el puerto ${PORT}`);
});
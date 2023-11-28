const mongoose = require("mongoose");

const salaryLevelSchema = new mongoose.Schema({
  nivelSalario: String,
});

module.exports = mongoose.model("SalaryLevel", salaryLevelSchema);
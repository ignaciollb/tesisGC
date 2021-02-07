"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EstandarSchema = Schema({
  nombre_subdimension: String,
  nombre_estandar: String,
  preguntas: Array,
});

module.exports = mongoose.model("user", EstandarSchema);

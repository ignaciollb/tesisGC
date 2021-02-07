"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const SubdimensionSchema = Schema({
  nombre_subdimension: String,
  estandares: [{
    descripcion: String,
    preguntas: Array
  }],
  
});

module.exports = mongoose.model("user", SubdimensionSchema);

"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProcesoSchema = Schema({
  user: { type: Schema.ObjectId, ref: "user" },
  estandar: { type: Schema.ObjectId, ref: "estandar" },
  descripcion: String,
  errores_comunes: String,
  soluciones: String,
  nivel_desarrollo: Number,
  fecha: Date,
  documentos: String,
});

module.exports = mongoose.model("user", ProcesoSchema);

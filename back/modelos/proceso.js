"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProcesoSchema = Schema({
  user: { type: Schema.ObjectId, ref: "user" },
  subdimension: { type: Schema.ObjectId, ref: "subdimension" },
  estandar: Number,
  descripcion: String,
  errores_comunes: String,
  soluciones: String,
  nivel_desarrollo: Array,
  fecha: Date,
  documentos: String,
});

module.exports = mongoose.model("user", ProcesoSchema);

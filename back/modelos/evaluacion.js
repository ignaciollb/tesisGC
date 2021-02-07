"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const EvaluacionSchema = Schema({
  user: { type: Schema.ObjectId, ref: "user" },
  estandar: { type: Schema.ObjectId, ref: "estandar" },
  proceso: { type: Schema.ObjectId, ref: "proceso" },
});

module.exports = mongoose.model("prestamo", EvaluacionSchema);

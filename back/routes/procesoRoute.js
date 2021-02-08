"use strict";

// Cargamos el módulo de express para poder crear rutas
var express = require("express");

// Cargamos el controlador
var procesoController = require("../controllers/procesoController");

// Llamamos al router
var api = express.Router();

//  Guardar proceso
api.post("/proceso", procesoController.guardar);
api.put("/proceso/:id", procesoController.modificar);
api.delete("/proceso/:id", procesoController.eliminar);
api.get("/proceso", procesoController.listar);

// api.post('/autoguardar',autoController.guardar);

// Exportamos la confi,guración
module.exports = api;

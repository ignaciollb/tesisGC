'use strict'
 
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var userController = require('../controllers/userController');
// var autoController = require('../controllers/autoController');

// Llamamos al router
var api = express.Router();
 
//  Guardar user
api.post('/users', userController.guardar);
// api.get('/users', userController.todos);
// api.get('/userbyID/:id', userController.buscarPorID);


// api.post('/autoguardar',autoController.guardar);

// Exportamos la confi,guración
module.exports = api;

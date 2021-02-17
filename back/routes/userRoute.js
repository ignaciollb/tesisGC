
'use strict'
const passportConfig = require('../config/passport')
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var userController = require('../controllers/userController');
// var autoController = require('../controllers/autoController');
// Llamamos al router
var api = express.Router();

 
//  Guardar user
api.post('/users', userController.guardar);
api.post('/login', userController.postLogin);
api.post('/logout', passportConfig.estaAutenticado,userController.logout)
// api.get('/users', userController.todos);
// api.get('/userbyID/:id', userController.buscarPorID);
api.get('/usuarioInfo', passportConfig.estaAutenticado,(req,res)=>{
    res.json(req.user);
})
api.get('/isLogued',passportConfig.isLogued)

// api.post('/autoguardar',autoController.guardar);

// Exportamos la confi,guración
module.exports = api;

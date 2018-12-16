'use strict'
// Cargamos el módulo de express para poder crear rutas
var express = require('express');
// Cargamos el controlador
var usuariosController = require('../controllers/usuariosController');

// Llamamos al router
var api = express.Router();
// var md_auth = require('../middlewares/authenticated');
// Creamos una ruta para los métodos que tenemos en nuestros controladores
// api.get('/user/:id', md_auth.ensureAuth, UserController.getUser);


// api.get('/usuarios',usuariosController.pruebas);

api.get('/pruebas',usuariosController.pruebas);

// api.get('/pruebas');

// api.get('/test', function (req, res) {


//     console.log(res);
//     // res.send('GET request to the homepage');

//     // console.log(res);
//   });
  


// Exportamos la configuración
module.exports = api;
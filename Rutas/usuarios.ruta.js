"use strict"

//Cargamos las depedencias de express
var express = require("express");

//Cargamos el modulo del controlador
var controladorUsuarios = require("../Controladores/usuarios.controlador.js");

//Cargamos el Router de express.js y con esto podemos crear rutas 
//para nuestra API REST
var api = express.Router();

//Crear la ruta con el metodo GET (nos permite hace lectura)
//para pasar el metodo que va a tener que cargar la pagina cuando hagamos
//la peticiòn HTTP de esa ruta
api.get("/probando-controlador-usuarios", controladorUsuarios.pruebaUsuarios);

//Creams la ruta para crear usuarios y utilizamos el metodo POST
api.post("/crear-usuarios", controladorUsuarios.crearUsuarios);

//Creamos la ruta para el ingreso de usuario 
api.post("/login", controladorUsuarios.ingresoUsuario);
//Exportamos el modulo api
module.exports = api;
"use strict"

//Cargamos las depedencias de express
var express = require("express");

//Cargamos el modulo del controlador
var controladorSlides = require("../Controladores/slides.controlador.js");

//Cargamos el Router de express.js y con esto podemos crear rutas 
//para nuestra API REST
var api = express.Router();

//Crear la ruta con el metodo GET (nos permite hace lectura)
//para pasar el metodo que va a tener que cargar la pagina cuando hagamos
//la peticiòn HTTP de esa ruta
api.get("/probando-controlador-slides", controladorSlides.pruebaSlides);

//Exportamos el modulo api
module.exports = api;
"use strict"

//Cargamos las depedencias de express
var express = require("express");

//Cargamos el modulo del controlador
var controladorUsuarios = require("../Controladores/usuarios.controlador.js");

//Cargamos el Router de express.js y con esto podemos crear rutas 
//para nuestra API REST
var api = express.Router();

//middleware de autentificación
var md_aut = require("../token/aut.js"); 

//Crear la ruta con el metodo GET (nos permite hace lectura)
//para pasar el metodo que va a tener que cargar la pagina cuando hagamos
//la peticiòn HTTP de esa ruta
api.get("/probando-controlador-usuarios", md_aut.autenticacion, controladorUsuarios.pruebaUsuarios);

//Creams la ruta para crear usuarios y utilizamos el metodo POST
//en postman se agrega usuario, en el body con x-www-form-urlencoded
api.post("/crear-usuarios", controladorUsuarios.crearUsuarios);

//Creamos la ruta para el ingreso de usuario 
api.post("/login", controladorUsuarios.ingresoUsuario);

//METODO PUT
//Sirve para poder actualizar información en la base de datos 
api.put("/actualizar-usuario/:id", md_aut.autenticacion, controladorUsuarios.actualizarUsuario);

//Metodo Delete
//Creamos la ruta para borrar usuario y utilizamos el método DELETE
api.delete("/borrar-usuario/:id", md_aut.autenticacion, controladorUsuarios.borrarUsuario)

//Exportamos el modulo api
module.exports = api;
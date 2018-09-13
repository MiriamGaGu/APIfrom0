"use strict"

var express = require("express");
var bodyParser = require("body-parser");

//La variable app es el objeto de express
var app = express();
//Esto va a ser el motor de la aplicaciòn del backend porque va a recibir
//las peticiones http, vamos a poder crear colabradores, vamos a poder crear rutas
//vamos a poder crear todas las cosas fundamentales dentro un framework a nivel backend

/*CARGAR RUTAS*/
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
/*Esto lo que hace es convertir a objetos los dats que nos llegan para
las peticiones http y poder trabajar con ellos dentro del proyecto*/

//CARGAR RUTA
var rutaUsuarios = require("./Rutas/usuarios.ruta.js");
var rutaGaleria = require("./Rutas/galeria.ruta.js");
var rutaSlides = require("./Rutas/slides.ruta.js");

/*RUTAS BASE */
//El metodo get() es una referencia de express para poder habilitar la aplicaciòn en el
//puerto establecido
//se ponen dos parametros, 1.- la ruta d ela aplicacion
//2.- una funcion con dos parametros internos, un primer parametro que es la solicitud
//es decir, lo que va a recibir de la peticiòn y luego un segundo con la respuesta
//que es lo que va a devolver
// app.get("/pruebas", function(req, res){
    //Enviamos el estado de la respuesta, existen varios estados, los màs comunes:
    //200 ok
    //404 Peticion no encontrda
    //500 Error inerno del servidor
//     res.status(200).send({message: "Hola, bienvenido"});
// })

app.use("/api", rutaUsuarios);
app.use("/api", rutaGaleria);
app.use("/api", rutaSlides);
//La accion module.exports es de Express.js para que el modulo
//pueda ser usado en otros archivos
module.exports = app;
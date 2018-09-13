"use strict"
//Requerimos la dependencia Mongoose para acceder a la base de datos
var moongose = require("mongoose");
//El  objeto de tipo Esquema nos permite guardar en una coleccion concreta
//y en un documento concreto dentro de esa coleccion
var Schema = moongose.Schema;

//Creamos el esquema con los respectivos atributos
var usuarioSchema = Schema({
    usuario: String,
    password: String
})

//El objeto usuarios va poder ser instanciado y automaticamente 
//le vamos asignando los valores del esquema
 module.exports = moongose.model("Usuarios", usuarioSchema)
"use strict"

var moongose = require("mongoose");

var Schema = moongose.Schema;


var slideSchema = Schema({
    imagen: String,
    titulo: String,
    descripcion: String
})


 module.exports = moongose.model("Usuarios", slideSchema)
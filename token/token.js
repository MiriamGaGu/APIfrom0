"use strict"

//requerimos la dependencia jwt-simple para crear el token
var token = require("jwt-simple");

//Moment, es una dependenca que nos permite hacer el registro
//de fecha de creaciòn del token y la fecha de expiraciòn 
//de ese mismo token
var momento = require("moment");

//Con esta clave secreta podemos descifrar el token
var claveSecreta = "clave secreta";

//METODO TOKEN

exports.crearToken = function(seleccionUsuario){

    //Datos que vamos a codificar

    var cargarToken = {
        
        //Se usa para guardar el id del objeto
        sub: seleccionUsuario._id,
        nombre: seleccionUsuario.usuario,
        //unix() es el formato timestamp actual
        now: momento().unix(),
        exp: momento().add(30, "days").unix()

    }
    //Devolvemos el token codificado
    return token.encode(cargarToken, claveSecreta)
}

"use strict"

var token = require("jwt-simple");
var momento = require("moment");
var claveSecreta = "clave_secreta";

/*METODO DE AUTENTIFICACION*/

//Creamos un middleware
/*La logica de intercambio de informacion entre aplicaciones */

export.autenticacion = function(req, res, next){

    //Pasamos el token por una cabecera de autenticaciòn 
    if(req.header.authorization){
        return res.status(403).send({mensaje: "La peticion no tiene la cabecera de autenticacion"})

    }else{

        //Quitamos las comillas simples y dobles al toquen con el mètodo replace
        
        var tokenEnviado = req.header.authorization.replace(/['"]+/g, '');
    }

}
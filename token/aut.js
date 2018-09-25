"use strict"

//jwt-simple me permite generar los token
var token = require("jwt-simple");
var momento = require("moment");//crea la fecha de exp y de creación
var claveSecreta = "clave_secreta";//Tiene que coincidir con la que hicimos en le token 

/*METODO DE AUTENTIFICACION*/

//Creamos un middleware
/*La logica de intercambio de informacion entre aplicaciones */

exports.autenticacion = function(req, res, next){

    //Pasamos el token por una cabecera de autenticaciòn 
    if(req.header.authorization){
        
        return res.status(403).send({mensaje: "La peticion no tiene la cabecera de autenticacion"})

    }else{

        //Quitamos las comillas simples y dobles al toquen con el mètodo replace
        var tokenEnviado = req.headers.authorization.replace(/['"]+/g, '');

        // Sentencia de manejo de excepciones 
        //La sentencia try...catch marca un bloque de instrucciones a intentar que puedan causar 
        //alguna excepción, y decarar una o más respuestas en caso de que una expresión sea arrojada
        // si una expresión es arrojada, la sentencia try...catch se encarga de atraparla

        //Un bloque try es usado para probar una sentencia

        try{
            
            var cargarToken = token.decode(tokenEnviado, claveSecreta);

            //Comparar la fecha actual con la expiración del token
            if(cargarToken.exp <= momento().unix()){

                //si la fecha de expiración es menor o igual al momento actual
                //es porque ya expiro

                //exp = fecha de expiración del token
                //momento = momento en el que se hace el token 
                //unix = fecha y hora actual

                return res.status(403).send({message: "El token ha expirado"})

            }

            //Un bloque catch es usado para capturar todas las excepciones que puedan ser generadas en el boque try.

        }catch(excepcion){

            console.log(excepcion)
            return res.status(403).send({message: "El token no es valido"})
        }

        //Añadimos al objeto request una propiedad de usuario para siempre
        //tener disponible el token en cualquier sesión. Con esto no tenemos que estar
        //descodificando el token en cada sesión que ingrese el usuario

        req.usuarioToken = cargarToken;

        next();
        
    }

}
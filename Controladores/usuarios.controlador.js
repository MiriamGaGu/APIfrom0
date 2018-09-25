"use strict"

//METODO DE PRUEBA 
function pruebaUsuarios(req, res){
    res.status(200).send({mensaje: "Probando el controlador de usuarios"})

}

//importamos el modelo deusuarios
var Usuarios = require("../modelos/usuarios.modelo.js");

//dependencia para encriptar contraseñas
var bcrypt = require("bcrypt-nodejs");

//Importamos el Token
var token = require("../token/token.js");

//Metodo para crear usuarios
function crearUsuarios(req, res){
   
    //creamos una variable que traiga el objeto del modelo usurios
    var usuarios = new Usuarios();

    //recogemos los parametros que llega por la peticion POST
    var parametros = req.body;
    // console.log(parametros);

    usuarios.usuario = parametros.usuario;

    if(parametros.password){

        bcrypt.hash(parametros.password, null, null, function(error, hash){

            usuarios.password = hash; 

            if(parametros.usuario != null){

                usuarios.save((error, usuarioGuardado) =>{

                    if(error){

                        res.status(500).send({mensaje:"Error al guardar el usuario"})

                    }else{

                        res.status(200).send({usuarioGuardado})
                    }
            
                })

            }
        })
        

    }

}

//Mètodopara ingreso de usuarios
function ingresoUsuario(req, res){

    var parametros = req.body;
    var usuario = parametros.usuario;
    var password = parametros.password;

    Usuarios.findOne({usuario:usuario}, (error, seleccionUsuario)=>{
    
    if(error){

        res.status(500).send({mensaje: "Error al ingresar el usuario"})
    }else{

        if(!usuario){

            res.status(404).send({mensaje: "El usurio no existe"})

        }else{

            // res.status(200).send({seleccionUsuario});
            bcrypt.compare(password, seleccionUsuario.password, function(error, ok){

                if(ok){

                // res.status(200).send({seleccionUsuario});
                   
                //Debemos enviar un parametro token en verdadero
                if(parametros.token){

                    //Devolevemos un token JWT
                    res.status(200).send({token: token.crearToken(seleccionUsuario)})
                }
                }else{

                    res.status(404).send({mensaje: "No se ha podido ingresar el  usuario"})
                }
            })
        }
    }

    })

}

//Método Actualizar Usuario
function actualizarUsuario(req, res){

    //Llamamos por parametros el id que se actualizará
    var id = req.params.id;

    //Tomamos los datos del formulario(postman)
    var actualizar = req.body;

    if(id != req.usuaioToken.sub){
        return res.status(500).send({mensaje: "No tienes permiso para actualizar este usuario"})
    }

    // Recorremos a base de datos con el método findByIdAndUpdate

    Usuarios.findByIdAndUpdate(id, actualizar, (error, usuarioActualizado) =>{
        if(error){
            res.status(500).send({mensaje: "Error al actualizar el usuario"})
        }

        else{

            if(!usuarioActualizado){

                res.status(404).send({mensaje: "No se ha podido actualizar el usuario"})

            }else{

                res.status(200).send({usuarioActualizado})
            }
        }

    })


}


//Exportamos los metodos del modulo
module.exports = {
    pruebaUsuarios,
    crearUsuarios,
    ingresoUsuario
}
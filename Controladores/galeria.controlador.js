"use strict"

//METODO DE PRUEBA 
function pruebaGaleria(req, res){
    res.status(200).send({mensaje: "Probando el controlador de Galeria"})

}

//Exportamos los metodos del modulo
module.exports = {
    pruebaGaleria
}
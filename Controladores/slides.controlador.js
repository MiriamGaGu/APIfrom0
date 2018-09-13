"use strict"

//METODO DE PRUEBA 
function pruebaSlides(req, res){
    res.status(200).send({mensaje: "Probando el controlador de Slides"})

}

//Exportamos los metodos del modulo
module.exports = {
    pruebaSlides
}
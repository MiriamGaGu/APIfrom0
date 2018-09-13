"use strict"
//Utilzar orden "use strict" para poder meter instrucciones de los nuevos estandares de JS

//LIBRERIA MONGODB
//Utilizamos mongoose como libreria para intermediar con la base de datos de monDB
//Cargamos la libreria utilizando la funciòn require
var mongoose = require("mongoose");

/*MODULOS DE EXPRESS*/
var app = require("./app")
//Esto es para establecer la variable de entorno PORT (puerto HTTP)
var port = process.env.PORT || 1234;

/*CONEXION A LA BASE DE DATOS*/
mongoose.connect('mongodb://localhost:27017/myAPI', (error, respuesta) =>{
    if(error){
        throw error;
    }else{
        console.log("La conexiòn a base de datos es correcta =]");
        app.listen(port, function(){
            console.log("Servidor de myAPI en http://localhost:"+port)
        })
    }

})


let finDeTransmisionDeDatos = function(id){
    console.log("Transferencia", id , "terminada"); 
}

let obtenDatosDeInternet = function(id, duracion){
    console.log("proceso", id, "obteniendo datos de internet"); 
    setTimeout(finDeTransmisionDeDatos, duracion, id); 
}

module.exports.getDatos = obtenDatosDeInternet; 
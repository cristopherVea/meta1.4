let finDeTransmicion = function (id, callback){
    console.log('transferencia', id, 'Terminada');
    callback();  
}

let obtenerDatos = function (id, duracion, callback){
    console.log('Proceso', id, 'obteniendo datos'); 
    setTimeout(finDeTransmicion, duracion, id, callback); 
}

obtenerDatos(1,1000, function(){ 
obtenerDatos(2,500, function(){ 
obtenerDatos(3,1500,function(){ 
obtenerDatos(4,2000, function(){
console.log("terminado"); 

})
})
})
})
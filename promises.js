const promesa = new promesa(function(resolve, reject){
    const desicion = "cumplida"; 
    const resultadoEsperado = "cumplida"; 
    if(desicion==resultadoEsperado){
        resolve("Resultado esperado");
    }
    else{
        Reflect("resultado no esperado"); 
    }
    }); 



    async function promesa(){
        try{
            const r = await promesa(); 
            console.log(r); 
            console.log("Felicidades, promesa, cumplida"); 
        }
    catch(error){
        console.log(error); 
        console.log("loser, promesa, incumplida"); 
    }
        console.log("Independientemente del resultado la vida sigue"); 
    }
    promesa(); 

    
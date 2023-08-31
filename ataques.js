
const ataqueGolpe = function(){
	return "Atacando con golpe";
}
const ataqueRayo = function(){
	return "Atacando con rayo fulminante";
}
const ataqueFuego = function(){
    return "Atacando con arma de fuego"; 
}

const personajes = [
    { clave: 1, nombre: 'Personaje 1' },
    { clave: 2, nombre: 'Personaje 2' },
    { clave: 3, nombre: 'Personaje 3' },
    { clave: 3, nombre: 'Personaje 4' },
  ];

  function numeros(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } 

for(let i = 0; i <3; i++){
  switch (numeros(0,2)) {
    case 0:
        const personaje = personajes[i+1]; 
        console.log(ataqueGolpe() + personaje); 
      break;
    case 1:
        const personaje2 = personajes[i+1]; 
        console.log(ataqueRayo() + personaje2); 
      break;
    case 2:
        const personaje3 = personajes[i+1]; 
        console.log(ataqueFuego() + personaje3);
      break;
    default:
      console.log("Día inválido");
      break;
  }
}


let miNumero = "18";
let edadVoto = 18;
let edad = Number(miNumero)
console.log( edad );

//Este es el codigo usando todo If Else, es mas largo lleva mas lineas de codigo por lo que puede ser mas dificil de leer.

if( isNaN(edad)){
    console.log('No es un numero')
}
else{
    if(edad >= edadVoto){
        console.log('Puede votar');
    }
    else{
        console.log('Muy jover para votar');
    }
}

//Este es el codigo simplificado con Funcion ternaria, el mismo tiene menos lineas de codigo.

if( isNaN(edad)){
    console.log('No es un numero')
}
else{
    resultado = (edad >= edadVoto) ? 'Puede votar' : 'Muy jover para votar';
    console.log(resultado)
}
//Es un marcador que te indica algo, no es recomendado usar por que puede romper el codigo.
inicio:
for(let contador = 0; contador <= 10; contador++){
    if( contador % 2 !== 0){
        continue inicio;//ir a la siguiente iteracion
    }
        console.log(contador);
}
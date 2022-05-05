//En este caso se le dice que cuando contador no es par (1,3,5...), se pase a la siguiente iteracion del ciclo aumentando en 1 el contador, cuando es par se imprime.

for(let contador = 0; contador <= 10; contador++){
    if( contador % 2 !== 0){
        continue;//ir a la siguiente iteracion
    }
        console.log(contador);
}
//Ejemplo de OR (||), regresa true si cualquiera de los operando es true (solo 1 tiene que ser verdadero)

let vacaciones = true, diaDescanso = false;
if(vacaciones || diaDescanso){
    console.log("El padre puede asistir al juego del hijo");
}
else{
    console.log('El padre esta ocupado');
}

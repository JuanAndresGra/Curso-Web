//La funcion se puede usar en cualquier lado del programa no tiene que seguir el orden, JS sube la funcion al comienzo el mismo (Histing)
miFuncion(4, 2);



//Una funcion es un codigo re-utilizable que va a poder ser invocada todas las veses que se quiera, esta realiza una tarea que le asignemos.
//Declaracion de la funcion.
function miFuncion(a, b){
    console.log("Suma: " + (a + b));
}

//Llamando a la Funcion
miFuncion(2 , 3);
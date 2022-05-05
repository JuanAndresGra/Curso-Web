//Una funcion es un codigo re-utilizable que va a poder ser invocada todas las veses que se quiera, esta realiza una tarea que le asignemos.
//Declaracion de la funcion.
function miFuncion(a, b){
    //arguments.length solo se puede usar dentro de la funcion. esto muestra la cantidad de argumentos, esto demuestra que son objetos.
    console.log(arguments.length)
    return a + b;
}

//Llamando a la Funcion
let resultado = miFuncion(2 , 3);

console.log(resultado)

//Funcion de tipo expresion o anonima, no se le asigna un nombre, se asigna a una variable "let", cuando definimos de este modo si lleva ; al final ya que es una linea que se ejecuta.
let sumar = function (a, b){
    return a + b
};

resultado = sumar(1, 2);
console.log(resultado);

//Funcion self invoking es una funcion que se llama a si misma, estas funciones no son reutilizables.
(function (a, b){
    console.log("Ejecutando la funcion: " + (a + b));
})(3, 4);

console.log(typeof miFuncion)

//Funciones como objetos, pueden tener las propiedades de los objetos.
//toString muestra en texto lo que definis.
var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto)
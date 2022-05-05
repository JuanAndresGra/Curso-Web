//Funcion de tipo expresion o anonima, no se le asigna un nombre, se asigna a una variable "let", cuando definimos de este modo si lleva ; al final ya que es una linea que se ejecuta.
let sumar = function (a = 4, b = 9){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return a + b
}; //Parametros a + b


//Los valores asignados sobrescriben los valores por defecto definidos en la funcion.
//JS es flexible si no definis nada te pone undifined, no tenes que definir todo para que las cosas funcionen.
resultado = sumar(4, 4); //Argumentos son los numeros valores.
console.log(resultado);


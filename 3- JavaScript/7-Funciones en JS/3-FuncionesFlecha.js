//Funcion de tipo expresion o anonima, no se le asigna un nombre, se asigna a una variable "let", cuando definimos de este modo si lleva ; al final ya que es una linea que se ejecuta.
let sumar = function (a, b){
    return a + b
}; //Parametros a + b

resultado = sumar(1, 2);        //Argumentos son los numeros valores.
console.log(resultado);

//Es una forma resumida de crear una funcion exprecion, en esta no se usa la palabra reservada "function" no "{}" no "return" 
const sumarFuncionFlecha = (a, b) => a + b;
resultado = sumarFuncionFlecha(3, 5); 
console.log(resultado)
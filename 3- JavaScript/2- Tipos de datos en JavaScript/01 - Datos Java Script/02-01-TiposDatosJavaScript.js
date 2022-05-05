/*
Ejemplos de tipos de datos en JavaScript
*/

//Tipo de dato string
var nombre = "Carlos"
console.log(nombre);

//Las variables no se definen, var sirve para todo, typeof nos puede decir que tipo de datos contiene una variable.
nombre = 10
console.log(typeof nombre)

//Tipo de dato numerico
var numero = 1000;
console.log(numero)

//Tipo de dato object
var objeto = {
    nombre : "Juan",
    apellido : "Grana",
    telefono : "097212324"
}

console.log(objeto);

//Tipo de dato boolean (true, false)
var bandera = true;
console.log(bandera)

//Tipo de dato function
function miFuncion(){}
console.log(miFuncion)

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo)

//Tipo clase es una funcion
class Persona{
    constructor(nombre, apellido)
    {
        this.nombre = nombre;
        this.apellido = apellido
    }

}
console.log(Persona)

//Tipo de dato undefined
var x;
console.log(x)

x = undefined;
console.log(x);

//null = ausencia de valor
var y = null;
console.log(y)

//Tipo de dato Array (arreglo)
var autos = ['BMW','Audi','Volvo'];
console.log(autos)
console.log(typeof autos)

//Tipo de dato Empty (Vacio)
var z = '';
console.log(z)
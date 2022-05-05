var nombre = 'Juan';
var apellido = 'Grana';
var nombreCompleto = nombre + ' ' + apellido;

console.log(nombreCompleto);

//Esto es lo mismo que lo anterior pero en 2 lineas.
var nombreCompleto2 = 'Carlos' + ' ' + 'Lara';
console.log(nombreCompleto2)

//La concatencacion transforma todo a string
var x = nombre + 219;
console.log(x)

x = nombre + (2+4);
console.log(x)

// si los numeros se encuentran primero se suma.
x = 2 + 4 + nombre;
console.log(x);
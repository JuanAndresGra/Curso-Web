//primitivos no tienen atributos ni metodos, solo valores individuales.
let x = 10;
console.log(x.length);

//persona es un objeto en memoria con un valor exadecimal, este objeto contiene las propiedades definidas.
//Esta es la forma mas usual de definirlos.
let persona = {
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@mail.com",
    edad: 28,
    //De esta forma se define una funcion dentro de un objeto.
    nombreCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
}

//imprime individual
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.apellido);
console.log(persona.email);
//Para llamar la funcion hay que usar los parentesis al final si no no funciona.
console.log(persona.nombreCompleto())

//imprime todo el objeto
console.log(persona);


//Forma de crear un objeto, reservando un espacio en memoria "nwe" este objeto queda vacio, y en las lineas siguentes se define sus propiedades.

let persona2 = new Object();
persona2.nombre = "Carlos";
persona2.direccion = "Saturno 15";
persona2.tel = "099565632";

console.log( persona2.tel );
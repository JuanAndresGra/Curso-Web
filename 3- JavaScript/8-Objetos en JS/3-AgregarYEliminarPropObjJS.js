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

//De esta forma se agrega propiedades a los objetos.
persona.tel = "4555661";
//asi de simple se modifica un dato dentro de un objeto.
persona.tel = "8888888";
//Cuidado con la sintaxis por que si queres cambiar un dato podes crear un nuevo dato.
persona.te1 = "4564654";

console.log( persona );

//para eliminar una propiedad.
delete persona.te1;

console.log( persona );
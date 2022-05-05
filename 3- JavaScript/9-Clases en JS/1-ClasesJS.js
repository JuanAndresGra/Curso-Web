//Clase Persona de la cual se crean objetos.
class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre;
    }
}

//Objetos creados a partir de la clase, guardan su propio lugar en memoria.
let persona1 = new Persona("Juan", "Grana");
console.log( persona1 );

let persona2 = new Persona("Carlos", "Lara");
console.log( persona2 )
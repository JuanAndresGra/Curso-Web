//Las propiedades se suelen iniciar con un _ para usar el nombre en una funcion.
class Persona{
    
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre
    }

    set nombre( nombre ){
        this._nombre = nombre;
    }

}

//usamos la funcion get para llmar el nobre de la persona1
let persona1 = new Persona("Juan", "Grana");
persona1.nombre = "Juan Andres";//llama el metodo set nombre se le pasa el valor('Juan Andres')
console.log( persona1.nombre ); // llamaos metodo get nombre
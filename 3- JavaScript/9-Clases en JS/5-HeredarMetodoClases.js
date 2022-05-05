//Clase padre
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
    get apellido(){
        return this._apellido
    }
    set apellido( apellido ){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this._nombre + " " + this._apellido;
    }

}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); // llamar al constructor padre.
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
}


let persona1 = new Persona("Juan", "Grana");
persona1.nombre = "Juan Andres";//llama el metodo set nombre se le pasa el valor('Juan Andres')
console.log( persona1.nombre ); // llamaos metodo get nombre

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log( empleado1 );
console.log( empleado1.nombre ); // esto se hereda de la clase padre.
console.log(empleado1.nombreCompleto() );
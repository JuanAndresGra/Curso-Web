class Persona{

    static contadorPersonas = 0; // atributo de nuestra clase

  
    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }
    get idPersoan(){
        return this._idPersona
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
    get edad(){
        return this._edad;
    }
    set edad( edad ){
        this._edad = edad;
    }
    toString(){
        return `ID Global:(${this._idPersona})- ${this._nombre} ${this._apellido}, Age ${this._edad}`;
    }
}

class Empleado extends Persona{

    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad)
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleados;
    }
    get idEmpleado(){
        return this._idEmpleado;
    }
    get sueldo(){
        return this._sueldo;
    }
    set sueldo(sueldo){
        this._sueldo = sueldo;
    }
    toString(){
        return `${super.toString()}, ID Empleado:(${this._idEmpleado}), $${this._sueldo} Pesos`;
    }
}

class Cliente extends Persona{

    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad);
        this._fechaRegistro = fechaRegistro;
        this._idCliente = ++Cliente.contadorClientes;
    }
    get idCliente(){
        return this._idCliente;
    }
    get fechaRegistro(){
        return this._fechaRegistro;
    }
    set fechaRegistro( fechaRegistro ){
        this._fechaRegistro = fechaRegistro;
    }
   toString(){
       return `${super.toString()}, ID Cliente: (${this._idCliente}), ${this._fechaRegistro}`;
   }
}

//Pruebas clase Persona

let persona1 = new Persona('Juan', 'Grana', 28);
console.log( persona1.toString() );

let persona2 = new Persona('Carlos', 'Ramirez', 23);
console.log( persona2.toString() );

//Prueba Clase Empleado

let empleado1 = new Empleado('Ramon', 'Grana', 55, 30000);
console.log( empleado1.toString() );

let empleado2 = new Empleado('Melchor', 'Gaspar', 65, 300000);
console.log( empleado2.toString() );

//Prueba Clase Cliente

let cliente1 = new Cliente('Cecilia', 'Goycoechea', 25, new Date());
console.log( cliente1.toString() );

let cliente2 = new Cliente('Crla', 'Gonsalez', 36, new Date());
console.log( cliente2.toString() );
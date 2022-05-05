class Persona{

    static contadorPersonas = 0; // atributo de nuestra clase

  
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this.idPersona = ++Persona.contadorPersonas;
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
        return this.idPersona + ") " + this._nombre + " " + this._apellido;
    }
    //Sobrescribiendo el metodo de la clase Padre (Object)
    toString(){
        //se aplica polimorfismo (Multiples formas en tiempo de ejecucion)
        //El metodo que se ejecuta depende si es una referencia de tipo padre o tipo hijo.
        return this.nombreCompleto();
    }
    static saludar(){
        console.log("Saludos desde metodo static.");
    }
    static saludar2(persona){
        console.log(persona.nombre + " " + persona.apellido);
    }
}

class Empleado extends Persona{
    constructor(nombre, apellido, departamento){
        super(nombre, apellido); // llamar al constructor de la clase padre.
        this._departamento = departamento;
    }
    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    //sobreescritura es modificar el comportamiento de un metodo de la clase padre.
    nombreCompleto(){
        return super.nombreCompleto() + ", " + this.departamento;
    }
}


let persona1 = new Persona("Juan", "Grana");
console.log( persona1.toString() );

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log( empleado1.toString() );

console.log( Persona.contadorPersonas);

let persona2 = new Persona('Karla', 'Ramirez');
console.log( persona2.toString());
console.log( Persona.contadorPersonas);
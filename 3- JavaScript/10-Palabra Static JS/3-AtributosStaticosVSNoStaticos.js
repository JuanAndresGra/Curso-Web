class Persona{

    static contadorObjetosPersona = 0; // atributo de nuestra clase

    email = "Valor default email";//atributo de nuestros objetos

    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona++;
        console.log( "Se Incrementa contador: " + Persona.contadorObjetosPersona);
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
persona1.nombre = "Juan Andres";//llama el metodo set nombre se le pasa el valor('Juan Andres')
console.log( persona1.nombre ); // llamaos metodo get nombre
console.log( persona1.nombreCompleto())

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log( empleado1 );
console.log( empleado1.nombre ); // esto se hereda de la clase padre.
console.log(empleado1.nombreCompleto() );

console.log( empleado1.toString() );

//persona1.saludar(); no es posible llamar un metodo static desde un objeto.

//Metodos usados como static solo para clases
Persona.saludar();
Persona.saludar2( persona1 );

Empleado.saludar();
Empleado.saludar2( empleado1 );

//Atributos usados como static solo para clases
//con los objetos no funciona
console.log( persona1.contadorObjetosPersona );

//Funciona con la clase
console.log( Persona.contadorObjetosPersona );

console.log( Empleado.contadorObjetosPersona );

console.log( persona1.email );
console.log( empleado1.email );
console.log( Persona.email );
console.log( Empleado.email );
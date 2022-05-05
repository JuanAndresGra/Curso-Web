//Constructores con la funcion new, cada que se usa esta palabra se reserva un lugar en memora para los objetos.
//Los constructores se definen con Mayuscula
//Funcion constructor de objetos tipo persona
//cuando aparece this estas trabajando con la propiedad que se va a crear
function Persona(nombre, apellido, email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    //Si queres agregar funciones a todos los objetos creados a partir de este constructor, tenes que agregarlos aca para que se herede.
    this.nombreCompleto = function(){
        return this.nombre + " " + this.apellido;
    }
}

let padre = new Persona("Juan", "Perez","jperez@mail.com");
console.log( padre.nombreCompleto() );

let madre = new Persona("Maria", "Gonzales", "lgonzales@mail.com")
console.log( madre.nombreCompleto() );

//Los cambios sobre un objeto no cambian otro por que estan en diferente lugar de memoria guardados.
padre.nombre = "Carlos";

console.log( padre );
console.log( madre );
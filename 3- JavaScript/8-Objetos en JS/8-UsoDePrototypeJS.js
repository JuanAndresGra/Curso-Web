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

//Con esta funcion podemos agregar un nuevo atributo a la funcion Persona, sin tener que agregarlo al cuerpo de la definicion persona.
Persona.prototype.tel = "45556632"

let padre = new Persona("Juan", "Perez","jperez@mail.com");
//Esta propiedad queda definida solo en este objeto
/*padre.tel = "787989798";*/
padre.tel = "11233445";
console.log( padre.tel );

let madre = new Persona("Maria", "Gonzales", "lgonzales@mail.com")
console.log( madre.tel );


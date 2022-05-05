//persona es un objeto en memoria con un valor exadecimal, este objeto contiene las propiedades definidas.
//Esta es la forma mas usual de definirlos.
let persona = {
    nombre: "Juan",
    apellido: "Perez",
    email: "jperez@mail.com",
    edad: 28,
    //Agregamno metodo set
    //por buenas practicas el idioma se almacea en Mayusculas
    idioma: "mx",
    get lang(){
        return this.idioma.toUpperCase();
    },
    //Establescemos set
    set lang( lang ){
        this.idioma = lang.toUpperCase();
    },
    //al agregar get antes de la funcion ya se establece como tal por lo que no hay que definir la palabra "function", al imprimir no se usa () ya que queda establecido como un metodo.
    get nombreCompleto(){
        return this.nombre + " " + this.apellido;
    }
}

//cambio de minusculas a mayus por metodo get
console.log( persona.lang );

//Se llama al metodo set, el cual setea un nuevo idioma en este caso, y lo almacena en MAyusculas.
persona.lang ="en";

console.log( persona.lang );
console.log( persona.idioma);

console.log( persona.nombreCompleto );

//get es obtener en ingles.




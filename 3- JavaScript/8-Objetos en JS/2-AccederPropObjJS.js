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

console.log( persona.nombre);
//una forma diferente de acceder a la variable que tiene el objeto.
console.log(persona["nombre"]);

//for in, se usa para reccorrer todas las propiedades de un objeto
for( nombrePropiedad in persona){
    console.log( nombrePropiedad );
    console.log( persona[nombrePropiedad])
}
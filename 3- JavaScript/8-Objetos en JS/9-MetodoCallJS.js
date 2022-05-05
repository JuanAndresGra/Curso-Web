let persona1 ={
    nombre: "Juan",
    apellido: "Grana",
    //                      =>argumentos son titulo y tel, se definen entre parentesis. 
    nombreCompleto: function(titulo, tel){
        return titulo + ': ' + this.nombre + " " + this.apellido + ' ' + tel;
    }
}

let persona2 = {
    nombre: "Carlos",
    apellido: "Lara"
}

//Uso de call para usar 
//el metodo nombre completo que pertenece a persona1.nombreCompleto con los datos de persona2.
//Tambien se pueden pasar argumentos con el metodo call, los cuales se definen entre ( dentro de la funcion )
console.log( persona1.nombreCompleto('Lic.', '097235416') );

console.log( persona1.nombreCompleto.call( persona2, "Ing", "09988563" ) )

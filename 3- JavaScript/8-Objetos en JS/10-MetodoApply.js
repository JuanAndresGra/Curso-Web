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

//Uso de apply para usar 
//Nos permite llamar un metodo en un objeto que no tiene definido cierto metodo.
console.log( persona1.nombreCompleto("Lic", "45663321") );

let arreglo = ["Ing","544666"];
console.log( persona1.nombreCompleto.apply( persona2, arreglo ) );

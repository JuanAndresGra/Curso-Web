//Manera antigua de declarar arreglos no se usa mas.
//let autos = new Array( 'BMW', 'Mercedes Benz', 'volvo' );


//Esta es la forma actual de declarar.
const autos = ['BMW', 'Mercedes Benz', 'volvo'];
console.log(autos);


//El indice en JS comienza en 0,1,2... de la siguente manera se entra al valor dentro del arreglo.
console.log(autos[0])
console.log(autos[1])


//Forma de recorrer todos los elementos dentro de un arreglo con un 'for'.
for(let i = 0; i < autos.length; i++){
    console.log(i + ' : ' + autos[i] )
}


//Como modificar los elementos de un arreglo.
autos[1] = 'MercedesBenz';
console.log(autos[1])


//Agregar elementos al final a un arreglo con una "Funcion"
autos.push('Audi');
console.log(autos);


//Nuevas formas de agregar elementos a un arreglo

//Cuando usas la propiedad length de la siguente forma agregas una propiedad en el ultimo lugar de un arreglo.
console.log(autos.length);
autos[autos.length] = 'Cadillac';
console.log(autos);


//De esta forma se puede agregar elementos en un lugar que vos quieras, no se recomienda dejar un lugar del indice vacio por que ocupa memoria los valores en blanco.
autos[6] = 'Porsche';
console.log(autos)


//Como preguntar en JS si estamos trabajando con un Arreglo (Array), alguna ves lo vas a usar !

console.log(Array.isArray(autos));

console.log( autos instanceof Array);
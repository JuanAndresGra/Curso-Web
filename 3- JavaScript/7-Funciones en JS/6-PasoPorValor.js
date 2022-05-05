//valor primitivo, no puede contener atributos ni metodos asociados
let x = 10; 

function cambiarValor(a){
    a = 20;
}

//Paso por valor, la variable x no cambia su valor, a la variable 'a' se le pasa el valor de 10 pero, luego se la modifica a 20, pero x sigue siendo 10, "a" no es una variable es un metodo por lo que al finalizar se destrulle.
cambiarValor(x);//10
console.log(x);
console.log(a);
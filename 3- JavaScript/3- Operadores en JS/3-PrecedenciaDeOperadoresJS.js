let a = 3, b = 2, c = 1, d = 4;

let z = a * b + c / d;
console.log( z )

//Primero se hace la multiplicacion y luego la suma.
z = c + a * b / d;
console.log( z )

//Con parentesis se puede modigficar precedencia
z = (c + a) * b / c;
console.log( z )
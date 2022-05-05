let a = 3, b = 2;
let z = a + b;

//Incremento
//Pre-incremento (el operador ++ antes de la variable)
z = ++a;
console.log(a);
console.log(z);

//Post-incrementeo (El operador ++ despues de la variable)
// "b" primero se asigna a "z" luego se le hace el incremento de 1.
z = b++;
console.log(b);
console.log(z);

//Decremento
//pre-decremento (a vale 4 por que se le realizo un pre-incremento en lineas anteriores)
z = --a;
console.log(a);
console.log(z);

//Post-decremento (Vale 3 por lineas anteriores)
z = b--;
console.log(b);
console.log(z);

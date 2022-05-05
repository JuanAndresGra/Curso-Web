//Tipo referencia, son datos almacenados en un objeto
const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}

//Todo lo definido fuera de las {}, esta definido fuera de el metodo, cuando termina de ejecutar un metodo, las variables siguen existiendo.

function cambiarValorObjeto(p1){
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara'
}

//paso por referencia(si no se agrega esta linea de codigo no cambian los valores)
cambiarValorObjeto( persona );

console.log(persona);
class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }
    get tipoEntrada(){
        return this._tipoEntrada;
    }
    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    get marca(){
        return this._marca;
    }
    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{
    static contadorRatones = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }
    get idRaton(){
        return this._idRaton;
    }
    toString(){
        return `Raton: [idRaton: ${this._idRaton}, Tipo Entrada: ${this._tipoEntrada}, Marca: ${this._marca}]`;
    }
}



class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }
    get idTeclado(){
        return this._idTeclado;
    }
    toString(){
        return `Teclado: [Id Teclado: ${this._idTeclado}, Tipo Entrada: ${this._tipoEntrada}, Marca: ${this._marca}]`;
    }
}

class Monitor{
    static contadorMonitores = 0;

    constructor(marca, tamano){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._tamano = tamano
        this._marca = marca;
    }
    get idMonitor(){
        return this._idMonitor;
    }
    toString(){
        return `Monitor: [Id Monitor: ${this._idMonitor}, Marca: ${this._marca}, Tamano: ${this._tamano}]`;
    }
}

class Computadora{
    static contadorComputadoras = 0;

    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }
    toString(){
        return`Computadora: ID:${this._idComputadora}, ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
    }
}

class Orden{
    static contadorOrden = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrden;
        this._computadoras = [];
    }
    get idOrden(){
        return this._idOrden;
    }
    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }
    mostrarOrden(){
        let computadorasOrden = "";
        for( let computadora of this._computadoras ){
            computadorasOrden += `\n${computadora}`;
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

let raton1 = new Raton('Bluetooth', 'Dell');
let raton2 = new Raton('USB', 'HP');
raton2.marca = 'Razer';
console.log( raton1.toString() );
console.log( raton2.toString() );


let teclado1 = new Teclado("USB" ,"Logitech");
let teclado2 = new Teclado("Bluetooth", "Acer");
console.log(teclado1.toString());
console.log(teclado2.toString());

let monitor1 = new Monitor("HP", "19");
let monitor2 = new Monitor("Acer", "27");
console.log(monitor1.toString());
console.log(monitor2.toString());

let computadora1 = new Computadora('Hp', monitor1, raton1, teclado1);
let computadora2 = new Computadora('Acer', monitor2, raton2, teclado2);
//Sintaxis template string, cuando usas ${} para generar el string, de esta manera no tenes que llamar el toString
console.log(`${computadora1}`);
//Modo normal de llamar el toString
console.log(computadora2.toString());

let orden1 = new Orden();
orden1.agregarComputadora(computadora1);
orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora1);
orden1.mostrarOrden();

let orden2 = new Orden();
orden2.agregarComputadora(computadora2);
orden2.agregarComputadora(computadora1);
orden2.agregarComputadora(computadora2);
orden2.mostrarOrden();
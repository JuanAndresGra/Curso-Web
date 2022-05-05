class Producto{

    static contadorProducto = 0; // atributo de nuestra clase

  
    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;
        this._idProducto = ++Producto.contadorProducto;
    }
    get idProducto(){
        return this._idProducto
    }
    get nombre(){
        return this._nombre
    }
    set nombre( nombre ){
        this._nombre = nombre;
    }
    get precio(){
        return this._precio
    }
    set precio( precio ){
        this._precio = precio;
    }
    toString(){
        return `ID producto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: $${this._precio}`;
    }   
}

class Orden{

    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    } 

    constructor(){
        this._idOrdenes = ++Orden.contadorOrdenes;
        this._productos = [];
        //No se esta utilizando por que se usa el metodo push.
        //this._contadorProductosAgregados = 0;
    }
    get idOrdenes(){
        return this._idOrdenes;
    }
    agregarProducto(producto){
        if( this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto);
            //Esta sintaxis es opcional no es la deseada.
            /*this._productos[this._contadorProductosAgregados++] = producto;*/
        }
        else{
            console.log("No se pueden agregar mas productos");
        }
    }
    calcularTotal(){
        let totalVenta = 0;
        //sintaxis simplificada para iterar arreglos en JS
        for(let producto of this._productos){
            totalVenta += producto.precio;//totalVenta = totalVenta + producto.precio}
        }
        return totalVenta;
    }
    
    mostrarOrden(){
        let productoOrden = '';
        for( let producto of this._productos ){
            productoOrden += '\n-' + producto.toString() + " ";
        }
        console.log(`Orden: N${this._idOrdenes} Total: $${this.calcularTotal()}, 
Productos : ${productoOrden}`);
    }
}


//Pruebas
let producto1 = new Producto("Pantalon", 200);
let producto2 = new Producto("Camisa", 100);
console.log( producto1.toString() );
console.log( producto2.toString() );

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto('Cinturon', 50);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.mostrarOrden();


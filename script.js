
class Productos {
    constructor(prenda, precio, stock, color) {
        this.prenda = prenda
        this.precio = precio
        this.stock = stock
        this.color = color
    }
}

const Productos1 = new Productos ("remera", 900, 5, "gris")
const Productos2 = new Productos ("jean", 2900, 3, "negro")
const Productos3 = new Productos ("buzo", 1800, 7, "bicolor")

console.log(Productos)

Productos.push("pollera", 1300, 4, "escoses")

console.log(Productos)
class Prenda {
    constructor(tipoDePrenda, nombre, talle, color, stock, precio) {
        this.tipoDePrenda = tipoDePrenda
        this.nombre = nombre
        this.talle = talle
        this.color = color
        this.stock = stock
        this.precio = precio
    }
}


const remeraS = new Prenda("Remera", "Sunshine", "S", "Negra", 6 , 1300)
const remeraM = new Prenda("Remera", "Sunshine", "M", "Negra", 5, 1300)
const remeraL = new Prenda("Remera", "Sunshine", "L", "Negra", 3, 1300)
const buzoS = new Prenda("Buzo", "Iman", "S", "Gris", 8, 2900)
const buzoM = new Prenda("Buzo", "Iman", "M", "Gris", 4, 2900)
const buzoL = new Prenda("Buzo", "Iman", "L", "Gris", 7, 2900)
const buzoOversize = new Prenda("Buzo", "Covid-19", "Unico", "Negro", 10, 3500)
const pantalon = new Prenda("Jean", "Plac", "2", "Beige", 15, 4700)

const remeras = [remeraS, remeraM, remeraL]
const buzos = [buzoS, buzoM, buzoL, buzoOversize]
const pantalones = [pantalon]

let respuesta = prompt(`¿Qué stock quiere ver? \n\n 1 - Remeras \n 2 - Buzos \n 3 - Pantalones`)

if (respuesta == "1") {
    console.table(remeras)
}
else if (respuesta == "2"){
    console.table(buzos)
}
else if (respuesta === "3"){
    console.table(pantalones)
}
 else{
    alert('Prenda no existente y/o sin stock')
}
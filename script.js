const nombre = prompt ("Ingrese su nombre:").toLocaleLowerCase()

const saludo = document.getElementById ("nombre")
saludo.innerText = `Bienvenido/a ${nombre}`


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

const totalRemeras = document.getElementById ("totalRemeras")

remeras.forEach(totalStock => {
    totalRemeras.innerHTML = `
    <div>
        <p>Stock total de remeras ${Prenda.nombre}: ${Prenda.stock}</p>
    </div>`
});

const totalBuzos = document.getElementById ("totalBuzos")

buzos.forEach(totalStock => {
    totalBuzos.innerHTML = `
    <div>
        <p>Stock total de remeras ${Prenda.nombre}: ${Prenda.stock}</p>
    </div>`
});

const totalPantalones = document.getElementById ("totalPantalones")

pantalones.forEach(totalStock => {
    totalPantalones.innerHTML = `
    <div>
        <p>Stock total de remeras ${Prenda.nombre}: ${Prenda.stock}</p>
    </div>`
});
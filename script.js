class Prenda {
    constructor(tipoDePrenda, nombre, talle, color, stock) {
        this.tipoDePrenda = tipoDePrenda
        this.nombre = nombre
        this.talle = talle
        this.color = color
        this.stock = stock
    }
    mostrarInfo() {
        return `
        Tipo de Prenda: <b>${this.tipoDePrenda}</b> </br>
        Nombre: <b>${this.nombre}</b> </br>
        Talle: <b>${this.talle}</b> </br>
        Color: <b>${this.color}</b> </br>
        Stock: <b>${this.stock}</b> </br>
        `
    }
}


const remeraS = new Prenda("Remera", "Sunshine", "S", "Negra", 6)
const remeraM = new Prenda("Remera", "Sunshine", "M", "Negra", 5)
const remeraL = new Prenda("Remera", "Sunshine", "L", "Negra", 3)
const buzoS = new Prenda("Buzo", "Iman", "S", "Gris", 8)
const buzoM = new Prenda("Buzo", "Iman", "M", "Gris", 4)
const buzoL = new Prenda("Buzo", "Iman", "L", "Gris", 7)
const buzoOversize = new Prenda("Buzo", "Covid-19", "Unico", "Negro", 10)
const pantalon = new Prenda("Jean", "Plac", "2", "Beige", 15)


let respuesta = prompt(`¿Qué stock quiere ver?`).toLocaleLowerCase()

if (respuesta === "remera") {
    document.write(`
${remeraS.mostrarInfo()} <br>
${remeraM.mostrarInfo()} <br>
${remeraL.mostrarInfo()} <br><br>`)
} else if (respuesta === "buzo") {
    document.write(`
    ${buzoS.mostrarInfo()} <br>
    ${buzoM.mostrarInfo()} <br>
    ${buzoL.mostrarInfo()} <br>
    ${buzoOversize.mostrarInfo()} <br><br>`)
} else if (respuesta === "pantalon") {
    document.write(`
        ${pantalon.mostrarInfo()} <br><br>`)
} else{
    alert('Prenda no existente y/o sin stock')
}
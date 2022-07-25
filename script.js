let numero1 = parseFloat(prompt("Ingrese el costo del producto que quisiera comprar"));
let numero2 = 1.75;

if(numero1){
    alert(`El precio final que va a pagar es de: ${numero1 * numero2}`);
} else {
    alert ("Ingrese un numero valido, por favor.")
}
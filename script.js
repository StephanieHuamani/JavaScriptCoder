let repetir = true


while(repetir) {
    let numero1 = parseFloat(prompt("Ingrese el precio del producto que quisiera comprar"))
    let numero2 = 1.75
    if(numero1){
        alert(`El precio final que va a pagar es de: ${numero1 * numero2}`);
    } else {
        alert ("Ingrese un numero valido, por favor.")
    }

    let confirmacion = prompt ("¿Quiere calcular otro precio? (Si/No)").toLowerCase()
    if(confirmacion == "no") {
        repetir = false
    }
}
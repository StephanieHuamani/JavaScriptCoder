function descuento (numero, porcentaje){
    return numero - (numero * porcentaje / 100)
}

function aumento (numero, porcentaje){
    return numero + (numero * porcentaje / 100)
}

let numero, porcentaje

do {
    opcion = prompt ('¿Qué desea calcular?: \n\n 1)Calcular un descuento final de un producto \n 2)Calcular el aumento de un producto \n 3)Salir')
    
        do {
            numero = parseFloat((prompt("Ingrese el precio del producto que quisiera comprar")));
            porcentaje = parseInt(prompt("Ingrese el porcentaje"));
        } while (isNaN(numero) || isNaN (porcentaje));
    switch (opcion){
        case '1':
            descuento = alert(`El precio final que va a pagar es de: ${numero - (numero * porcentaje / 100)}`);
            break
        case '2':
            aumento = alert(`El precio final que va a pagar es de: ${numero + (numero * porcentaje / 100)}`);
            break
        case '3':
            alert('Hasta la próxima!')
            break
        default:
            alert('Ingrese una un número valido, por favor')
    }
} while (opcion != '3');


let resultado = descuento (numero,porcentaje)
let resultado2 = aumento (numero, porcentaje)
alert(`El precio final que va a pagar es de: ${numero - (numero * porcentaje / 100)}`);
alert(`El precio final que va a pagar es de: ${numero + (numero * porcentaje / 100)}`)



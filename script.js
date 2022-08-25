const proximoJuego = {
    nombreJuego: "Overwatch 2",
    disponibilidad: false
}

const habilitado = (proximoJuego.disponibilidad) ? `${proximoJuego.nombreJuego} ya se encuentra disponible!`:`${proximoJuego.nombreJuego} estará disponible en el próximo mes`

console.log (habilitado)
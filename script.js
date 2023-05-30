function saludar_con_parametros (nombre){
    return ("Hola " + nombre)
}
let nombre_usuario = prompt("Ingrese su nombre: ")
function alertar (valor) {
    alert (valor)
}

alertar (saludar_con_parametros(nombre_usuario))
// function saludar_con_parametros (nombre){
//     return ("Hola " + nombre)
// }
// let nombre_usuario = prompt("Ingrese su nombre: ")
// function alertar (valor) {
//     alert (valor)
// }


let bebidas = {};
let total = 0;

function tuCompra(valorProd, producto) {
  if (bebidas[producto]) {
    bebidas[producto]++;
  } else {
    bebidas[producto] = 1;
  }

  total += valorProd;

  mostrarCarrito();
  document.getElementById("suma_precio").innerHTML = "Total: $" + total;

  console.log(bebidas);
  return total;
}

function mostrarCarrito() {
  const listaCarrito = document.getElementById("MuestraProductos");
  const tituloCarrito = document.getElementById("tituloCarrito");

  // Limpiar el contenido previo de la lista
  listaCarrito.innerHTML = "";

  // Recorrer el objeto carrito y agregar cada producto como un elemento de lista con bullet point
  for (let producto in bebidas) {
    const cantidad = bebidas[producto];

    // Crear un elemento de lista y establecer el texto como "cantidad x producto"
    const listItem = document.createElement("li");
    listItem.textContent = `* ${cantidad} x ${producto}`;

    // Agregar el elemento de lista a la lista carrito
    listaCarrito.appendChild(listItem);
    tieneProductos = true;
  }
  if (tieneProductos) {
    tituloCarrito.textContent = "Mi selección:";
  } else {
    tituloCarrito.textContent = "";
  }
}


function Eliminar_seleccion() {
    tituloCarrito.textContent = "Se ha eliminado tu seleccion";
    tituloCarrito = document.getElementById("tituloCarrito");
    total=0
    bebidas =[]
    document.getElementById("suma_precio").innerHTML = "Total: " + "$" + 0; 
    document.getElementById("MuestraProductos").innerHTML = bebidas ;}





const botonFinalizar = document.querySelector(".finalizar_compra");

botonFinalizar.addEventListener("click", function() {
  let tieneProductos = false;

  for (let producto in bebidas) {
    tieneProductos = true;
    break;
  }

  if (!tieneProductos) {
    alert("Por favor, seleccione productos para realizar una compra.");
    return;
  }


  let email = prompt("Ingrese su dirección de correo electrónico:");

  while (email) {
    const comprobando_email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (comprobando_email.test(email)) {
      alert("¡La operación se ha realizado con éxito!");
      alert("¡Muchas gracias por su compra!");

      tituloCarrito.textContent = "Seleccione articulos para realizar otra compra";
      tituloCarrito = document.getElementById("tituloCarrito");
      total=0
      bebidas =[]
      document.getElementById("suma_precio").innerHTML = "Total: " + "$" + 0; 
      document.getElementById("MuestraProductos").innerHTML = bebidas ;

      break;
    } else {
      alert("La dirección de correo electrónico ingresada no es válida.");
      email = prompt("Ingrese una dirección de correo electrónico válida:");
    }
  }
});





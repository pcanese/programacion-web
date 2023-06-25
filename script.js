
let bebidas = {};
let total = 0;


const precios = {
  // cocktails
  "Gordons Gin - $2200": 2200,
  'Fernet Branca - $2000': 2000,
  'Smirnoff Vodka - $1500':1500,
  'Absolut Vodka - $5000':5000,
  'Sernova Vodka - $1300':1300,
  'Brighton Gin - $1800':1800,
  'Carpano Rosso - $1000':1000,
  // beers
  'Stella Artois - $2000':2000,
  'Andes Roja - $1600':1600,
  'Andes IPA - $1600':1600,
  'Andes Rubia - $1500':1500,
  'Quilmes Clasica - $1300':1300,
  'Budweiser - $1500':1500,
  'Amstel Lager - $1200':1200,
  // non-alcohol
  'Coca-Cola 2.25l - $1000':1000,
  'Coca Zero 2.25l - $1000':1000,
  'Sprite 2.25l - $1000':1000,
  'Gatorade 1.25l - $800':800,
  'PDT Tonica 1.5l - $600':600,
  'PDT Pomelo 1.5l - $600':600,
  'Levite Naranja 1.5l - $500':500,
  'Speed XL - $600':600,
  // combos
  'Combo 1 - $2700':2700,
  'Combo 2 - $3000':3000,
  'Combo 3 - $2500':2500,
  'Combo 4 - $2500':2500,
  'Combo XL - $3400':3400,
};

function tuCompra(valorProd, producto) {
  if (bebidas[producto]) {
    bebidas[producto]++;
  } else {
    bebidas[producto] = 1;
  }

  total += valorProd;

  mostrarCarrito();
  document.getElementById("suma_precio").textContent = "Total: $" + total;

  console.log(bebidas);
  return total;
}

function mostrarCarrito() {
  const listaCarrito = document.getElementById("MuestraProductos");
  const tituloCarrito = document.getElementById("tituloCarrito");

  listaCarrito.innerHTML = "";

  for (let producto in bebidas) {
    const cantidad = bebidas[producto];

    const listItem = document.createElement("li");

    const botonIncrementar = document.createElement("button");
    botonIncrementar.textContent = "+";
    botonIncrementar.id="boton-incrementar";
    botonIncrementar.addEventListener("click", function () {
      incrementarCantidad(producto);
    });

    const botonDecrementar = document.createElement("button");
    botonDecrementar.textContent = "-";
    botonDecrementar.id="boton-decrementar";
    botonDecrementar.addEventListener("click", function () {
      decrementarCantidad(producto);
    });

    const textoProducto = document.createElement("span");
    textoProducto.textContent = `${cantidad} x ${producto}`;

    listItem.appendChild(textoProducto);
    listItem.appendChild(botonIncrementar);
    listItem.appendChild(botonDecrementar);

    listaCarrito.appendChild(listItem);
  }

  if (Object.keys(bebidas).length > 0) {
    tituloCarrito.textContent = "Mi selección:";
  } else {
    tituloCarrito.textContent = "Aún no has seleccionado ningún producto";
  }
}

function incrementarCantidad(producto) {
  bebidas[producto]++;
  total = calcularTotal();
  mostrarCarrito();
  document.getElementById("suma_precio").textContent = "Total: $" + total;
}

function decrementarCantidad(producto) {
  if (bebidas[producto] > 0) {
    bebidas[producto]--;
    total = calcularTotal();

    if (bebidas[producto] === 0) {
      delete bebidas[producto];
    }

    mostrarCarrito();
    document.getElementById("suma_precio").textContent = "Total: $" + total;
  }
  
  const tituloCarrito = document.getElementById("tituloCarrito");
  if (Object.keys(bebidas).length === 0) {
    tituloCarrito.textContent = "Se ha eliminado su selección";
  }
}


function calcularTotal() {
  let sum = 0;
  for (let producto in bebidas) {
    const cantidad = bebidas[producto];
    const precio = precios[producto];
    sum += cantidad * precio;
  }
  return sum;
}

function Eliminar_seleccion() {
  total = 0;
  bebidas = {};

  mostrarCarrito();
  document.getElementById("suma_precio").textContent = "Total: $" + total;

  const tituloCarrito = document.getElementById("tituloCarrito");
  tituloCarrito.textContent = "Se ha eliminado su selección";
}

const botonFinalizar = document.querySelector(".finalizar_compra");

botonFinalizar.addEventListener("click", function () {
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

      const tituloCarrito = document.getElementById("tituloCarrito");
      tituloCarrito.textContent = "Seleccione artículos para realizar otra compra";
      total = 0;
      bebidas = {};
      document.getElementById("suma_precio").innerHTML = "Total: $" + 0;
      document.getElementById("MuestraProductos").innerHTML = "";

      break;
    } else {
      alert("La dirección de correo electrónico ingresada no es válida.");
      email = prompt("Ingrese una dirección de correo electrónico válida:");
    }
  }
});


var botones = document.getElementsByClassName("agregar_al_carrito");
for (var i = 0; i < botones.length; i++) {
  botones[i].addEventListener("click", function () {
    var boton = this;
    boton.style.backgroundColor = "white";
    boton.style.color = "black";
    var carroMovil = document.getElementById("carro_de_compras");
    carroMovil.style.color = "white";
    var BordercarroMovil = document.getElementById("carrozza");
    BordercarroMovil.style.borderColor = "white";
    BordercarroMovil.style.borderWidth = "3px";

    setTimeout(function () {
      BordercarroMovil.style.borderWidth = "";
      BordercarroMovil.style.borderColor = "";
      carroMovil.style.color = "";
      boton.style.backgroundColor = "";
      boton.style.color = "";
    }, 700); 
  });
}

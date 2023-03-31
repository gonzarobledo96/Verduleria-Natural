// Objeto para almacenar el carrito
let carrito = {
  items: [],
  total: 0,
};

function agregarAlCarrito(nombre, precio) {
  // Buscamos el producto en el carrito
  let productoEnCarrito = carrito.items.find((item) => item.nombre === nombre);

  // Si el producto ya está en el carrito, aumentamos la cantidad y el precio total
  if (productoEnCarrito) {
    productoEnCarrito.cantidad++;
    productoEnCarrito.precioTotal += precio;
  } else {
    // Si el producto no está en el carrito, lo agregamos con cantidad 1 y precio total igual al precio del producto
    carrito.items.push({ nombre: nombre, cantidad: 1, precioTotal: precio });
  }

  // Actualizamos el precio total del carrito
  carrito.total += precio;

  // Actualizamos la interfaz del carrito
  actualizarCarrito();
}

function actualizarCarrito() {
  // Buscamos el elemento del carrito en la página
  let carritoElement = document.querySelector(".carrito");

  // Actualizamos el precio total del carrito en la página
  carritoElement.querySelector(
    "#total-carrito"
  ).textContent = `Total: $${carrito.total.toFixed(2)}`;

  // Buscamos el elemento de la lista de productos en el carrito
  let listaProductosElement = carritoElement.querySelector("#lista-productos");

  // Borramos todos los productos de la lista
  listaProductosElement.innerHTML = "";

  // Creamos un elemento en la lista para cada producto en el carrito
  carrito.items.forEach((item) => {
    let productoElement = document.createElement("li");
    productoElement.textContent = `${item.cantidad} kg de ${
      item.nombre
    } : $${item.precioTotal.toFixed(2)}`;

    // Agregamos un botón de eliminar al producto
    let eliminarProductoButton = document.createElement("buttonn");
    eliminarProductoButton.textContent = "Eliminar";
    eliminarProductoButton.style.backgroundColor = " rgb(94, 128, 0)"; //cambiar el color de fondo delbotón
    eliminarProductoButton.style.color = "white"; // cambiar el color de texto del botón
    eliminarProductoButton.style.fontSize = "1em"; // cambiar el tamaño de fuente del botón
    eliminarProductoButton.style.marginTop = "0.5em";
    eliminarProductoButton.style.marginBottom = "1em";
    eliminarProductoButton.style.border = "0";
    eliminarProductoButton.style.borderRadius = "10px";
    eliminarProductoButton.style.padding = "6px";
    eliminarProductoButton.style.fontFamily = "Montserrat, sans-serif";
    
    
    eliminarProductoButton.addEventListener("click", () =>
      eliminarDelCarrito(item)
    );
    productoElement.appendChild(eliminarProductoButton);

    listaProductosElement.appendChild(productoElement);
  });
}

function eliminarDelCarrito(producto) {
  // Disminuimos el precio total del carrito
  carrito.total -= producto.precioTotal;

  // Buscamos la posición del producto en el array items
  let productoIndex = carrito.items.findIndex(
    (item) => item.nombre === producto.nombre
  );

  // Eliminamos el producto del array items
  carrito.items.splice(productoIndex, 1);

  // Actualizamos la interfaz del carrito
  actualizarCarrito();
}

// Función para vaciar el carrito
function vaciarCarrito() {
  // Borramos todos los productos del carrito y actualizamos la interfaz
  carrito = { items: [], total: 0 };
  actualizarCarrito();
}

// DISEÑO DEL CARRITO
// Obtener el elemento del total del carrito
const totalCarrito = document.getElementById("total-carrito");
// Establecer el tamaño de fuente a 20 píxeles
totalCarrito.style.fontSize = "1.2rem;";
totalCarrito.style.fontWeight = "bold";

// evento al precionar el boton comprar genere alertas y se borre el valor agregado
let fruitsArray = [];

function addFruit(fruitName, fruitPrice) {
  fruitsArray.push({ name: fruitName, price: fruitPrice });
  let total = 0;
  for (let i = 0; i < fruitsArray.length; i++) {
    total += fruitsArray[i].price;
  }
  document.getElementById(
    "fruits"
  ).innerHTML += `<li>${fruitName}: ${fruitPrice}€</li>`;
  document.getElementById("total").innerHTML = `Total: ${total}€`;
}

function comprar() {
  vaciarCarrito(); // Vaciamos el carrito al hacer click en comprar
  fruitsArray = []; // Vaciamos el arreglo de frutas
  alert("Gracias por su compra");
  alert("vuelva pronto");
}

document.getElementById("comprar"); //.addEventListener('click', comprar)

// logo hamburguesa
document.querySelector('.hamburger').addEventListener('click', (e) => {
  e.currentTarget.classList.toggle('is-active');
})


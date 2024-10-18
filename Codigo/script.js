// Declarar una variable global para almacenar los productos
let productos = [];

async function fetchProducts() {
  try {
    const response = await fetch('http://localhost/productos.php');
    productos = await response.json(); // Almacenar los productos en la variable global

    console.log("Productos obtenidos:", productos);

    // Usar los productos almacenados en la variable global
    displayProducts(productos);
  } catch (error) {
    console.error('Error al obtener los productos:', error);
  }
}

// Función para mostrar los productos
function displayProducts(productos) {
  const productContainer = document.getElementById('product-container');
  productContainer.innerHTML = productos.map((product, index) => createProductTemplate2(product, index)).join('');
}

function createProductTemplate2(product, index) {
  return `
    <div class="product">
      <img src="${product.imageUrl}">
      <div class="product-info">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p><strong>$${product.price}</strong></p>
        <button data-product='${JSON.stringify(product)}'>Agregar al carrito</button>
      </div>
    </div>
  `;
}

function displayProducts(products) {
  const productContainer = document.getElementById('product-container');
  productContainer.innerHTML = products.map(product => createProductTemplate2(product)).join('');

  // Agregar event listeners después de generar el HTML
  const addToCartBtns = productContainer.querySelectorAll('button[data-product]');
  addToCartBtns.forEach(button => {
    button.addEventListener('click', () => {
      const product = JSON.parse(button.getAttribute('data-product')); // Obtener el objeto del producto
      addToCart(product);
    });
  });
}

function addToCart(product) {
  let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

  const existingProductIndex = carrito.findIndex(item => item.id === product.id);

  if (existingProductIndex >= 0) {
    carrito[existingProductIndex].quantity += 1;
  } else {
    carrito.push({ ...product, quantity: 1 });
    alert(`${product.name} ha sido agregado al carrito.`);
  }

  localStorage.setItem('carrito', JSON.stringify(carrito)); // Guardar en localStorage
}

// Función de búsqueda
// Función de búsqueda
function setupSearch() {
  const searchBar = document.getElementById('searchBar');

  if (!searchBar) {
    console.error('No se encontró la barra de búsqueda');
    return;
  }

  searchBar.addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase().trim();
    const filteredProducts = productos.filter(product =>
      product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm)
    );

    displayProducts(filteredProducts); // Mostrar los productos filtrados
  });
}

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', () => {
  fetchProducts();
  setupSearch();
});

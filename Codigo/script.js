let products = []; // Declarar products globalmente

async function fetchProducts() {
  try {
    const response = await fetch('http://localhost/productos.php');
    products = await response.json(); // Asignar a la variable global

    console.log("Fetched products:", products); 
    localStorage.setItem('productos', JSON.stringify(products));
    console.log("Products stored in localStorage:", JSON.parse(localStorage.getItem('productos'))); 

    displayProducts(products);
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}

// Función para mostrar los productos
function displayProducts(products) {
  const productContainer = document.getElementById('product-container');
  productContainer.innerHTML = products.map((product, index) => createProductTemplate2(product, index)).join('');
}

function createProductTemplate2(product, index) {
  // Pasar el ID del producto a la función addToCart()
  return `
    <div class="product">
      <img src="${product.imageUrl}"> 
      <div class="product-info">
        <h2>${product.name}</h2>
        <p>${product.description}</p>
        <p><strong>$${product.price}</strong></p>
        <button onclick="addToCart(${product.id})">Agregar al carrito</button>
      </div>
    </div>
  `;
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existingProductIndex = cart.findIndex(item => item.id === id);

  if (existingProductIndex >= 0) {
    cart[existingProductIndex].quantity += 1;
  } else {
    // Obtener el producto completo de 'products'
    const productToAdd = products.find(p => p.id === id); 

    // Agregar el producto al carrito con todas sus propiedades y la cantidad
    if (productToAdd) { 
      cart.push({ ...productToAdd, quantity: 1 }); 
    } else {
      alert(`Producto no encontrado.`);
      console.error("Producto no encontrado con el ID:", id);
    }
  }
  localStorage.setItem('cart', JSON.stringify(cart));

  // Corrección 3: Obtener el producto de 'products' usando 'id'
  const product = products.find(p => p.id === id);
  alert(`${product.name} ha sido agregado al carrito.`); 
}
function displayProducts(products) {
  const productContainer = document.getElementById('product-container');
  productContainer.innerHTML = products.map(product => createProductTemplate2(product)).join('');
}

// Función de búsqueda
function setupSearch() {
  const searchBar = document.querySelector('#searchBar'); // Agregado el #
  
  if (!searchBar) {
      console.error('No se encontró la barra de búsqueda');
      return;
  }

  searchBar.addEventListener('input', function(e) {
      const searchTerm = e.target.value.toLowerCase().trim();
      const filteredProducts = products.filter(product => 
          product.name.toLowerCase().includes(searchTerm) ||
          product.description.toLowerCase().includes(searchTerm)
      );
      
      displayProducts(filteredProducts);
  });
}

// Llamar a la función al cargar la página
document.addEventListener('DOMContentLoaded', fetchProducts);
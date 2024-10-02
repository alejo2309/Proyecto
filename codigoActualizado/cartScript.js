let quantity = 1;

function showCartProducts() {
    const cartContainer = document.getElementById('cart-container');
    const cartTotal = document.getElementById('cart-total');  // Obtén el elemento donde se mostrará el total
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartContainer.innerHTML = '';

    let total = 0;

    console.log('Carrito actual:', cart); // Log para ver el contenido del carrito

    cart.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.classList.add('cart-product');
        productElement.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <div class="cart-product-info">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Precio: ${(product.price)}</p>
                <button onclick="decrement(${index})">-</button>
                <p id="quantity-${index}">${product.quantity}</p>
                <button onclick="increment(${index})">+</button>
            </div>
        `;
        cartContainer.appendChild(productElement);

        // Calcular el total
        total += parseFloat(product.price.replace('$', '')) * product.quantity;

        // Muestra el total del carrito
        cartTotal.textContent = `$${total.toFixed(2)}`;
    });

    // Si el carrito está vacío, muestra un mensaje
    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>El carrito está vacío.</p>';
    }
}

function increment(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity++;  // Incrementa la cantidad del producto
    localStorage.setItem('cart', JSON.stringify(cart));  // Actualiza el localStorage
    updatePrice();
}

function decrement(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index].quantity > 1) {
        cart[index].quantity--;  // Decrementa la cantidad del producto
    } else {
        // Si la cantidad llega a 0, elimina el producto del carrito
        cart.splice(index, 1);
    }
    localStorage.setItem('cart', JSON.stringify(cart));  // Actualiza el localStorage
    updatePrice();
}

// Actualiza el carrito de compras y los totales
function updatePrice() {
    showCartProducts();  // Vuelve a mostrar los productos con las cantidades y precios actualizados
}

// Función para vaciar el carrito
function clearCart() {
    localStorage.removeItem('cart');
    showCartProducts();
    alert('El carrito ha sido vaciado.');
}

document.addEventListener('DOMContentLoaded', () => {
    showCartProducts();
    document.getElementById('clear-cart').addEventListener('click', clearCart);
});
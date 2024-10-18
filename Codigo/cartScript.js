function showCartProducts() {
    const cartContainer = document.getElementById('cart-container');
    const cartTotal = document.getElementById('cart-total');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    cartContainer.innerHTML = '';

    let total = 0;

    console.log('Carrito actual (al mostrar):', carrito);  // Verifica el contenido del carrito

    carrito.forEach((product, index) => {
        if (!product.name || !product.price || !product.imageUrl) {
            console.error('Producto mal formateado', product);
            return;
        }

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

        total += parseFloat(product.price.replace('$', '')) * product.quantity;
        cartTotal.textContent = `$${total.toFixed(2)}`;
    });

    if (carrito.length === 0) {
        cartContainer.innerHTML = '<p>El carrito está vacío.</p>';
    }
}


function increment(index) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito[index].quantity++;  // Incrementa la cantidad del producto
    localStorage.setItem('carrito', JSON.stringify(carrito));  // Actualiza el localStorage
    updatePrice();
}

function decrement(index) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    if (carrito[index].quantity > 1) {
        carrito[index].quantity--;  // Decrementa la cantidad del producto
    } else {
        // Si la cantidad llega a 0, elimina el producto del carrito
        carrito.splice(index, 1);
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));  // Actualiza el localStorage
    updatePrice();
}

// Actualiza el carrito de compras y los totales
function updatePrice() {
    showCartProducts();  // Vuelve a mostrar los productos con las cantidades y precios actualizados
}

// Función para vaciar el carrito
function clearCart() {
    localStorage.removeItem('carrito');
    showCartProducts();
    alert('El carrito ha sido vaciado.');
}
function fin() {
    alert("La compra se ha realizado con éxito!");
    window.location.href = "index.html";
    clearCart();
}

document.addEventListener('DOMContentLoaded', () => {
    showCartProducts();
    document.getElementById('clear-cart').addEventListener('click', clearCart);
});

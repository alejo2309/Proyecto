// Función para cargar los productos del carrito en la página de finalización de compra
function loadCartProducts() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const container = document.querySelector('.container');

    // Si no hay productos en el carrito, mostrar un mensaje
    if (cart.length === 0) {
        container.innerHTML = '<h2>No hay productos en el carrito.</h2>';
        return;
    }

    // Crear una lista de productos en la página de finalización de compra
    const productListHTML = cart.map(product => {
        return `
            <div class="product">
                <h2>Producto: ${product.name}</h2>
                <p>Precio: $${product.price}</p>
                <p>Cantidad: ${product.quantity}</p>
            </div>
        `;
    }).join('');

    // Insertar los productos en el DOM antes del formulario
    container.insertAdjacentHTML('afterbegin', productListHTML);
}

// Cargar los productos cuando la página se cargue
document.addEventListener('DOMContentLoaded', loadCartProducts);

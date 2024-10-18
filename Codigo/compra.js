// Función para cargar los productos del carrito en la página de finalización de compra
function loadCartProducts() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const container = document.querySelector('.container');

    // Si no hay productos en el carrito, mostrar un mensaje
    if (carrito.length === 0) {
        container.innerHTML = '<h2>No hay productos en el carrito.</h2>';
        return;
    }

    // Variable para almacenar el total
    let total = 0;

    // Crear una lista de productos en la página de finalización de compra
    const productListHTML = carrito.map(product => {
        // Sumar el precio de cada producto multiplicado por la cantidad
        total += parseFloat(product.price) * product.quantity;

        return `
            <div class="product">
                <h2>Producto: ${product.name}</h2>
                <p>Precio: $${parseFloat(product.price).toFixed(2)}</p>
                <p>Cantidad: ${product.quantity}</p>
            </div>
        `;
    }).join('');

    // Insertar los productos en el DOM antes del formulario
    container.insertAdjacentHTML('afterbegin', productListHTML);

    // Mostrar el total
    const totalHTML = `
        <div class="total">
            <h2>Total a Pagar: $${total.toFixed(2)}</h2>
        </div>
    `;

    // Insertar el total en el DOM después de los productos
    container.insertAdjacentHTML('beforeend', totalHTML);
}
function redirect(){
    window.location.href = "http://localhost/grax.html";  // Redireccionar a la página principal
}
// Cargar los productos cuando la página se cargue
document.addEventListener('DOMContentLoaded', loadCartProducts);

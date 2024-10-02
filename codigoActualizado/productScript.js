const products = [
    {
        id: "1",
        catId: "fertilizante-generico",
        name: "Granumax S",
        description: "Granumax S",
        price: "$200.00",
        imageUrl: "https://www.inkafert.com.pe/media/uploads/prod_galery/coron_25-0-0/800x576/granumax_2.1s_.jpg"
    },
    {
        id: "2",
        catId: "fertilizante-generico",
        name: "Urea",
        description: "Urea",
        price: "$20.00",
        imageUrl: "https://http2.mlstatic.com/fertilizante-urea-granulada-50-kilos-D_NQ_NP_368511-MLC20577157559_022016-F.jpg"
    },
    {
        id: "3",
        catId: "fertilizante-compuesto",
        name: "Fosfato Monoamonico",
        description: "Fosfato Monoamonico",
        price: "$20.00",
        imageUrl: "https://th.bing.com/th/id/OIP.e0YLjAhDuHH22i_5pL8KggHaHa?rs=1&pid=ImgDetMain"
    },
    {
        id: "4",
        catId: "fertilizante-compuesto",
        name: "Cloruro de Potasio",
        description: "Cloruro de Potasio",
        price: "$20.00",
        imageUrl: "https://cdn.shopify.com/s/files/1/0410/2199/7206/products/Cloruro-de-potasioNUTRIMON_1600x.jpg?v=1598359805"
    },
    {
        id: "5",
        catId: "fertilizante-soluble",
        name: "Fertilizante Soluble 17-44-0",
        description: "Fertilizante Soluble 17-44-0",
        price: "$60000.00",
        imageUrl: "https://th.bing.com/th/id/OIP.xfQkaRv2hP4A3wxS4WoLWwHaHa?rs=1&pid=ImgDetMain"
    },
    {
        id: "6",
        catId: "fertilizante-soluble",
        name: "Fertilizante Hydrofeed",
        description: "Soluble",
        price: "$50.00",
        imageUrl: "https://static.wixstatic.com/media/10d98e_b025bc748a504745b0049d638d386616~mv2.png"
    },
    {
        id: "7",
        catId: "fertilizante-especializados",
        name: "Scotts",
        description: "Fertilizantes de liberación lenta",
        price: "$15.00",
        imageUrl: "https://images.homedepot-static.com/productImages/258dcff3-b841-4a45-94e7-7d71a6f710e4/svn/scotts-granular-fertilizer-21605-64_1000.jpg"
    },
    {
        id: "8",
        catId: "fertilizante-especializados",
        name: "Osmocote",
        description: "Fertilizantes de liberación rapida",
        price: "$20.00",
        imageUrl: "https://th.bing.com/th/id/OIP.J3bgovHhA6GAGh9dR8Z8-gHaHa?rs=1&pid=ImgDetMain"
    }
    // Agrega más productos según sea necesario
];


// Función para crear la plantilla de producto
function createProductTemplate2(product, index) {
    const queryParams = new URLSearchParams(product).toString();
    return `
        <div class="product">
            <img src="${product.imageUrl}" alt="${product.name}">
            <div class="product-info">
                <h2>${product.name}</h2>
                <p>${product.description}</p>
                <p><strong>${product.price}</strong></p>
                <button onclick="addToCart(${index})">Agregar al carrito</button>
                <p><strong>${product.tag}</strong></p>
            </div>
        </div>
    `;
}

// Función para obtener los datos del producto desde la URL
function getProductFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return {
        name: urlParams.get('name'),
        description: urlParams.get('description'),
        price: urlParams.get('price'),
        imageUrl: urlParams.get('imageUrl')
    };
}

// Mostrar el producto al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const product = getProductFromURL();
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = createProductTemplate2(product);
});
function addToCart(productIndex) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProductIndex = cart.findIndex(item => item.id === products[productIndex].id);

    if (existingProductIndex >= 0) {
        cart[existingProductIndex].quantity += 1;
    } else {
        const productToAdd = { ...products[productIndex], quantity: 1 };
        cart.push(productToAdd);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${products[productIndex].name} ha sido agregado al carrito.`);
}
/*
const products = [
    { id: "1", catId: "fertilizante-generico", name: "Granumax S", price: "$60.00", imageUrl: "https://www.inkafert.com.pe/media/uploads/prod_galery/coron_25-0-0/800x576/granumax_2.1s_.jpg" },
    { id: "2", catId: "fertilizante-generico", name: "Urea", price: "$30.00", imageUrl: "https://http2.mlstatic.com/fertilizante-urea-granulada-50-kilos-D_NQ_NP_368511-MLC20577157559_022016-F.jpg" },
    { id: "3", catId: "fertilizante-compuesto", name: "Fosfato Monoamonico", price: "$50.00", imageUrl: "https://th.bing.com/th/id/OIP.e0YLjAhDuHH22i_5pL8KggHaHa?rs=1&pid=ImgDetMain" },
    { id: "4", catId: "fertilizante-compuesto", name: "Cloruro de Potasio", price: "$40.00", imageUrl: "https://cdn.shopify.com/s/files/1/0410/2199/7206/products/Cloruro-de-potasioNUTRIMON_1600x.jpg?v=1598359805" },
    { id: "5", catId: "fertilizante-soluble", name: "Fertilizante Soluble", price: "$60.00", imageUrl: "https://th.bing.com/th/id/OIP.xfQkaRv2hP4A3wxS4WoLWwHaHa?rs=1&pid=ImgDetMain" },
    { id: "6", catId: "fertilizante-soluble", name: "Fertilizante Hydrofeed", price: "$50.00", imageUrl: "https://static.wixstatic.com/media/10d98e_b025bc748a504745b0049d638d386616~mv2.png" },
    { id: "7", catId: "fertilizante-especializados", name: "Scotts", price: "$30.00", imageUrl: "https://images.homedepot-static.com/productImages/258dcff3-b841-4a45-94e7-7d71a6f710e4/svn/scotts-granular-fertilizer-21605-64_1000.jpg" },
    { id: "8", catId: "fertilizante-especializados", name: "Osmocote", price: "$20.00", imageUrl: "https://th.bing.com/th/id/OIP.J3bgovHhA6GAGh9dR8Z8-gHaHa?rs=1&pid=ImgDetMain" }
];

// Mostrar todos los productos al cargar
function showAllProducts() {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = products.map((product, index) => createProductTemplate(product, index)).join('');
}

// Crear plantilla de producto
function createProductTemplate(product, index) {
    return `
        <div class="product" data-category="${product.catId}">
            <img class="tamaño" src="${product.imageUrl}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p><strong>${product.price}</strong></p>
            <button onclick="addToCart(${index})">Agregar al Carrito</button>
        </div>
    `;
}

// Agregar al carrito
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

// Filtrar productos por categoría
function filterProductsByCategory(categoryId) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = products
        .filter(product => product.catId === categoryId)
        .map((product, index) => createProductTemplate(product, index))
        .join('');
}

// Event listeners para las categorías
document.addEventListener('DOMContentLoaded', () => {
    showAllProducts(); // Mostrar todos los productos al cargar
    const filterLinks = document.querySelectorAll('.filter');
    
    filterLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Evita que el enlace recargue la página
            const category = link.getAttribute('data-category');
            filterProductsByCategory(category); // Filtra productos
        });
    });
});

*/



// Datos de ejemplo de productos con IDs
const products = [
    {
        id: "1",
        catId: "fertilizante-generico",
        name: "Granumax S",
        description: "Granumax S",
        price: "$60.00",
        imageUrl: "https://www.inkafert.com.pe/media/uploads/prod_galery/coron_25-0-0/800x576/granumax_2.1s_.jpg"
    },
    {
        id: "2",
        catId: "fertilizante-generico",
        name: "Urea",
        description: "Urea",
        price: "$30.00",
        imageUrl: "https://http2.mlstatic.com/fertilizante-urea-granulada-50-kilos-D_NQ_NP_368511-MLC20577157559_022016-F.jpg"
    },
    {
        id: "3",
        catId: "fertilizante-compuesto",
        name: "Fosfato Monoamonico",
        description: "Fosfato Monoamonico",
        price: "$50.00",
        imageUrl: "https://th.bing.com/th/id/OIP.e0YLjAhDuHH22i_5pL8KggHaHa?rs=1&pid=ImgDetMain"
    },
    {
        id: "4",
        catId: "fertilizante-compuesto",
        name: "Cloruro de Potasio",
        description: "Cloruro de Potasio",
        price: "$40.00",
        imageUrl: "https://cdn.shopify.com/s/files/1/0410/2199/7206/products/Cloruro-de-potasioNUTRIMON_1600x.jpg?v=1598359805"
    },
    {
        id: "5",
        catId: "fertilizante-soluble",
        name: "Fertilizante Soluble",
        description: "Fertilizante Soluble 17-44-0",
        price: "$60.00",
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
        price: "$30.00",
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
function createProductTemplate(product, index) {
    const queryParams = new URLSearchParams(product).toString();
    return `
        <div class="product">
            <a href="pagina_producto.html?${queryParams}">
                <img class="tamaño" src="${product.imageUrl}" alt="${product.name}">
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p ><strong>${product.price}</strong></p>
                </div>
            </a>
            <button onclick="addToCart(${index})">Agregar al Carrito</button>
        </div>
    `;
}
// Función para crear la plantilla de producto


// Función para agregar productos al carrito
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

// Función para mostrar todos los productos
function showAllProducts() {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Limpiar productos actuales
    products.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.innerHTML = createProductTemplate(product, index);
        productContainer.appendChild(productElement);
    });
}

// Función para filtrar y mostrar productos por categoría
function filterProductsByCategory(categoryId) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Limpiar productos actuales
    const filteredProducts = products.filter(product => product.id === categoryId);
    filteredProducts.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.innerHTML = createProductTemplate(product, index);
        productContainer.appendChild(productElement);
    });
}

// Event listeners para las categorías
document.addEventListener('DOMContentLoaded', () => {
    showAllProducts(); // Mostrar todos los productos al cargar la página
    document.getElementById('show-genericos').addEventListener('click', () => {
        filterProductsByCategory('fertilizante-generico');
    });
    document.getElementById('show-compuestos').addEventListener('click', () => {
        filterProductsByCategory('fertilizante-compuesto');
    });
    document.getElementById('show-solubles').addEventListener('click', () => {
        filterProductsByCategory('fertilizante-soluble');
    });
    document.getElementById('show-especializados').addEventListener('click', () => {
        filterProductsByCategory('fertilizante-especializados');
    });
    document.getElementById('clear-filters').addEventListener('click', () => {
        showAllProducts(); // Mostrar todos los productos cuando se borren los filtros
    });
});

const filterLinks = document.querySelectorAll('.filter');
const products1 = document.querySelectorAll('.product1');

filterLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault(); // Evita que el enlace recargue la página
        const category = link.getAttribute('data-category');

        // Muestra todos los productos si no hay filtro seleccionado
        products.forEach(product => {
            if (category === 'all' || product.getAttribute('data-category') === category) {
                product.style.display = 'block'; // Muestra el producto
            } else {
                product.style.display = 'none'; // Oculta el producto
            }
        });
    });
});


/*filtros

$(document).ready(function(){

	// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE ====================
	$('.category_list .category_item[category="all"]').addClass('ct_item-active');

	// FILTRANDO PRODUCTOS  ============================================

	$('.category_item').click(function(){
		var catProduct = $(this).attr('category');
		console.log(catProduct);

		// AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
		$('.category_item').removeClass('ct_item-active');
		$(this).addClass('ct_item-active');

		// OCULTANDO PRODUCTOS =========================
		$('.product-item').css('transform', 'scale(0)');
		function hideProduct(){
			$('.product-item').hide();
		} setTimeout(hideProduct,400);

		// MOSTRANDO PRODUCTOS =========================
		function showProduct(){
			$('.product-item[category="'+catProduct+'"]').show();
			$('.product-item[category="'+catProduct+'"]').css('transform', 'scale(1)');
		} setTimeout(showProduct,400);
	});

	// MOSTRANDO TODOS LOS PRODUCTOS =======================

	$('.category_item[category="all"]').click(function(){
		function showAll(){
			$('.product-item').show();
			$('.product-item').css('transform', 'scale(1)');
		} setTimeout(showAll,400);
	});
});
*/
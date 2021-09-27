let products = JSON.parse(localStorage.getItem('products'));
const productContainer = document.getElementById('productsContainer');

if (products) {
    products.forEach(renderProduct);
}
else {
    productContainer.innerHTML = `
        <p>No products yet.</p>
    `;
}

function filterProducts(category) {
    if (category === 'all') {
        productContainer.innerHTML = '';
        products.forEach(renderProduct);
        return;
    }

    let filteredProducts = [];

    for (let i = 0; i < products.length; i++) {
        console.log(products[i])
        console.log(category)
        if (products[i].category === category) {
            filteredProducts.push(products[i]);
        }
    }

    if (filteredProducts.length > 0) {
        productContainer.innerHTML = '';
        filteredProducts.forEach(renderProduct);
    } else {
        productContainer.innerHTML = "There is no products for this category...";
    }

}

function redirectToSingleProduct(productIndex) {
    localStorage.setItem('singleProduct', JSON.stringify(products[productIndex]))
    window.location.href = './single-product.html'
}

function AddToCart(productIndex){
    let productToAdd = {...products[productIndex]};
    if (productToAdd.quantity === 0) {
        alert('There is no more product: ${productToAdd.name{');
    } else {
        if (localStorage.getItem('cart')) {
            let cart = JSON.parse(localStorage.getItem('cart'));
            console.log(cart)
            cart.push(productToAdd);
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            localStorage.setItem('cart', JSON.stringify([ProductToAdd]));
        }
            products[productIndex].quantity--;
            localStorage.setItem('products', JSON.stringify(products));

    }
}


function renderProduct(product, index) {
    productContainer.innerHTML += `
        <div class="col-md-6">
            <div class="card mb-3 w-100">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img src="${product.image}" style="object-fit: cover" class="w-100 h-100" alt="${product.name}">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <h5 class="card-title">
                                ${product.name} | <small>${product.category}</small>
                            </h5>
                            <p class="card-text">
                                ${product.description}
                            </p>
                            <p class="card-text">
                                <small class="text-muted">
                                    ${product.price} $
                                </small>
                            </p>
                            <div>
                                <button class="btn btn-primary" onclick="redirectToSingleProduct(${index})">View</button>
                                <button class="btn btn-success" onclick="add to cart>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `

}
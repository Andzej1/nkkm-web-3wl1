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

function redirectToSingleProduct(productIndex) {
    localStorage.setItem('singleProduct', JSON.stringify(products[productIndex]))
    window.location.href = './single-product.html'
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
                                <button class="btn btn-success">Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `

}
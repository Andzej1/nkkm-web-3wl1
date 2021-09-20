let product = {};
const productContainer = document.getElementById('productContainer');

if (!localStorage.getItem('singleProduct')) {
    window.location.href = './index.html';
} else {
    product = JSON.parse(localStorage.getItem('singleProduct'));
    localStorage.removeItem('singleProduct');
}

productContainer.innerHTML = `
<img style="height: 40vh; width: 100%; object-fit: cover;" src="${product.image}" alt="${product.name}">
<div class="container">
    <div class="row mt-5">
        <div class="col-lg-12">
            <h1>${product.name}</h1>
            <h4 class="text-muted">[${product.category}]</h4>
            <h4 class="text-success">${product.price} $</h4>
            <p>
                ${product.description}
            </p>
        </div>
        <div class="col-lg-12 mt-5" style="text-align: right;">
            <button class="btn btn-lg btn-success">Add to cart</button>
        </div>
    </div>
</div>
`



if (!localStorage.GetItem("Auth") || localStorage.getItem("Auth") !== "true") {
    window.location.href = "./index.html";
}

let products = JSON.parse(localStorage.getItem('products'))
const productContainer = document.getElementById('productsContainer');

if (products) {

    products.forEach(renderProduct)

}

else{ productContainer.innerHTML = `
<p> No products yet.</p>
`
}

function deleteProduct(index) {
    products.splice(index);
    localStorage.setItem;
}

function renderProduct(product,index){
    console.log(product)
    productContainer.innerHtml+=`

    <div class="col-md-6">
    <div class="card mb-3 w-100">
            <div class="row g-0">
                <div class="col-md-4">
                    <img class="w-100 h-100" src="${product.image}" alt="Image">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">
                            ${product.name} | <small> ${product.category}</small>
                        </h5>
                        <p class="card-text">
                            ${product.description}
                        </p>
                        <p class="card-text">
                            <small class="text-muted">
                                ${product.price} | QTY:${product.quantity}
                            </small>
                        </p>
                        <div>
                            <button onclick="deleteProduct(${index})" class="btn btn-primary">Delete</button>
                            <button onclick="editProduct(${index})" class="btn btn-success">Edit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    `;
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    `
}
if (!localStorage.getItem("Auth") || localStorage.getItem("Auth") !== "true") {
    window.location.href = "./index.html";
}

let productName = document.getElementById("productName");
let productQuantity = document.getElementById("productQuantity");
let productPrice = document.getElementById("productPrice");
let productCategory = document.getElementById("productCategory");
let productImage = document.getElementById("productImage");
let productDescription = document.getElementById("productDescription");

let editableIndex = localStorage.getItem('editableIndex');
let products = JSON.parse(localStorage.getItem('products'));

if (editableIndex && products) {
    fetchProduct();
}

function fetchProduct() {
    localStorage.removeItem('editableIndex');
    const editableProduct = products[editableIndex];
    productName.value = editableProduct.name;
    productQuantity.value = editableProduct.quantity;
    productPrice.value = editableProduct.price;
    productCategory.value = editableProduct.category;
    productImage.value = editableProduct.image;
    productDescription.value = editableProduct.description;
}

function saveProducts(items) {
    localStorage.setItem('products', JSON.stringify(items));
}

function resetFields() {
    productName.value = '';
    productQuantity.value = '';
    productPrice.value = '';
    productCategory.value = '';
    productImage.value = '';
    productDescription.value = '';
}

function addProduct() {
    const product = {
        name: productName.value,
        quantity: productQuantity.value,
        price: productPrice.value,
        category: productCategory.value,
        image: productImage.value,
        description: productDescription.value
    };

    if (editableIndex) {
        products[editableIndex] = product;
        saveProducts(products);
    } else if (products && products.length > 0) {
        products.unshift(product);
        saveProducts(products);
    } else {
        products = [product];
        saveProducts(products);
    }

    resetFields();
}

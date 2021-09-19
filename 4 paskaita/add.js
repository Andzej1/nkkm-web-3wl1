if (!localStorage.getItem("Auth") || localStorage.getItem("Auth") !== "true") {
    window.location.href = "./index.html";
}

let productName = document.getElementById("productName");
let productQuantity = document.getElementById("productQuantity");
let productPrice = document.getElementById("productPrice");
let productCategory = document.getElementById("productCategory");
let productImage = document.getElementById("productImage");
let productDescription = document.getElementById("productDescription");

function addProduct() {
    const product = {
        name: productName.value,
        quantity: productQuantity.value,
        price: productPrice.value,
        category: productCategory.value,
        image: productImage.value,
        description: productDescription.value
    };

    let productArray = JSON.parse(localStorage.getItem('products'));

    if (productArray && productArray.length > 0) {
       productArray.unshift(product); 
       localStorage.setItem('products', JSON.stringify(productArray));
    }
    else {
        let temp = [ product ];
        localStorage.setItem('products', JSON.stringify(temp));
    }
    
}

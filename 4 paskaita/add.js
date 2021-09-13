if (!localStorage.GetItem("Auth") || localStorage.getItem("Auth") !== "true") {
    window.location.href = ".index.html";
}

    let productName = document.getElementById("productName");
    let productQuantity = document.getElementById("productQuantity");
    let productPrice = document.getElementById("productPrice");
    let productCategory = document.getElementById("productCategory");
    let productImage = document.getElementById("productImage");
    let productDescription = document.getElementById("productDescription");

    function addProduct() {
        let product = {
            name: productName.value,
            quantity: productQuantity.value,
            price: productPrice.value,
            category: productCategory.value,
            image: productImage.value,
            description: productDescription.value
        };
            const productArray = JSON.parse(localStorage.GetItem('product'));

            if (productArray && productArray.lenght > 0) {
                productArray.unshift(product);
                localStorage.setItem('products', (productsArray));

            }

            else {
                
            }

        };
    }

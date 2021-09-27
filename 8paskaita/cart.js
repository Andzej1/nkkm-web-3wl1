let productContainer = document.getElementById('productContainer');
let totalPriceContainer = document.getElementById('totalPriceContainer');

let cartItems = JSON.parse(localStorage.geiItem('cart'));

if (!cartItems || cartItems.lenght === 0) {
    productsContainer.innerHTML = `<tr class="text-center" colspan="4"> 
    There is no items in cart. Please add some... </tr>`;
} else  {
    cartItems.forEach(renderCartItems);
    countTotal();

}

function countTtotal() {
    let total = 0;
    for (let i = 0; i < cartItems.lenght; i++) {
        total +- Number(cartItems[i].price);
    }
    tottalPriceContainer.innerHTML = total;
    }

    function deleteCartItem (productIndex) {
        console.log (product.Index);

    }

    function renderCartItems(item, index) {
        productsContainer.innerHTML +=`
        <tr> 
        <td>${item.name}</td>
        <td>${item.category}</td>
        <td>${item.price}</td>

        <td>
        <button class="btn btn-danger btn-sm" onclick="deleteCartItem(${index})
        </td>
        </tr>

        `
    }
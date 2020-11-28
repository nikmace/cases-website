const selectors = {
    btnAdd: () => document.getElementById('btn-add'),
    cartBtn: () => document.getElementById('cart-btn'),
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        selectors.cartBtn().textContent = productNumbers;
    }
}

function displayCart() {
    let cartItems = localStorage.getItem('productsInCart');
    let cartCost = localStorage.getItem('totalCost');
    cartCost = Math.round(cartCost);
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector(".products");
    if (cartItems && productContainer) {
        productContainer.innerHTML = '';
        Object.values(cartItems).map(item => {
            productContainer.innerHTML += `
            <div class="product">
                <i class='bx bxs-x-circle' ></i>
                <img src="/assets/images/graffiti_otterbox_iphone_case-rb5a550c0eb ec4f35b24c12b71acbe1bf_09z8p_540 копия.svg">
                <span>${item.name}</span>
            </div>
            <div class="price">${item.price}</div>
            <div class="quantity">
                <i class='bx bxs-caret-left-circle'></i>
                <span> ${item.inCart} </span>
                <i class='bx bxs-caret-right-circle' ></i>
            </div>
            <div class="total">
                ${item.inCart * item.price}
            </div>
            `
        })

        productContainer.innerHTML += `
            <div class="basketTotalContainer">
                <h4 class="basketTotalTitle">
                    Basket Total:
                </h4>
                <h4 class="basketTotal">
                    BGN${cartCost}
                </h4>
            </div>
        `
    }    
}

displayCart();

onLoadCartNumbers();
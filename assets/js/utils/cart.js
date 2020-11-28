const selectors = {
    btnAddOne: () => document.getElementById('btn-add-one'),
    btnAddTwo: () => document.getElementById('btn-add-two'),
    cartBtn: () => document.getElementById('cart-btn'),
}

let products = [
    {
        name: 'Case one',
        tag: 'caseone',
        price: 69.99,
        description: 'Custom graffiti case',
        imageUrl: '',
        quantity: '3',
        inCart: 0,
    },
    {
        name: 'Case two',
        tag: 'casetwo',
        price: 59.99,
        description: 'Custom graffiti case',
        imageUrl: '',
        quantity: '5',
        inCart: 0,
    },
    {
        name: 'Case three',
        tag: 'casethree',
        price: 54.99,
        description: 'Custom graffiti case',
        imageUrl: '',
        quantity: '7',
        inCart: 0,
    },
    {
        name: 'Case four',
        tag: 'casefour',
        price: 69.99,
        description: 'Custom graffiti case',
        imageUrl: '',
        quantity: '2',
        inCart: 0,
    },
]


selectors.btnAddOne().addEventListener('click', onSubmitEventHandlerOne);
selectors.btnAddTwo().addEventListener('click', onSubmitEventHandlerTwo)

function onSubmitEventHandlerOne(e) {
    e.preventDefault();
    //One forEach here
    //products[i]
    cartNumbers(products[0]);
    //products[i]
    totalCost(products[0])
}

function onSubmitEventHandlerTwo(e) {
    e.preventDefault();
    //One forEach here
    //products[i]
    cartNumbers(products[1]);
    //products[i]
    totalCost(products[1])
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');
    if (productNumbers) {
        selectors.cartBtn().textContent = productNumbers;
    }
}

function cartNumbers(product) {
    console.log(product);
    
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1)
        selectors.cartBtn().textContent = productNumbers + 1;
    } else {
        localStorage.setItem('cartNumbers', 1);
        selectors.cartBtn().textContent = 1;
    }

    setItems(product);
}

function setItems(product) {
    let cartItems = localStorage.getItem('productsInCart');
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
        if (cartItems[product.tag] == undefined) {
            cartItems = {
                ...cartItems,
                [product.tag]: product,
            }
        }
        cartItems[product.tag].inCart += 1;
    } else {
        product.inCart = 1;
        cartItems = {
            [product.tag]: product,
        }
    }
    
    localStorage.setItem("productsInCart", JSON.stringify(cartItems))
    console.log(cartItems)
}

function totalCost(product) {
    let cartCost = localStorage.getItem('totalCost');
    
    if (cartCost != null) {
        cartCost = parseInt(cartCost);
        localStorage.setItem("totalCost", cartCost + product.price);
    } else {
        localStorage.setItem('totalCost', product.price);
    }
}


onLoadCartNumbers();

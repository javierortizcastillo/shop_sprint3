// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

function cleanCart() {
    cartList = [];
    printCart();
}


function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    for (let product of cartList) {
        total += product.price;
        console.log(total);
    }
}


function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    addToCart();
    //Añadir propiedad cantidad(amount)
    cart.forEach((element) => {
        element.subtotal = element.price * element.amount;
        element.subtotalWithDiscount = 0;
       
        if (element.id == 1 && element.amount >= 3) {
            element.offer = 10;
            element.subtotalWithDiscount = element.subtotal - element.offer;
        }
        // Pastel
        if (element.id == 3 && element.amount >= 10) {
            element.offer = Math.floor((element.subtotal * 2) / 3);
            element.subtotalWithDiscount = element.subtotal - element.offer;
        }
    });
}

function printCart() {

    applyPromotionsCart()
    // Fill the shopping cart modal manipulating the shopping cart dom
    total = 0;
    let templateCart = '';

    for (let item of cart) {
        if (item.subtotalWithDiscount) {
            templateCart += `
        <tr>
        <th scope="row">${item.name}</th>
        <td>${item.price}</td>
        <td>${item.amount}</td>
        <td>${item.subtotalWithDiscount}</td>
        <td><button class="btn btn-dark m-3" onclick="removeFromCart(${item.id})">Remove</button></td>
        </tr>`;
        } else {
            templateCart+= `
        <tr>
        <th scope="row">${item.name}</th>
        <td>${item.price}</td>
        <td>${item.amount}</td>
        <td>${item.subtotal}</td>
        <td><button class="btn btn-dark m-3" onclick="removeFromCart(${item.id})">Remove</button></td>
        </tr>`;
        }
       
    }
    for (let item of cart) {
        if (item.subtotalWithDiscount) {
            total += Number(item.subtotalWithDiscount);
        } else {
            total += Number(item.subtotal);
        }
    }

    document.getElementById('cart_list').innerHTML = templateCart;
    document.getElementById('total_price').innerHTML = total.toFixed(2);
}

function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    for (let product of products) {
        if (product.id == id) {
            cartList.push(product);
       }
    }
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.

    cartList.forEach((element) => {
        element.amount = 0;
    });

    cartList.forEach(function (element) {
        (!element.id) ? cartList.push(element) : element.amount += 1;
    });
    cart = cartList.filter((element, index) => {
        return cartList.indexOf(element) === index;
    });
}

function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
        for( let i = 0; i < cartList.length; i += 1) {
           // 2. Add found product to the cartList array
           if(cartList[i].id === id) {
            cartList[i].amount -= 1;
              if(cartList[i].amount === 0) {
                  cartList.splice(i, 1);
             }
           }
        }
    printCart();
  
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}
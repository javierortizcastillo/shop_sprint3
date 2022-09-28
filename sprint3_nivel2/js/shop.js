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

// Exercise 1

// function buy(id) {
//     // 1. Loop for to the array products to get the item to add to cart
//     for(let product of products){
//         // 2. Add found product to the cartList array 
//         if(product.id == id){
//             cartList.push(product);
//         }   
//     }
// }

// Exercise 2
function cleanCart() {
    cartList = [];
    printCart();
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    for(let product of cartList){
        total += product.price;
        // console.log(total);
    }
}

// Exercise 4
// function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    // Añadir propiedad

    // cartList.forEach((element) => {
    //     element.amount = 0;
    // });

    //Sumar en el array de objetos

    // cartList.forEach(function(element){
    //     if(!element.id){
    //         cartList.push(element)
    //     }else{
    //         element.amount += 1;
    //     }
    // });
     
    // Elementos repetidos

    //cart = cartList.filter((element, index) => {
        //return cartList.indexOf(element) === index;

    //});
    //console.log(cart);
 //}

// Exercise 5
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"
    addToCart();

    cart.forEach((element) => {
        element.subtotal = element.price * element.amount;
        element.subtotalWithDiscount = 0;
        //descuento aceite
        if( element.id == 1 && element.amount >= 3) {
            element.offer = 10;
            element.subtotalWithDiscount = element.subtotal - element.offer;
        }
        //Descuento pastel
        if (element.id == 3 && element.amount >= 10) {
            element.offer = Math.floor((element.subtotal * 2)/3);
            element.subtotalWithDiscount = element.subtotal - element.offer;
        }
    });
    //console.log(cart);
}

// Exercise 6

function printCart() {

    applyPromotionsCart()
    // Fill the shopping cart modal manipulating the shopping cart dom
    total = 0;
    let templateCart = '';

    for(let item of cart){
        if(item.subtotalWithDiscount){
            templateCart += `
            <tr>
            <th scope="row">${item.name}</th>
            <td>${item.price}</td>
            <td>${item.amount}</td>
            <td>${item.subtotalWithDiscount}</td>
            <td><button onclick="removeFromCart(${item.id})">Remove</button></td>
            </tr>`;
        }else{
            templateCart += `
            <tr>
            <th scope="row">${item.name}</th>
            <td>${item.price}</td>
            <td>${item.amount}</td>
            <td>${item.subtotal}</td>
            <td><button onclick="removeFromCart(${item.id})">Remove</button></td>
            </tr>`;
        }
    }  
        for(let item of cart){
            if(item.subtotalWithDiscount){
                total += Number(item.subtotalWithDiscount);
            }else{
                total += Number(item.subtotal);
            }
            // console.log(total);
        }
   

        document.getElementById('cart_list').innerHTML = templateCart;
        document.getElementById('total_price').innerHTML = total.toFixed(2);
 
}


// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    for(let product of products){
        if(product.id == id){
            cartList.push(product);
        }   
    }
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
    cartList.forEach((element) => {
        element.amount = 0;
    });

    //Sumar en el array de objetos

    cartList.forEach(function(element){
        if(!element.id){
            cartList.push(element)
        }else{
            element.amount += 1;
        }
    });
     
    // Elementos repetidos

    cart = cartList.filter((element, index) => {
        return cartList.indexOf(element) === index;

    });
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    for (let i = 0; i < cartList.length; i++){
        // 2. Add found product to the cartList array
        if(cartList[i].id === id){
            cartList[i].amount -= 1;
        }
        if(cartList[i].amount === 0){
            cartList.splice(i , 1);
        }

    }
    printCart();
}

function open_modal(){
	console.log("Open Modal");
	printCart();
}
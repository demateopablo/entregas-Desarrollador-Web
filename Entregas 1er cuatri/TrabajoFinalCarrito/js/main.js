"use strict";
const cartSection = document.getElementById("cart");
const productsSection = document.getElementById("products");
const buyBtn = document.getElementById("buy");
buyBtn.addEventListener("click", finishPurchase);
const totalPriceSpan = document.getElementById(`totalPrice`);
let total = 0; //Precio total de la compra
let cartItems = [];
const PRODUCTS = [
    {
        "id": 1,
        "name": "Pintura Látex Alba Mate 20L",
        "type": "latex",
        "presentation": "20 litros",
        "price": 77000,
        "stock": 15,
        "image": "./assets/images/1.webp"
    },
    {
        "id": 2,
        "name": "Esmalte Sintético Alba Satinado 20L",
        "type": "esmalte sintetico",
        "presentation": "20 litros",
        "price": 153000,
        "stock": 10,
        "image": "./assets/images/2.webp"
    },
    {
        "id": 3,
        "name": "Pintura Látex Ultrable Lavable Alba 4L",
        "type": "latex ultralavable",
        "presentation": "4 litros",
        "price": 43000,
        "stock": 20,
        "image": "./assets/images/3.webp"
    },
    {
        "id": 4,
        "name": "Pintura Látex Interior Blanco Mate 10L",
        "type": "latex interior",
        "presentation": "10 litros",
        "price": 47000,
        "stock": 25,
        "image": "./assets/images/4.webp"
    },
    {
        "id": 5,
        "name": "Sellador Fijador Alba 4L",
        "type": "sellador",
        "presentation": "4 litros",
        "price": 19000,
        "stock": 30,
        "image": "./assets/images/5.webp"
    },
    {
        "id": 6,
        "name": "Convertidor de Óxido Alba 1L",
        "type": "convertidor de óxido",
        "presentation": "1 litro",
        "price": 17800,
        "stock": 50,
        "image": "./assets/images/6.webp"
    },
    {
        "id": 7,
        "name": "Esmalte al Agua Alba Satinado Blanco 4L",
        "type": "esmalte al agua",
        "presentation": "4 litros",
        "price": 32000,
        "stock": 18,
        "image": "./assets/images/7.webp"
    },
    {
        "id": 8,
        "name": "Removedor de Pintura Albastine 1L",
        "type": "removedor de pintura",
        "presentation": "1 litro",
        "price": 68000,
        "stock": 40,
        "image": "./assets/images/8.webp"
    },
    {
        "id": 9,
        "name": "Pintura para Piso Alba Roja 10L",
        "type": "pintura para pisos",
        "presentation": "10 litros",
        "price": 152000,
        "stock": 12,
        "image": "./assets/images/9.webp"
    },
    {
        "id": 10,
        "name": "Impermeabilizante de Techos Alba 20L",
        "type": "impermeabilizante",
        "presentation": "20 litros",
        "price": 119000,
        "stock": 8,
        "image": "./assets/images/10.webp"
    },
    {
        "id": 11,
        "name": "Set de Pinceles para Pintura",
        "type": "pinceles",
        "presentation": "set de 5 pinceles",
        "price": 15000,
        "stock": 60,
        "image": "./assets/images/11.webp"
    },
    {
        "id": 12,
        "name": "Rollo de Lija Grano Medio 5m",
        "type": "lijas",
        "presentation": "rollo de 5 metros",
        "price": 2800,
        "stock": 45,
        "image": "./assets/images/12.webp"
    },
    {
        "id": 13,
        "name": "Rodillo de Espuma para Pintura 9\"",
        "type": "rodillos",
        "presentation": "unidad",
        "price": 2500,
        "stock": 35,
        "image": "./assets/images/13.webp"
    },
    {
        "id": 14,
        "name": "Bandeja para Pintura Plástica 12L",
        "type": "bandejas",
        "presentation": "unidad",
        "price": 7200,
        "stock": 25,
        "image": "./assets/images/14.webp"
    },
    {
        "id": 15,
        "name": "Cinta de Enmascarar 48mm x 50m",
        "type": "cintas",
        "presentation": "rollo de 50 metros",
        "price": 3200,
        "stock": 100,
        "image": "./assets/images/15.webp"
    }
]

function resetProductsSection() {
    productsSection.innerHTML = "";
}

function resetCartSection() {
    cartSection.innerHTML = "";
}

function loadProducts(PRODUCTS) {
    const len = PRODUCTS.length;
    for (let i = 0; i < len; i++) {
        productsSection.innerHTML +=
            `   
        <article class="item">
                <header>
                <h1>${PRODUCTS[i].name}</h1>
                </header>
                <main>
                <img class="productImage" src=${PRODUCTS[i].image}>
                
                <p class="price">Precio: $${PRODUCTS[i].price}</p>
                </main>
                <footer>
                <input class="amount" type="number" id="amount${i}" min=0 max="${PRODUCTS[i].stock}"
                placeholder="Cantidad" required value="1"><span class="stock" id="stock${i}">Stock: ${PRODUCTS[i].stock}</span>
                <button class="addToCart" id="cartBtn${i}">Agregar al carrito</button>
                </footer>
                </article>
                `
    }
    for (let i = 0; i < len; i++) {
        document.getElementById(`cartBtn${i}`).addEventListener("click", () => {
            addToCart(i, PRODUCTS)
        })
    }
}

function addToCart(index, PRODUCTS) {
    const amountInput = document.getElementById(`amount${index}`);
    const amount = parseInt(amountInput.value); // Convierto a número, por si el usuario manipula el input y cambia el formato
    const selectedProduct = PRODUCTS[index];
    if (amount > 0 && selectedProduct.stock >= amount) {
        const itemCartIndex = isAlreadyInCart(selectedProduct);

        if (itemCartIndex !== -1) {
            // Si ya está en el carrito, actualizo la cantidad y el total
            cartItems[itemCartIndex].amount += amount;
            cartItems[itemCartIndex].totalPrice += selectedProduct.price * amount;
            total += selectedProduct.price * amount;

            updateCartView();
        } else {
            // Si no está, lo agrego
            cartItems.push({
                ...selectedProduct, //Paso todas las propiedades de selectedProduct al array del carrito
                amount: amount, //Agrego la propiedad amount para llevar un contador de la cantidad del mismo producto
                totalPrice: selectedProduct.price * amount, //Calculo el precio total (seria el amount total * price)
            });
            total += selectedProduct.price * amount;

            updateCartView();
        }
        selectedProduct.stock -= amount;
        resetProductsSection();
        loadProducts(PRODUCTS);
        if (buyBtn.hasAttribute("disabled")) {
            buyBtn.removeAttribute("disabled");
        }
    } else {
        alert(`${selectedProduct.name}: La cantidad ingresada es incorrecta`);
    }
}

function isAlreadyInCart(selectedProduct) {
    return cartItems.findIndex(item => item.id === selectedProduct.id);
}

function updateCartView() {
    resetCartSection();
    cartItems.forEach(item => {
        cartSection.innerHTML += `
        <li>
            <span class="amountSpan">x${item.amount}</span> ${item.name} - $${item.totalPrice}
        </li>
        `;
    });
    // Actualizo el total
    totalPriceSpan.innerHTML = total;
}


function showProductInCart(selectedProduct, amount, calculatedPrice) {
    cartSection.innerHTML +=
        `
        <li>
        <span class="amountSpan"> x${amount}</span> ${selectedProduct.name} - $${calculatedPrice}
        </li>
        `
}

function emptyCart() {
    cartItems = [];
    total = 0;
}

function finishPurchase() {
    totalPriceSpan.innerHTML = 0;
    resetCartSection();
    buyBtn.toggleAttribute("disabled")
    emptyCart();
    alert(`¡Compra realizada con éxito! 🥳`)
}

loadProducts(PRODUCTS);

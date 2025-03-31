"use strict";

let total = 0;
const products = [
    {
        "name": "TANZI TIGON 3.16",
        "description": "Sembradora con 16 abresurcos a 19.1 cm, ancho de 3 metros.",
        "price": 126335,
        "stock": 15
    },
    {
        "name": "TANZI TIGON 4.20",
        "description": "Sembradora con 20 abresurcos a 19.1 cm, ancho de 4 metros.",
        "price": 134589,
        "stock": 12
    },
    {
        "name": "TANZI AIR CART 12000",
        "description": "Tolva de 12,000 litros con capacidad 60%-40%.",
        "price": 83544,
        "stock": 10
    },
    {
        "name": "TANZI SPECIAL 4 5M",
        "description": "Sembradora con 19 abresurcos a 26 cm, ancho de 5 metros.",
        "price": 116458,
        "stock": 8
    },
    {
        "name": "Rueda niveladora rayos 2 7/8",
        "description": "Accesorio opcional para sembradoras, rueda niveladora.",
        "price": 139,
        "stock": 50
    },
    {
        "name": "Kit grano grueso Precision Planting (6 unidades)",
        "description": "Kit de sembrado con dosificadores Vset 2 y mini tolvas.",
        "price": 50331,
        "stock": 5
    },
    {
        "name": "Fertilizador pendular 600L",
        "description": "Fertilizadora de 600 litros con montaje de 3 puntos.",
        "price": 5160,
        "stock": 20
    },
    {
        "name": "Disco estrella para rueda tapadora",
        "description": "Accesorio opcional para rueda tapadora simple.",
        "price": 40,
        "stock": 100
    },
    {
        "name": "Contrapeso 30 kg",
        "description": "Contrapeso de 30 kg para sembradoras.",
        "price": 365,
        "stock": 30
    },
    {
        "name": "Kit actuador Tanzi DynamicForce",
        "description": "Sistema para fuerza descendente en sembradoras.",
        "price": 750,
        "stock": 15
    }
]

const productsList = document.querySelector(".productsList");
const cartSection = document.querySelector(".cart");

function getProducts(products) {
    const len = products.length;
    for (let i = 0; i < len; i++) {
        productsList.innerHTML +=
            `   
            <tr class="item">
                <td class="description">${products[i].name}</td>
                <td class="price">$${products[i].price} </td>
                <td>
                   <span class="stock" id="stock${i}">${products[i].stock}</span>
                </td>
                <td>
                   <input class="amount"type="number" id="amount${i}" min=0 max="${products[i].stock}" placeholder="Cantidad" required>
                </td>
                <td>
                   <button class="addToCart" id="btn${i}">Agregar al carrito</button>
                </td>
            </tr>
            `
    }
    for (let i = 0; i < len; i++) {
        document.getElementById(`btn${i}`).addEventListener("click", () => {
            addToCart(i, products)
        })
    }
}

function addToCart(i, products) {
    const amountInput = document.getElementById(`amount${i}`);
    const amount = amountInput.value;
    const totalSpan = document.getElementById(`totalAmount`);
    let selectedProduct = products[i];
    const stock = selectedProduct.stock;
    if (amount > 0 && amount <= stock) {
        selectedProduct.stock = stock - amount;
        amountInput.value = ``;
        let subtotal = selectedProduct.price * amount;
        cartSection.innerHTML +=
            `
        <li>
            <span class="cartAmount">${amount}</span> ${selectedProduct.name}, $${subtotal}
        </li>
        `
        total += subtotal;
        totalAmount.innerHTML = `$${total.toFixed(2)}`;
        resetProductList();
        getProducts(products);
        alert(`¡Producto añadido al carrito con éxito!`)
    } else {
        alert(`La cantidad ingresada es incorrecta`);
        return;
    }

}

function resetProductList() {
    productsList.innerHTML = ``;
}

getProducts(products);
const products = [
    {
        id: 101,
        prodCount: 1,
        type: "pizza",
        name: "Pizza Napolitana",
        size: "Familiar",
        price: 5990,
        img: "./images/items/pizzas/napolitana.png"
    },
    {
        id: 102,
        prodCount: 1,
        type: "pizza",
        name: "Pizza Pepperoni",
        size: "Familiar",
        price: 4990,
        img: "./images/items/pizzas/pepperoni.png"
    },
    {
        id: 103,
        prodCount: 1,
        type: "pizza",
        name: "Pizza Italiana",
        size: "Familiar",
        price: 4990,
        img: "./images/items/pizzas/italiana.png"
    },
    {
        id: 104,
        prodCount: 1,
        type: "pizza",
        name: "Pizza Americana",
        size: "Familiar",
        price: 5990,
        img: "./images/items/pizzas/americana.png"
    },
    {
        id: 105,
        prodCount: 1,
        type: "pizza",
        name: "Pizza Hawaina",
        size: "Familiar",
        price: 1990,
        img: "./images/items/pizzas/hawaiana.png"
    },
    {
        id: 106,
        prodCount: 1,
        type: "pizza",
        name: "Pizza Texana",
        size: "Familiar",
        price: 7990,
        img: "./images/items/pizzas/texana.png"
    },
    {
        id: 107,
        prodCount: 1,
        type: "pizza",
        name: "Pizza Pollo BBQ",
        size: "Familiar",
        price: 7990,
        img: "./images/items/pizzas/pollobbq.png"
    },
    {
        id: 108,
        prodCount: 1,
        type: "pizza",
        name: "Pizza Vegetariana",
        size: "Familiar",
        price: 999990,
        img: "./images/items/pizzas/vegetariana.png"
    },
    {
        id: 109,
        prodCount: 1,
        type: "pizza",
        name: "Pizza Doble Pepperoni",
        size: "Familiar",
        price: 7990,
        img: "./images/items/pizzas/doblepepperoni.png"
    },
    {
        id: 110,
        prodCount: 1,
        type: "pizza",
        name: "La mejor Chacao Pizza",
        size: "Familiar",
        price: 27990,
        img: "./images/items/pizzas/supreme.png"
    },
    {
        id: 201,
        prodCount: 1,
        type: "bebida",
        name: "Coca-Cola lata",
        size: "350ml",
        price: 790,
        img: "./images/items/drinks/1x-coca-cola-lata-350cc.jpg"
    },
    {
        id: 202,
        prodCount: 1,
        type: "bebida",
        name: "Coca-Cola light lata",
        size: "350ml",
        price: 790,
        img: "./images/items/drinks/1x-coca-cola-light-lata-350cc.jpg"
    },
    {
        id: 203,
        prodCount: 1,
        type: "bebida",
        name: "Fanta lata",
        size: "350ml",
        price: 790,
        img: "./images/items/drinks/1x-fanta-lata-350cc.jpg"
    },
    {
        id: 204,
        prodCount: 1,
        type: "bebida",
        name: "Sprite lata",
        size: "350ml",
        price: 790,
        img: "./images/items/drinks/1x-sprite-lata-350cc.jpg"
    },
    {
        id: 205,
        prodCount: 1,
        type: "bebida",
        name: "Coca-Cola botella",
        size: "1,5L",
        price: 1290,
        img: "./images/items/drinks/1x-coca-cola-botella-1500cc.jpg"
    },
    {
        id: 206,
        prodCount: 1,
        type: "bebida",
        name: "Coca-Cola light botella",
        size: "1,5L",
        price: 1290,
        img: "./images/items/drinks/1x-coca-cola-light-botella-1500cc.jpg"
    },
    {
        id: 207,
        prodCount: 1,
        type: "bebida",
        name: "Pepsi botella",
        size: "1,5L",
        price: 1290,
        img: "./images/items/drinks/1x-pepsi-botella-1500cc.jpg"
    },
    {
        id: 208,
        prodCount: 1,
        type: "bebida",
        name: "Fanta botella",
        size: "1,5L",
        price: 1290,
        img: "./images/items/drinks/1x-fanta-botella-1500cc.jpg"
    },
    {
        id: 209,
        prodCount: 1,
        type: "bebida",
        name: "Sprite botella",
        size: "1,5L",
        price: 1290,
        img: "./images/items/drinks/1x-sprite-botella-1500cc.jpg"
    },
    {
        id: 210,
        prodCount: 1,
        type: "bebida",
        name: "Nectar Whatts naranja botella",
        size: "1,5L",
        price: 1850,
        img: "./images/items/drinks/1x-nectar-watts-naranja-botella-1500cc.jpg"
    },
    {
        id: 211,
        prodCount: 1,
        type: "bebida",
        name: "Energetica Monster lata",
        size: "473ml",
        price: 1490,
        img: "./images/items/drinks/1x-energetica-monster-energy-lata-473cc.jpg"
    },
    {
        id: 212,
        prodCount: 1,
        type: "bebida",
        name: "Energetica Red Bull lata",
        size: "250ml",
        price: 1690,
        img: "./images/items/drinks/1x-energetica-red-bull-lata-250cc.jpg"
    },
    {
        id: 213,
        prodCount: 1,
        type: "bebida",
        name: "Energetica Mr Big botella",
        size: "1,5L",
        price: 3590,
        img: "./images/items/drinks/1x-energetica-mr-big-original-botella-1500cc.jpg"
    },
    {
        id: 214,
        prodCount: 1,
        type: "bebida",
        name: "Cerveza Becker 4,5\xb0 lata",
        size: "473ml",
        price: 450,
        img: "./images/items/drinks/1x-becker-45-lata-473cc.jpg"
    },
    {
        id: 215,
        prodCount: 1,
        type: "bebida",
        name: "Cerveza Escudo 5,5\xb0 lata",
        size: "470ml",
        price: 450,
        img: "./images/items/drinks/1x-escudo-55-lata-470cc.jpg"
    },
    {
        id: 216,
        prodCount: 1,
        type: "bebida",
        name: "Cerveza Royal Guard 5\xb0 lata",
        size: "470ml",
        price: 650,
        img: "./images/items/drinks/1x-royal-guard-lata-330cc.jpg"
    },
    {
        id: 217,
        prodCount: 1,
        type: "bebida",
        name: "Cerveza Corona 4,5\xb0 botella",
        size: "710ml",
        price: 1590,
        img: "./images/items/drinks/1x-corona-45-botella-330cc.jpg"
    },
    {
        id: 301,
        prodCount: 1,
        type: "postre",
        name: "Postre Manjarate",
        size: "80g",
        price: 490,
        img: "./images/items/dessert/7802900401016-1-300x300.jpg"
    },
    {
        id: 302,
        prodCount: 1,
        type: "postre",
        name: "Postre Chandelle",
        size: "130g",
        price: 559,
        img: "./images/items/dessert/78093676-1-300x300.jpg"
    },
    {
        id: 303,
        prodCount: 1,
        type: "postre",
        name: "Chocolate Trencito",
        size: "150g",
        price: 1390,
        img: "./images/items/dessert/7802230070029-2-300x300.jpg"
    },
    {
        id: 304,
        prodCount: 1,
        type: "postre",
        name: "Chocolate Sahne-Nuss",
        size: "250g",
        price: 2390,
        img: "./images/items/dessert/7802230070227-2-300x300.jpg"
    },
    {
        id: 305,
        prodCount: 1,
        type: "postre",
        name: "Helado Savory Pi\xf1a",
        size: "1L",
        price: 2290,
        img: "./images/items/dessert/7802710831119-2-300x300.jpg"
    },
    {
        id: 306,
        prodCount: 1,
        type: "postre",
        name: "Helado Panda Chocolate",
        size: "1L",
        price: 2390,
        img: "./images/items/dessert/7802715071053-300x300.png"
    },
    {
        id: 307,
        prodCount: 1,
        type: "postre",
        name: "Helado Panda Cassata",
        size: "2.5L",
        price: 4990,
        img: "./images/items/dessert/7801552000141-300x300.png"
    },
    {
        id: 308,
        prodCount: 1,
        type: "postre",
        name: "Helados Trendy Mini Cono",
        size: "10 unidades",
        price: 6490,
        img: "./images/items/dessert/7801552005788-300x300.png"
    }
];
// Create our number formatter.
const formatter = new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP"
});
const pizzasCont = document.querySelector("#pizzasCont");
const drinksCont = document.querySelector("#drinksCont");
const dessertCont = document.querySelector("#dessertCont");
const carritoCount = document.querySelector("#carritoCount");
const paymentProcess = document.querySelector("#payment-process");
let order = [];
document.addEventListener("DOMContentLoaded", ()=>{
    order = JSON.parse(localStorage.getItem("order")) || [];
    saveStorage();
    updateCarritoCount();
    if (paymentProcess != null) processOrder();
}) // Lee el elemento order luego de que el dom es cargado
;
if (pizzasCont != null) {
    const pizzas = products.filter(function(product) {
        return product.type === "pizza";
    });
    pizzas.forEach((prod)=>{
        const price = priceFormat(prod.price);
        pizzasCont.innerHTML += `
        <div class="col m-3 " style="width: 18rem;">
            <div class="card">
                <img src="${prod.img}" class="card-img-top p-2" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${prod.name}</h5>
                  <p class="card-text">Tamaño ${prod.size}</p>
                  <p class="card-text">${price}</p>
                  <a onClick="addToOrder(${prod.id});liveToast();" class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i> Añadir a pedido</a>
                </div>
            </div>
        </div>
        `;
    });
}
if (drinksCont != null) {
    const drinks = products.filter(function(product) {
        return product.type === "bebida";
    });
    drinks.forEach((prod)=>{
        const price = priceFormat(prod.price);
        drinksCont.innerHTML += `
        <div class="col m-3 " style="width: 18rem;">
            <div class="card">
                <img src="${prod.img}" class="card-img-top p-2" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${prod.name}</h5>
                  <p class="card-text">${prod.size}</p>
                  <p class="card-text">${price}</p>
                  <a onClick="addToOrder(${prod.id});liveToast();" class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i> Añadir a pedido</a>
                </div>
            </div>
        </div>
        `;
    });
}
if (dessertCont != null) {
    const desserts = products.filter(function(product) {
        return product.type === "postre";
    });
    desserts.forEach((prod)=>{
        const price = priceFormat(prod.price);
        dessertCont.innerHTML += `
        <div class="col m-3 " style="width: 18rem;">
            <div class="card">
                <img src="${prod.img}" class="card-img-top p-2" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${prod.name}</h5>
                  <p class="card-text">${prod.size}</p>
                  <p class="card-text">${price}</p>
                  <a onClick="addToOrder(${prod.id});liveToast();" class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i> Añadir a pedido</a>
                </div>
            </div>
        </div>
        `;
    });
}
const showOrder = ()=>{
    const modalBody = document.querySelector(`.modal .modal-body `);
};
/////////////////////////////////////////////
// Functions
function addToOrder(id) {
    const exist = order.some((prod)=>prod.id === id);
    if (exist) {
        const prod = order.map((prod)=>{
            if (prod.id === id) prod.prodCount++;
        });
    } else {
        const item = products.find((prod)=>prod.id === id);
        order.push(item);
        console.log(order);
    }
    saveStorage();
    updateCarritoCount();
}
function deleteFromOrder(id) {
    order = order.filter((prod)=>prod.id !== id);
    saveStorage();
    location.reload();
}
function clearOrder() {
    order = [];
    saveStorage();
    location.reload();
}
function clearStorage() {
    localStorage.clear();
    console.log("Storage cleaned!");
}
function saveStorage() {
    localStorage.setItem("order", JSON.stringify(order));
}
function updateCarritoCount() {
    carritoCount.textContent = " " + prodCount();
}
function prodCount() {
    count = 0;
    for(let i = 0; i < order.length; i++)count += order[i].prodCount;
    return count;
}
function addOne(id) {
    order.map((prod)=>{
        if (prod.id === id) prod.prodCount++;
    });
    saveStorage();
    location.reload();
}
function removeOne(id) {
    order.map((prod)=>{
        if (prod.id === id) {
            if (prod.prodCount <= 1) return;
            prod.prodCount--;
        }
    });
    saveStorage();
    location.reload();
}
function processOrder() {
    let totalPrice = 0;
    order.forEach((prod)=>{
        const productList = document.querySelector("#product-list tbody");
        const tr = document.createElement("tr");
        const price = priceFormat(prod.price);
        const subprice = priceFormat(prod.price * prod.prodCount);
        tr.innerHTML += `
            <td> <img class='img-fluid orderImage' src="${prod.img}"> </td>
            <td> ${prod.name} ${prod.size} </td>
            <td> ${price} </td>
            <td> 
                <button type="button" class="btn btn-secondary" onclick="addOne(${prod.id})"><i class="fa-solid fa-plus"></i></button>
                 ${prod.prodCount}  
                <button type="button" class="btn btn-secondary" onclick="removeOne(${prod.id})"><i class="fa-solid fa-minus"></i></button>
            </td>
            <td> ${subprice} </td>
            <td> <button class="btn btn-danger" onclick="deleteFromOrder(${prod.id})"><i class="fa-solid fa-trash"></i></button> </td>
        `;
        productList.appendChild(tr);
        totalPrice += prod.price * prod.prodCount;
    });
    document.getElementById("totalPrice").innerHTML = priceFormat(totalPrice);
}
function priceFormat(n) {
    return formatter.format(n);
}

//# sourceMappingURL=index.b4ce7916.js.map

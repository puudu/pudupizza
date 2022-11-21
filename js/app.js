const products = [
    { id: 101, type:'pizza', name: "Napolitana", size: "Familiar", price: 7990, img: "images/items/pizzas/napolitana.png" },
    { id: 102, type:'pizza', name: "Pepperoni", size: "Familiar", price: 7990, img: "images/items/pizzas/pepperoni.png" }, 
    { id: 103, type:'pizza', name: "Italiana", size: "Familiar", price: 7990, img: "images/items/pizzas/italiana.png" },
    { id: 104, type:'pizza', name: "Americana", size: "Familiar", price: 7990, img: "images/items/pizzas/americana.png" },
    { id: 105, type:'pizza', name: "Hawaina", size: "Familiar", price: 7990, img: "images/items/pizzas/hawaiana.png" },
    { id: 106, type:'pizza', name: "Texana", size: "Familiar", price: 7990, img: "images/items/pizzas/texana.png" },
    { id: 107, type:'pizza', name: "Pollo BBQ", size: "Familiar", price: 7990, img: "images/items/pizzas/pollobbq.png" },
    { id: 108, type:'pizza', name: "Vegetariana", size: "Familiar", price: 7990, img: "images/items/pizzas/vegetariana.png" },
    { id: 109, type:'pizza', name: "Doble Pepperoni", size: "Familiar", price: 7990, img: "images/items/pizzas/doblepepperoni.png" },
    { id: 110, type:'pizza', name: "Supreme", size: "Familiar", price: 7990, img: "images/items/pizzas/supreme.png" },
    { id: 201, type:'bebida', name: "Coca-Cola lata", size: "350ml", price: 990, img: "images/items/drinks/1x-coca-cola-lata-350cc.jpg" },
    { id: 202, type:'bebida', name: "Coca-Cola light lata", size: "350ml", price: 990, img: "images/items/drinks/1x-coca-cola-light-lata-350cc.jpg" },
    { id: 203, type:'bebida', name: "Fanta lata", size: "350ml", price: 990, img: "images/items/drinks/1x-fanta-lata-350cc.jpg" },
    { id: 204, type:'bebida', name: "Sprite lata", size: "350ml", price: 990, img: "images/items/drinks/1x-sprite-lata-350cc.jpg" },
    { id: 205, type:'bebida', name: "Coca-Cola botella", size: "1,5L", price: 1990, img: "images/items/drinks/1x-coca-cola-botella-1500cc.jpg" },
    { id: 206, type:'bebida', name: "Coca-Cola light botella", size: "1,5L", price: 1990, img: "images/items/drinks/1x-coca-cola-light-botella-1500cc.jpg" },
    { id: 207, type:'bebida', name: "Pepsi botella", size: "1,5L", price: 1990, img: "images/items/drinks/1x-pepsi-botella-1500cc.jpg" },
    { id: 208, type:'bebida', name: "Fanta botella", size: "1,5L", price: 1990, img: "images/items/drinks/1x-fanta-botella-1500cc.jpg" },
    { id: 209, type:'bebida', name: "Sprite botella", size: "1,5L", price: 1990, img: "images/items/drinks/1x-sprite-botella-1500cc.jpg" },
    { id: 210, type:'bebida', name: "Nectar Whatts naranja botella", size: "1,5L", price: 1850, img: "images/items/drinks/1x-nectar-watts-naranja-botella-1500cc.jpg" },
    { id: 211, type:'bebida', name: "Energetica Monster lata", size: "473ml", price: 2390, img: "images/items/drinks/1x-energetica-monster-energy-lata-473cc.jpg" },
    { id: 212, type:'bebida', name: "Energetica Red Bull lata", size: "250ml", price: 1690, img: "images/items/drinks/1x-energetica-red-bull-lata-250cc.jpg" },
    { id: 213, type:'bebida', name: "Energetica Mr Big botella", size: "1,5L", price: 3990, img: "images/items/drinks/1x-energetica-mr-big-original-botella-1500cc.jpg" },
    { id: 214, type:'bebida', name: "Cerveza Becker 4,5° lata", size: "473ml", price: 550, img: "images/items/drinks/1x-becker-45-lata-473cc.jpg" },
    { id: 215, type:'bebida', name: "Cerveza Escudo 5,5° lata", size: "470ml", price: 550, img: "images/items/drinks/1x-escudo-55-lata-470cc.jpg" },
    { id: 216, type:'bebida', name: "Cerveza Royal Guard 5° lata", size: "470ml", price: 950, img: "images/items/drinks/1x-royal-guard-lata-330cc.jpg" },
    { id: 217, type:'bebida', name: "Cerveza Corona 4,5° botella", size: "710ml", price: 1590, img: "images/items/drinks/1x-corona-45-botella-330cc.jpg" },
    { id: 301, type:'postre', name: "Postre Manjarate", size: "80g", price: 590, img: "images/items/dessert/7802900401016-1-300x300.jpg" },
    { id: 302, type:'postre', name: "Postre Chandelle", size: "130g", price: 679, img: "images/items/dessert/78093676-1-300x300.jpg" },
    { id: 303, type:'postre', name: "Chocolate Trencito", size: "150g", price: 1390, img: "images/items/dessert/7802230070029-2-300x300.jpg" },
    { id: 304, type:'postre', name: "Chocolate Sahne-Nuss", size: "250g", price: 2390, img: "images/items/dessert/7802230070227-2-300x300.jpg" },
    { id: 305, type:'postre', name: "Helado Savory Piña", size: "1L", price: 3290, img: "images/items/dessert/7802230070227-2-300x300.jpg" },
    { id: 306, type:'postre', name: "Helado Panda Chocolate", size: "1L", price: 2390, img: "images/items/dessert/7802715071053-300x300.png" },
    { id: 307, type:'postre', name: "Helado Panda Cassata", size: "2.5L", price: 4990, img: "images/items/dessert/7801552000141-300x300.png" },
    { id: 308, type:'postre', name: "Helado Panda Cassata", size: "10 unidades", price: 6490, img: "images/items/dessert/7801552005788-300x300.png" },
];

let order = []

document.addEventListener('DOMContentLoaded', () => {
    order = JSON.parse(localStorage.getItem('order')) || []
})

const pizzasCont = document.querySelector('#pizzasCont');

const pizzas = products.filter(function(product){
    return product.type === 'pizza';
})

pizzas.forEach(pizza => {
    pizzasCont.innerHTML += `
    <div class="col m-3 " style="width: 18rem;">
        <div class="card">
            <img src="${pizza.img}" class="card-img-top p-2" alt="...">
            <div class="card-body">
              <h5 class="card-title">${pizza.name}</h5>
              <p class="card-text">Tamaño ${pizza.size}</p>
              <p class="card-text">$${pizza.price}</p>
              <a onClick="addToOrder(${pizza.id})" class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i> Añadir a pedido</a>
            </div>
        </div>
    </div>
    `
});

function addToOrder(id){
    const item = products.find((prod) => prod.id === id);
    order.push(item);
    console.log(order);
    saveStorage();
}

const showOrder = () => {
    const modalBody = document.querySelector(`.modal .modal-body `)
}

function saveStorage(){
    localStorage.setItem("order", JSON.stringify(order))
}
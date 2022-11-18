const products = [
    { id: 1, type:'pizza', name: "Napolitana", size: "Familiar", price: 7990, img: "/images/items/pizzas/napolitana.png" },
    { id: 2, type:'pizza', name: "Pepperoni", size: "Familiar", price: 7990, img: "/images/items/pizzas/pepperoni.png" }, 
    { id: 3, type:'pizza', name: "Italiana", size: "Familiar", price: 7990, img: "/images/items/pizzas/italiana.png" },
    { id: 4, type:'pizza', name: "Americana", size: "Familiar", price: 7990, img: "/images/items/pizzas/americana.png" },
    { id: 5, type:'pizza', name: "Hawaina", size: "Familiar", price: 7990, img: "/images/items/pizzas/hawaiana.png" },
    { id: 6, type:'pizza', name: "Texana", size: "Familiar", price: 7990, img: "/images/items/pizzas/texana.png" },
    { id: 7, type:'pizza', name: "Pollo BBQ", size: "Familiar", price: 7990, img: "/images/items/pizzas/pollobbq.png" },
    { id: 8, type:'pizza', name: "Vegetariana", size: "Familiar", price: 7990, img: "/images/items/pizzas/vegetariana.png" },
    { id: 9, type:'pizza', name: "Doble Pepperoni", size: "Familiar", price: 7990, img: "/images/items/pizzas/doblepepperoni.png" },
    { id: 10, type:'pizza', name: "Supreme", size: "Familiar", price: 7990, img: "/images/items/pizzas/supreme.png" },
    { id: 69, type:'bebida', name: "Sus", size: "Sus", price: 7990, img: "/images/items/pizzas/napolitana.png" },
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
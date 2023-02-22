import Pizza from "./pizza.js";

window.onload = () => {
    const button = document.querySelector("button");
    button.addEventListener("click", () => {
        const flavor = prompt("Digite o sabor do grude pra nois");
        orderPizza(flavor);
    });
};

const timeToCook = {
    mussarela: 1000,
    frango: 2000,
    alho: 3000,
};

function orderPizza(flavor) {
    const time = timeToCook[flavor];

    new Pizza(flavor, time).make();
}

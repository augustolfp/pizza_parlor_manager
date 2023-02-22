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
    const element = addOrderOnScreen(flavor);
    setTimeout(() => {
        element.querySelector("span").textContent = "Pronto";
    }, time);
}

function addOrderOnScreen(flavor) {
    const p = document.createElement("p");
    const span = document.createElement("span");
    span.textContent = "Fazendo!";

    p.textContent = `Um pedido de pizza acabou de ser realizado. O sabor é ${flavor} | Status: `;
    p.append(span);

    document.body.append(p);

    return p;
}

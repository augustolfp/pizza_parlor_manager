export default class Pizza {
    constructor(flavor, time) {
        this.flavor = flavor;
        this.time = time;
        this.element = null;
    }

    make() {
        this.element = this.addOrderOnScreen();
        setTimeout(() => {
            this.element.querySelector("span").textContent = "Pronto";
        }, this.time);
    }

    addOrderOnScreen() {
        const p = document.createElement("p");
        const span = document.createElement("span");
        span.textContent = "Fazendo!";

        p.textContent = `Um pedido de pizza acabou de ser realizado. O sabor é ${this.flavor} | Status: `;
        p.append(span);

        document.body.append(p);

        return p;
    }
}

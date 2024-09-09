export class View {
    constructor(seletorCSS) {
        this.elemento = document.querySelector(seletorCSS);
    }
    update(model) {
        const template = this.criarTemplate(model);
        this.elemento.innerHTML = template;
    }
}

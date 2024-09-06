export class View {
    constructor(seletorCSS) {
        this.elemento = document.querySelector(seletorCSS);
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
    template(model) {
        throw Error('Classe filha precisa implementar o método');
    }
}

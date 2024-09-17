export class View {
    constructor(seletorCSS) {
        const elemento = document.querySelector(seletorCSS);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${seletorCSS} não existe no DOM, verifique!`);
        }
    }
    update(model) {
        let template = this.criarTemplate(model);
        this.elemento.innerHTML = template;
    }
}
//# sourceMappingURL=view.js.map
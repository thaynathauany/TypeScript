export class View {
    constructor(seletorCSS, escapar) {
        this.escapar = false;
        const elemento = document.querySelector(seletorCSS);
        if (elemento) {
            this.elemento = elemento;
        }
        else {
            throw Error(`Seletor ${seletorCSS} não existe no DOM, verifique!`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.criarTemplate(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }
}

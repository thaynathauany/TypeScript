export abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(seletorCSS: string) {
        const elemento = document.querySelector(seletorCSS)
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        }
        else {
            throw Error(`Seletor ${seletorCSS} não existe no DOM, verifique!`)
        }
    }

    public update(model: T): void {
        let template = this.criarTemplate(model)
        this.elemento.innerHTML = template;

    }

    protected abstract criarTemplate(model: T): string;

}
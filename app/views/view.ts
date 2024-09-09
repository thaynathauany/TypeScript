export abstract class View<T> {

    protected elemento: HTMLElement;

    constructor(seletorCSS: string) {
        this.elemento = document.querySelector(seletorCSS)
    }

    public update(model: T): void {
        const template = this.criarTemplate(model)
        this.elemento.innerHTML = template;
    }

    protected abstract criarTemplate(model: T): string;

}
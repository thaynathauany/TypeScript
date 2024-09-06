export abstract class View<T> {

    protected elemento: HTMLElement;
    constructor(seletorCSS: string) {
        this.elemento = document.querySelector(seletorCSS)
    }

    update(model: T): void {
        const template = this.template(model)
        this.elemento.innerHTML = template;
    }

    template(model: T): string {
        throw Error('Classe filha precisa implementar o método')
    }

}
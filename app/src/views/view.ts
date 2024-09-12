export abstract class View<T> {

    protected elemento: HTMLElement;
    private escapar: boolean = false;

    constructor(seletorCSS: string, escapar?: boolean) {
        const elemento = document.querySelector(seletorCSS)
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        }
        else {
            throw Error(`Seletor ${seletorCSS} não existe no DOM, verifique!`)
        }
        if (escapar) {
            this.escapar = escapar
        }
    }

    public update(model: T): void {
        let template = this.criarTemplate(model)
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.elemento.innerHTML = template;
    }

    protected abstract criarTemplate(model: T): string;

}
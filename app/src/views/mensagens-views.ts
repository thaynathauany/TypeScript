import { View } from "./view.js";

export class MensagemView extends View<string> {

    protected criarTemplate(modelAlert: string): string {
        return `
            <p class="alert alert-info">${modelAlert}</p>
        `
    }
}

export class MensagemErrorView extends View<string> {
    protected criarTemplate(modelError: string): string {
        return `
            <p class="alert alert-danger">${modelError}</p>
        `
    }
}
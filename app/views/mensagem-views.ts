import { View } from "./view.js";

export class MensagemView extends View<string> {

    template(modelAlert: string): string {
        return `
            <p class="alert alert-info">${modelAlert}</p>
        `
    }
}

export class MensagemErrorView extends View<string> {
    template(modelError: string): string {
        return `
            <p class="alert alert-danger">${modelError}</p>
        `
    }
}
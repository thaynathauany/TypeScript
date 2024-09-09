import { View } from "./view.js";
export class MensagemView extends View {
    criarTemplate(modelAlert) {
        return `
            <p class="alert alert-info">${modelAlert}</p>
        `;
    }
}
export class MensagemErrorView extends View {
    criarTemplate(modelError) {
        return `
            <p class="alert alert-danger">${modelError}</p>
        `;
    }
}

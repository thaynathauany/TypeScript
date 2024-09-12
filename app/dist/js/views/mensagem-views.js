import { View } from "./view.js";
export class MensagemView extends View {
    template(modelAlert) {
        return `
            <p class="alert alert-info">${modelAlert}</p>
        `;
    }
}
export class MensagemErrorView extends View {
    template(modelError) {
        return `
            <p class="alert alert-danger">${modelError}</p>
        `;
    }
}

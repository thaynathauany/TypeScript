import { View } from "./view.js";
export class NegociacoesView extends View {
    criarTemplate(model) {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.listarNegociacoes().map(itemNegociacao => {
            return `
                            <tr>
                                <td>${new Intl.DateTimeFormat().format(itemNegociacao.data)}</td>
                                <td>${itemNegociacao.quantidade}</td>
                                <td>${itemNegociacao.valor}</td>
                            </tr>
                        `;
        }).join('')}
                </tbody>
            </table>
        `;
    }
    update(model) {
        const htmlTemplate = this.criarTemplate(model);
        this.elemento.innerHTML = htmlTemplate;
    }
}

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
                                <td>${this.formataData(itemNegociacao.data)}</td>
                                <td>${itemNegociacao.quantidade}</td>
                                <td>${itemNegociacao.valor}</td>
                            </tr>
                        `;
        }).join('')}
                </tbody>
            </table>
        `;
    }
    formataData(data) {
        return new Intl.DateTimeFormat()
            .format(data);
    }
}

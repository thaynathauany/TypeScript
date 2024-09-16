import { escapar } from "../decorators/escapar.js";
import { Negociacoes } from "../models/negociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View<Negociacoes> {

    @escapar
    protected criarTemplate(model: Negociacoes): string {
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
                        `
        }).join('')}
                </tbody>
            </table>
        `;
    }

    private formataData(data: Date): string {
        return new Intl.DateTimeFormat()
            .format(data);
    }
}
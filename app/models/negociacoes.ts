import { Negociacao } from "./negociacao";

export class Negociacoes {
    private listaDeNegociacoes: Negociacao[] = [];

    adicionarNegociacao(itemNegociacao: Negociacao) {
        this.listaDeNegociacoes.push(itemNegociacao);
    }

    listarNegociacoes(): readonly Negociacao[] {
        return this.listaDeNegociacoes;
    }

}
import { Negociacao } from "./negociacao";

export class Negociacoes {
    private listaDeNegociacoes: Negociacao[] = [];

    public adicionarNegociacao(itemNegociacao: Negociacao) {
        this.listaDeNegociacoes.push(itemNegociacao);
    }

    public listarNegociacoes(): readonly Negociacao[] {
        return this.listaDeNegociacoes;
    }

}
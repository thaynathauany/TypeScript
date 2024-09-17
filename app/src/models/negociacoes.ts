
import { Modelo } from "../interfaces/modelo.js";
import { Negociacao } from "./negociacao.js";

export class Negociacoes implements Modelo<Negociacoes> {
    private listaDeNegociacoes: Negociacao[] = [];

    public adicionarNegociacao(itemNegociacao: Negociacao) {
        this.listaDeNegociacoes.push(itemNegociacao);
    }

    public listarNegociacoes(): readonly Negociacao[] {
        return this.listaDeNegociacoes;
    }

    public paraTexto(): string {
        return JSON.stringify(this.listaDeNegociacoes, null, 2);
    }

    public ehIgual(negociacoes: Negociacoes): boolean {
        return JSON.stringify(this.listaDeNegociacoes) === JSON.stringify(this.listaDeNegociacoes);
    }
}
export class Negociacoes {
    constructor() {
        this.listaDeNegociacoes = [];
    }
    adicionarNegociacao(itemNegociacao) {
        this.listaDeNegociacoes.push(itemNegociacao);
    }
    listarNegociacoes() {
        return this.listaDeNegociacoes;
    }
}

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
    paraTexto() {
        return JSON.stringify(this.listaDeNegociacoes, null, 2);
    }
    ehIgual(negociacoes) {
        return JSON.stringify(this.listaDeNegociacoes) === JSON.stringify(this.listaDeNegociacoes);
    }
}
//# sourceMappingURL=negociacoes.js.map
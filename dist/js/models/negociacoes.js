export class Negociacoes {
    constructor() {
        // Declaração de uma lista privada para armazenar as negociações. 
        // O tipo é um array de objetos do tipo Negociacao.
        this.listaDeNegociacoes = [];
        // Alternativamente, você pode usar a notação abaixo, que também retorna um array de leitura apenas:
        // lista(): ReadonlyArray<Negociacao> {
        //     return this.negociacoes;
        // }
    }
    // Alternativamente, você pode usar a notação abaixo, que tem o mesmo efeito:
    // private listaDeNegociacoes: Array<Negociacao> = []; 
    // Método para adicionar uma nova negociação à lista
    adicionarNegociacao(itemNegociacao) {
        this.listaDeNegociacoes.push(itemNegociacao); // Adiciona a negociação ao final da lista
    }
    // Método para retornar a lista de negociações
    // O tipo `readonly Negociacao[]` garante que o array retornado não pode ser modificado fora da classe
    listarNegociacoes() {
        return this.listaDeNegociacoes;
    }
}

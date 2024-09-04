import { Negociacao } from "./negociacao"; // Importa a classe Negociacao

export class Negociacoes {
    // Declaração de uma lista privada para armazenar as negociações. 
    // O tipo é um array de objetos do tipo Negociacao.
    private listaDeNegociacoes: Negociacao[] = [];
    // Alternativamente, você pode usar a notação abaixo, que tem o mesmo efeito:
    // private listaDeNegociacoes: Array<Negociacao> = []; 

    // Método para adicionar uma nova negociação à lista
    adicionarNegociacao(itemNegociacao: Negociacao) {
        this.listaDeNegociacoes.push(itemNegociacao); // Adiciona a negociação ao final da lista
    }

    // Método para retornar a lista de negociações
    // O tipo `readonly Negociacao[]` garante que o array retornado não pode ser modificado fora da classe
    listarNegociacoes(): readonly Negociacao[] {
        return this.listaDeNegociacoes;
    }
    // Alternativamente, você pode usar a notação abaixo, que também retorna um array de leitura apenas:
    // lista(): ReadonlyArray<Negociacao> {
    //     return this.negociacoes;
    // }
}
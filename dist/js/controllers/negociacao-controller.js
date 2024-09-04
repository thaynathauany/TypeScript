import { Negociacoes } from './../models/negociacoes.js'; // Importa a classe Negociacoes
import { Negociacao } from "../models/negociacao.js"; // Importa a classe Negociacao
export class NegociacaoController {
    constructor() {
        // Instância da classe Negociacoes que armazenará a lista de negociações
        this.negociacoes = new Negociacoes();
        // Inicializa as propriedades pegando os elementos do DOM usando seletores CSS
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
    }
    adiciona() {
        // Cria uma nova negociação
        const negociacao = this.criaNegociacao();
        // Modifica a data da negociação para o dia 12 (essa linha pode ser para fins de teste)
        negociacao.data.setDate(12);
        // Adiciona a nova negociação à lista de negociações
        this.negociacoes.adicionarNegociacao(negociacao);
        // Imprime a lista de negociações no console
        console.log(this.negociacoes.listarNegociacoes());
        // Limpa o formulário após a adição da negociação
        this.limparFormulario();
    }
    criaNegociacao() {
        // Substitui todos os hifens (-) por vírgulas (,) no valor da data e cria um novo objeto Date
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        // Converte o valor do campo quantidade para um número inteiro
        const quantidade = parseInt(this.inputQuantidade.value);
        // Converte o valor do campo valor para um número de ponto flutuante
        const valor = parseFloat(this.inputValor.value);
        // Retorna uma nova instância da classe Negociacao
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        // Limpa os campos do formulário
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        // Coloca o foco de volta no campo de data para facilitar a entrada de uma nova negociação
        this.inputData.focus();
    }
}

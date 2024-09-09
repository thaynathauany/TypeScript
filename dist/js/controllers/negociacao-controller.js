import { MensagemErrorView } from '../views/mensagem-views.js';
import { MensagemView } from '../views/mensagem-views.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
import { Negociacoes } from '../models/negociacoes.js';
import { Negociacao } from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.mensagemErrorView = new MensagemErrorView('#mensagemErrorView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
        // Adiciona event listeners para remover mensagens ao clicar nos inputs
        this.inputData.addEventListener('focus', () => this.removerMensagens());
        this.inputQuantidade.addEventListener('focus', () => this.removerMensagens());
        this.inputValor.addEventListener('focus', () => this.removerMensagens());
    }
    adiciona() {
        if (this.inputData.value === '' || this.inputQuantidade.value === '' || this.inputValor.value === '') {
            this.mensagemErrorView.update('Todos os campos devem ser preenchidos!');
            return;
        }
        const negociacao = this.criaNegociacao();
        this.negociacoes.adicionarNegociacao(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
        this.limparFormulario();
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        // this.inputData.focus();
    }
    removerMensagens() {
        const mensagemViewElement = document.querySelector('#mensagemView');
        if (mensagemViewElement) {
            mensagemViewElement.innerHTML = '';
        }
        const mensagemErrorViewElement = document.querySelector('#mensagemErrorView');
        if (mensagemErrorViewElement) {
            mensagemErrorViewElement.innerHTML = '';
        }
    }
}

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
    }
    adiciona() {
        if (this.inputData.value === '' || this.inputQuantidade.value === '' || this.inputValor.value === '') {
            console.log('Campos estão vazios, exibindo mensagem de erro.');
            this.mensagemErrorView.update('Todos os campos devem ser preenchidos!');
            return;
        }
        console.log('Campos preenchidos, adicionando negociação.');
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
        this.inputData.focus();
        this.limparMensagens();
    }
    limparMensagens() {
        // const mensagemView = document.querySelector('#mensagemView');
        const mensagemErrorView = document.querySelector('#mensagemErrorView');
        // if (mensagemView) {
        //     mensagemView.innerHTML = '';
        // }
        if (mensagemErrorView) {
            mensagemErrorView.innerHTML = '';
        }
    }
}

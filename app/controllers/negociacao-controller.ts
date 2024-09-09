import { MensagemErrorView } from '../views/mensagem-views.js';
import { MensagemView } from '../views/mensagem-views.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
import { Negociacoes } from '../models/negociacoes.js';
import { Negociacao } from "../models/negociacao.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private mensagemErrorView = new MensagemErrorView('#mensagemErrorView');

    constructor() {
        this.inputData = document.querySelector('#data')!;
        this.inputQuantidade = document.querySelector('#quantidade')!;
        this.inputValor = document.querySelector('#valor')!;
        this.negociacoesView.update(this.negociacoes);

        // Adiciona event listeners para remover mensagens ao clicar nos inputs
        this.inputData.addEventListener('focus', () => this.removerMensagens());
        this.inputQuantidade.addEventListener('focus', () => this.removerMensagens());
        this.inputValor.addEventListener('focus', () => this.removerMensagens());
    }

    adiciona(): void {
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

    criaNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }

    limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        // this.inputData.focus();
    }

    removerMensagens(): void {
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
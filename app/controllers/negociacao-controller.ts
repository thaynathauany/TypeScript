import { MensagemErrorView } from '../views/mensagens-views.js';
import { MensagemView } from '../views/mensagens-views.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
import { Negociacoes } from '../models/negociacoes.js';
import { Negociacao } from "../models/negociacao.js";
import { DiasDaSemana } from '../enums/dias-da-semana.js';

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView', true);
    private mensagemView = new MensagemView('#mensagemView');
    private mensagemErrorView = new MensagemErrorView('#mensagemErrorView');


    constructor() {
        this.inputData = document.querySelector('#data')!;
        this.inputQuantidade = document.querySelector('#quantidade')!;
        this.inputValor = document.querySelector('#valor')!;
        // this.negociacoesView.update(this.negociacoes);
        this.inputData.addEventListener('focus', () => this.removerMensagens());
        this.inputQuantidade.addEventListener('focus', () => this.removerMensagens());
        this.inputValor.addEventListener('focus', () => this.removerMensagens());
    }

    public adiciona(): void {
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value
        )
        if (this.inputData.value === '' || this.inputQuantidade.value === '' || this.inputValor.value === '') {
            this.mensagemErrorView.update('Todos os campos devem ser preenchidos!');
            return;
        }
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemErrorView.update('É permitido negociações apenas em dias úteis')
            return;
        }
        this.negociacoes.adicionarNegociacao(negociacao);
        this.limparFormulario();
        this.atualizaView();
    }

    private limparFormulario(): void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        // this.inputData.focus();
    }

    private removerMensagens(): void {
        const mensagemViewElement = document.querySelector('#mensagemView');
        if (mensagemViewElement) {
            mensagemViewElement.innerHTML = '';
        }

        const mensagemErrorViewElement = document.querySelector('#mensagemErrorView');
        if (mensagemErrorViewElement) {
            mensagemErrorViewElement.innerHTML = '';
        }
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }

    private ehDiaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.domingo && data.getDay() < DiasDaSemana.sabado
    }
}
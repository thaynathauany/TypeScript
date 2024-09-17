var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NegociacoesService } from './../services/negociacoes-services.js';
import { MensagemErrorView } from '../views/mensagens-views.js';
import { MensagemView } from '../views/mensagens-views.js';
import { NegociacoesView } from '../views/negociacoes-view.js';
import { Negociacoes } from '../models/negociacoes.js';
import { Negociacao } from "../models/negociacao.js";
import { DiasDaSemana } from '../enums/dias-da-semana.js';
import { logarTempoDeExecucao } from '../decorators/logar-tempo-de-execucao.js';
import { inspect } from '../decorators/inspect.js';
import { domInjector } from '../decorators/dom-injector.js';
import { imprimir } from '../utils/imprimir.js';
export class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.mensagemErrorView = new MensagemErrorView('#mensagemErrorView');
        this.negociacoesService = new NegociacoesService();
        this.inputData.addEventListener('focus', () => this.removerMensagens());
        this.inputQuantidade.addEventListener('focus', () => this.removerMensagens());
        this.inputValor.addEventListener('focus', () => this.removerMensagens());
    }
    adiciona() {
        const negociacao = Negociacao.criaDe(this.inputData.value, this.inputQuantidade.value, this.inputValor.value);
        if (this.inputData.value === '' || this.inputQuantidade.value === '' || this.inputValor.value === '') {
            this.mensagemErrorView.update('Todos os campos devem ser preenchidos!');
            return;
        }
        if (!this.ehDiaUtil(negociacao.data)) {
            this.mensagemErrorView.update('É permitido negociações apenas em dias úteis');
            return;
        }
        this.negociacoes.adicionarNegociacao(negociacao);
        imprimir(negociacao, this.negociacoes);
        this.limparFormulario();
        this.atualizaView();
    }
    importaDados() {
        this.negociacoesService
            .obterNegociacoesDoDia()
            .then(negociacoesDeHoje => {
            return negociacoesDeHoje.filter(negociacaoDeHoje => {
                return !this.negociacoes
                    .listarNegociacoes()
                    .some(negociacao => negociacao
                    .ehIgual(negociacaoDeHoje));
            });
        })
            .then(negociacoesDeHoje => {
            for (let negociacao of negociacoesDeHoje) {
                this.negociacoes.adicionarNegociacao(negociacao);
            }
            this.negociacoesView.update(this.negociacoes);
        });
    }
    limparFormulario() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
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
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }
    ehDiaUtil(data) {
        return data.getDay() > DiasDaSemana.domingo && data.getDay() < DiasDaSemana.sabado;
    }
}
__decorate([
    domInjector('#data')
], NegociacaoController.prototype, "inputData", void 0);
__decorate([
    domInjector('#quantidade')
], NegociacaoController.prototype, "inputQuantidade", void 0);
__decorate([
    domInjector('#valor')
], NegociacaoController.prototype, "inputValor", void 0);
__decorate([
    inspect,
    logarTempoDeExecucao(true)
], NegociacaoController.prototype, "adiciona", null);
//# sourceMappingURL=negociacao-controller.js.map
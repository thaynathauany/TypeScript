import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const button = document.querySelector('button[type="submit"]');
if (button) {
    button.addEventListener('click', event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else {
    console.log('Botão não encontrado');
}
const buttonImport = document.querySelector('#botao-importa');
if (buttonImport) {
    buttonImport.addEventListener('click', () => {
        controller.importaDados();
    });
}
else {
    throw Error('Botão não encontrado');
}

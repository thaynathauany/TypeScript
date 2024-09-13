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

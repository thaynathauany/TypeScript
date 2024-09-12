import { NegociacaoController } from "./controllers/negociacao-controller.js";
const controller = new NegociacaoController();
const button = document.querySelector('button[type="submit"]');
if (button) {
    console.log('Botão encontrado');
    button.addEventListener('click', event => {
        event.preventDefault();
        console.log('Evento de clique no botão capturado');
        controller.adiciona();
    });
}
else {
    console.log('Botão não encontrado');
}

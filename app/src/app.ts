import { NegociacaoController } from "./controllers/negociacao-controller.js";

const controller = new NegociacaoController();

const button = document.querySelector('button[type="submit"]');
if (button) {
    button.addEventListener('click', event => {
        event.preventDefault();  // Prevenir o envio do formulário
        // console.log('Evento de clique no botão capturado');
        controller.adiciona();   // Chamando o método que adiciona a negociação
    });
} else {
    console.log('Botão não encontrado');
}

const buttonImport = document.querySelector('#botao-importa');
if (buttonImport) {
    buttonImport.addEventListener('click', () => {
        controller.importaDados();
    }
    );
} else {
    throw Error('Botão não encontrado');
}
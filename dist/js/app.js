import { NegociacaoController } from "./controllers/negociacao-controller.js"; // Importa o controlador de negociações
// Cria uma nova instância do NegociacaoController
const controller = new NegociacaoController();
// Seleciona o formulário no DOM
const form = document.querySelector('.form');
// Adiciona um listener ao evento de submissão do formulário
form.addEventListener('submit', event => {
    event.preventDefault(); // Previne o comportamento padrão de recarregar a página
    controller.adiciona(); // Chama o método adiciona do controller para processar os dados do formulário
});

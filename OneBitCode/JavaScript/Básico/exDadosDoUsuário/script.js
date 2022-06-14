window.alert("Bem-Vindo! A seguir, pediremos que informe alguns dados.");

const nome = window.prompt("Por favor, informe seu nome completo!");
const idade = window.prompt("Por favor, informe sua idade!");
const idadeConfirm = window.confirm(`Sua idade é: ${idade} anos`);

window.alert(
    `Nome Completo: ${nome}, \nIdade: ${idade}, \nConfirmação: ${idadeConfirm}`
);

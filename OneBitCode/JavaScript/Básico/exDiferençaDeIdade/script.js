let nomeMaisVelha = window.prompt(
    "Por favor, informe o nome da pessoa mais velha."
);
let idadeMaisVelha = Number(
    window.prompt("Por favor, informe a idade da pessoa mais velha.")
);

let nomeMaisNova = window.prompt(
    "Por favor, informe o nome da pessoa mais nova."
);
let idadeMaisNova = Number(
    window.prompt("Por favor, informe a idade da pessoa mais nova.")
);

let diferençaIdade = idadeMaisVelha - idadeMaisNova;

window.alert(
    `Nome: ${nomeMaisVelha}, \nIdade: ${idadeMaisVelha} anos, \n\nNome: ${nomeMaisNova}, \nIdade: ${idadeMaisNova} anos \n\nDiferença de idade: ${diferençaIdade}`
);

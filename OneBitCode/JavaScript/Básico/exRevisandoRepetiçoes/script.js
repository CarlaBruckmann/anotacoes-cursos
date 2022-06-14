let nameSpaceship = prompt("Por favor, digite o nome da Espaçonave:");
let invertName = "";

for (let i = nameSpaceship.length - 1; i >= 0; i--) {
    if (nameSpaceship[i] == "a" || nameSpaceship[i] == "A") {
        break;
    }
    invertName += nameSpaceship[i];
}
alert(
    `Nome original da nave: ${nameSpaceship}\nNome após ocultação: ${invertName}`
);

//supernova 9
//012345678
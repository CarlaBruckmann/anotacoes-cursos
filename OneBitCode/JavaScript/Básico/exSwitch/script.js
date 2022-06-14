let lyDistance = prompt(
  "Por favor, digite a distância em anos-luz que deseja converter:"
);
let conversionOptions = prompt(
  "Por favor, escolha a unidade de conversão:\n1 - Parsec (pc)\n2 - Unidade Astronômica (AU)\n3 - Quilômetros (km)"
);

let optionSelect;
let convertedDistance;

switch (conversionOptions) {
  case "1":
    optionSelect = "Parsec (PC)";
    convertedDistance = lyDistance * 0.306601;
    break;

  case "2":
    optionSelect = "Unidade Astronômica (AU)";
    convertedDistance = lyDistance * 63241.1;
    break;

  case "3":
    optionSelect = "Quilometros (Km)";
    convertedDistance = lyDistance * 9.5 * Math.pow(10, 12);
    break;

  default:
    optionSelect = "Unidade não identificada";
    convertedDistance = "Conversão fora de escopo";
}
alert(
  `Distância em anos-luz: ${lyDistance}\nDistância em ${optionSelect}: ${convertedDistance}`
);

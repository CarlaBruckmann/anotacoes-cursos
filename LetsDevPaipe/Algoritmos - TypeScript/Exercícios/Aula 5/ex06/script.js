let num1 = Number(window.prompt("Por favor, digite o primeiro número:"));
let num2 = Number(window.prompt("Por favor, digite o segundo número:"));
let num3 = Number(window.prompt("Por favor, digite o terceiro número:"));

if (num1 > num2 && num1 > num3) {
  window.alert(`${num1} é o maior número`);
} else if (num2 > num1 && num2 > num3) {
  window.alert(`${num2} é o maior número`);
} else if (num3 > num1 && num3 > num2) {
  window.alert(`${num3} é o maior número`);
} else {
  window.alert(`Os números são iguais.`);
}

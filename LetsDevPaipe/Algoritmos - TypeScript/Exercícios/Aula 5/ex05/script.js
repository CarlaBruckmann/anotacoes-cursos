let nota1 = Number(window.prompt("Por favor, digite a primeira nota:"));
let nota2 = Number(window.prompt("Por favor, digite a segunda nota:"));
let media = (nota1 + nota2) / 2;

if (media == 10) {
  window.alert(`Média: ${media}. Aprovado com Distinção!`);
} else if (media >= 7) {
  window.alert(`Média: ${media}. Aprovado!`);
} else {
  window.alert(`Média: ${media}. Reprovado!`);
}

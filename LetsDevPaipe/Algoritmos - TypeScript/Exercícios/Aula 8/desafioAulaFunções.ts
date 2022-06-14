/*Desafio para Aula:
Escreva uma função que recebe as 3 notas de um aluno por parametro e uma letra
Se for a letra A, calcula a média aritmética das notas do aluno 
Se for P, a sua média ponderada (pesos: 5,3 e 2)
Se for H, a sua média harmonica
A média calculada tambem deve retornar para função que chamou */

let media: number;
function notas(nota1: number, nota2: number, letra: string) {
  if (letra === "A" || letra === "a") {
    media = (nota1 + nota2) / 2;
  } else if (letra === "P" || letra === "p") {
    media = (nota1 * 5 + nota2 * 3) / (5 + 3);
  } else if (letra === "H" || letra === "h") {
    media = 2 / (nota1 / 1 + nota2 / 2);
  }
  return media;
}
notas(10, 20, "A");
console.log(media);

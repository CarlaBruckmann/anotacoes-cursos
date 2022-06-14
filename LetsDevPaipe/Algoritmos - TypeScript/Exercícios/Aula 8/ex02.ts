//2.Escreva uma função que receba dois números inteiros e retorne o menor número.
var arr: number[] = [5, 10, 2, 24, 1];
var min = arr.reduce(function (a, b) {
  return Math.min(a, b);
});
console.log(min);

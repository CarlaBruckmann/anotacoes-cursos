//1.Escreva uma função que receba dois números inteiros e retorne o maior número.
var arr: number[] = [5, 10, 2];
var max = arr.reduce(function (a, b) {
  return Math.max(a, b);
}, -Infinity);
console.log(max);

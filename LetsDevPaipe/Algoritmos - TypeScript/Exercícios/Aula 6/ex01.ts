/*Desenvolver um algoritmo que efetue a soma de todos os números ímpares que são múltiplos de três 
e que se encontram no conjunto dos números de 1 até 500.
- numeros de 1 a 500
- encontrar os multiplos de 3
- somar 
 */
let num: number = 0;
let rangeNum: number[] = [];
for (num >= 1; num <= 500; num++) {
  if (num % 3 === 0 && num % 2 !== 0) {
    rangeNum.push(num);
  }
}
let sumNum: number = rangeNum.reduce(function (sumNum, i) {
  return sumNum + i;
});
console.log(rangeNum);
console.log(sumNum);//20667

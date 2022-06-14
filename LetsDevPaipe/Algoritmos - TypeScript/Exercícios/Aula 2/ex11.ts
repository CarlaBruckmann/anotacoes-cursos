//Crie um programa que leia três notas de um aluno e em seguida calcule a média aritmética e mostre na tela.
let notas: number[] = [7, 7, 10]
let soma: number = notas.reduce(function (soma, i) {
    return soma + i;
})
let media: number = soma / notas.length;
console.log(media)//8

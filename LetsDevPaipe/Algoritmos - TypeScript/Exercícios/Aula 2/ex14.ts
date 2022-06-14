/*Faça um programa que pergunte quanto a pessoa quer emprestado, faça o cálculo do empréstimo a juros  compostos.
Para conseguir resolver este exercícios faça o seguinte:
Solicite
Quanto ela quer emprestado?
Em quantos meses ela vai pagar?
Considere uma taxa de juros de 2% ao mês, ou seja, 0.02.
Utilize a seguinte fórmula para calcular Juros Compostos:  M = C x (1+i)^t
Onde:
M é o valor final após a aplicação dos juros
C o valor que a pessoa vai pegar emprestado
i é a taxa de juros
t é o tempo
Ao final mostre quanto a pessoa pagará após a aplicação dos juros.
*/
let valorEmprestimo: number = 2000
let parcelasDePagamento: number = 12
let taxaDeJuros: number = 0.02
let valorFinal: number = valorEmprestimo * (1 + taxaDeJuros) ^ parcelasDePagamento

console.log(valorFinal)//2036
/*
Exercício 3

Crie um código onde você troca o valor de uma variável por outra. Os valores (conteúdo digitado pelo usuário) não são fixo no código, ou seja, são valores que o usuário irá digitar e podem mudar a cada vez que vocês rodarem o código.

Se o começo do código você tiver uma variável x com o valor 10 e uma variável com o valor y com o valor y com 99. No final estes valores devem ser invertidos, ou seja, x tem 99 e y tem 10. Não vale trapacear e colocar valores fixos no código.

Dica importante: Lembre-se de que as variáveis são escalares (recebem só um valor por vez). Se achar necessário crie quantas variáveis você precisar.

*/

let x : number = 10
let y : number = 99
let reverseNumbers = [x,y]
x = reverseNumbers[1]
y = reverseNumbers[0]
console.log(x, y) //99,10
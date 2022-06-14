var num1 = window.prompt('Por favor, digite o primeiro número:')
var num2 = window.prompt('Por favor, digite o segundo número:')

if (num1 > num2) {
    window.alert(`O maior número é ${num1}.`);
}
else if (num1 < num2) {
    window.alert(`O menor número é ${num2}.`)
}
else {
    window.alert(`Os números são iguais.`)
}
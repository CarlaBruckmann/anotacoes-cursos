let num = window.prompt('Por favor, digite um número.')
let startNum = window.prompt('Por favor, digite o número inicial.')
let finalNum = window.prompt('Por favor, digite o número final')
for(let i = startNum; i<=finalNum; i++){
    document.write(`${num} x ${i} = ${num*i}<br>`)
}
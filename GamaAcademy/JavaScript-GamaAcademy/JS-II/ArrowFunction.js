/* //function
function soma(a,b) {
    return a + b
}
console.log(soma(3,5))
*/

//arrow function
const soma = (a, b) => a + b //se for mais de uma linha, abrir bloco de codigo {}
console.log(soma(3,5))


const sayHello = name => `Hello ${name}`
console.log(sayHello('Carla'))
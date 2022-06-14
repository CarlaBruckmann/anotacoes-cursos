const alunasGama = ['Carla', 'Alice','Mari'] //array
console.log(alunasGama[2]);//acessar informações em um array

//Operador spread (...)
const alunasXp = [...alunasGama, 'Laura']//SPREAD ... -> pega o valor da array anterior e adiciona 'Laura'
console.log(alunasGama)
console.log(alunasXp)

//Métodos de iteração
// for (i = 0; i < alunasXp.length; i++){
//     console.log(alunasXp[i])
// }


//MAP - mapa
alunasXp.map(aluna => console.log(aluna))

//FILTER - filtro
const numeros = [35,45,68,72,24]
const numerosImpares = numeros.filter(numero => numero%2 !=0)
console.log(numerosImpares)

const numerosPares = numeros.filter(numero => numero%2 ==0)
console.log(numerosPares)

//FIND - primeiro elemento que retornar true na condição
//(é como se fizesse um filter(), e retornar o primeiro elemento dele)
const primeiroNumeroImpar = numeros.find(numero => numero%2 !=0)
console.log(primeiroNumeroImpar)

//SORT - ordena os elementos do próprio array e o retorna (lembrar da ordem Unicode)
const numerosOrdenadosCrescente = numeros.sort()
console.log(numerosOrdenadosCrescente)

const numerosOrdenadosDecrescente = numeros.sort((a,b) => b-a)
console.log(numerosOrdenadosDecrescente)
 

const pontos = ['laranja', 'banana', 'maça']
const pontosOrdem = pontos.sort()
console.log(pontosOrdem)

//REDUCE - reduz nosso array à um resultado de uma operação matemática 

const numbers = [1,34,35]
const soma = numbers.reduce ((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual 
},5)
console.log(soma)
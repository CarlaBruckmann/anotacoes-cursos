let num = [5,8,2,9,3]//vetor - elementos - valores
num.push(1)//adiciona um elemento no fim do array
num.sort()//coloca em ordem crescente [1,2,3,5,8,9]
console.log(num)
console.log(`O vetor tem  ${num.length} elementos, o primeiro é ${num[0]}`)
let pos = num.indexOf(9)//retorna a posição onde o valor 9 esta - esta na posição 5
if(pos == -1){
    console.log(`O valor nao foi encontrado`)
}else{
    console.log(pos)
}




/* adicionar elementos no array:
num[3] = 6 - adiciona elemento 3 valor 6
num.push(7) - vai acrescentar o 7 no fim do array - não especifica elemento
num.length - saber o tamanho da array 
num.sort() - coloca todos os elementos em ordem crescente
*/
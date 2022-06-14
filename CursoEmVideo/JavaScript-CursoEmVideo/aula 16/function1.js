//saber se o numero é par ou impar
//se n resto 0

function parimp(n) { //parametro
    if (n % 2 == 0) {
        return 'par';//retorno
    } else {
        return 'impar';//retorno
    }
}
let res = parimp(28) //chamada
console.log(`${res}`)

// ou console.log(parimpar(28)) - sem criar variavel res
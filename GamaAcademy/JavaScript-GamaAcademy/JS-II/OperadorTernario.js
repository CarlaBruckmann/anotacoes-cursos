/*
//if..else
if (idade >= 18){
    return "maior de idade"
}else{
    return "menor de idade"
}

//Operador ternário
idade >= 18 ? "maior de idade" : "menor de idade"
*/

function calculaIdade(idade){
    return idade >= 18 ? 'Maior de idade' : 'Menor de idade';
}

console.log(calculaIdade(15));
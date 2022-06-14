// CONDIÇÃO ANINHADA


//var idade = 17
// if (idade < 16){
//     console.log('não vota')
// }else{
//     if(idade < 18){
//         console.log('voto opcional')
//     }else{
//         console.log('voto obrigatório')
//     }
// }

//forma mais curta:

var idade = 68
if (idade < 16){
    console.log('não vota')
}else if(idade < 18 || idade > 67){ //junta else if
        console.log('voto opcional')
    }else{
        console.log('voto obrigatório')
    }

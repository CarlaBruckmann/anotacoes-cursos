const pessoa = { //objeto{}
    nome : 'Carla', //chave : valor
    idade: 28,
    cidade: 'Fln'
}

//como acessar o valor das chaves?
//Notação de ponto
console.log(pessoa.nome)

//Notação de colchetes
console.log(pessoa['idade'])

//Destructuring - Como desestruturar Objetos
 const {nome, idade, cidade} = pessoa
 console.log(cidade)
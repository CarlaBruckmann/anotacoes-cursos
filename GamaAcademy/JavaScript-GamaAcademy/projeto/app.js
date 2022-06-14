//importar arquivo de dados
//pegar o input -> no front input.value -> aqui utilizando a readline(biblioteca)
//acessar tudo o que a biblioteca disponibiliza
//.question é nativo da readline - permite fazer perguntas para a entrada do usuário
/*se a resposta do usuário for sim:
mostra as categorias disponíveis e pergunta qual categoria será escolhida
*/
/*se a resposta do usuário for não:
mostra todos os livros em ordem crescente pela quantidade de páginas
*/

const livros = require('./database')

const readline = require('readline-sync')
const entradaInicial = readline.question('Deseja buscar um livro? S/N')

if (entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Categorias disponíveis: ')
    console.log('Quadrinhos', '/ Ficção', '/ Romance', '/Educação Infantil')

    const entradaCategoria = readline.question('Qual categoria voce escolhe? ')
    const retorno = livros.filter(livro => livro.categoria === entradaCategoria)
    console.table(retorno)
} else {
    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas)
    console.log('Todos os livros disponíveis: ')
    console.table(livrosOrdenados)
}
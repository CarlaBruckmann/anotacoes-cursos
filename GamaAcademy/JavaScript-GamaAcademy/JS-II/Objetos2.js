
//arrai de objetos - geralmente estruturas de dados - se parece com JSON
const filmes = [{
    id: 1,
    titulo: "Harry Potter e a Pedra Filosofal",
    duração: 120
},
{
    id: 2,
    titulo: "Harry Potter e a Camara Secreta",
    duração: 130
},
{
    id: 3,
    titulo: "Harry Potter e o Prisioneiro de Askaban",
    duração: 200
}]

const [{id, titulo, duração}] = filmes //destructuring
console.log(id) //traz o primeiro 

filmes.map(filme => console.log(filme.titulo))//traz todos os titulos de todos os objetos da array

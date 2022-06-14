//Arrays de Objetos
const filmes = [
  {
    filme: "Harry Potter",
    ano: 2001,
  },
  {
    filme: "Meu Malvado Favorito",
    ano: 2011,
  },
];

//Destructuring Array de Objetos: 
const [{filme,ano}]= filmes
console.log(filme)//retorna o 1º objeto

//Acessar todos os dados de uma categoria: 
const [{filme,ano}]= filmes
filmes.map(filme =>console.log(filme.filme))//retorna todos os filmes da array
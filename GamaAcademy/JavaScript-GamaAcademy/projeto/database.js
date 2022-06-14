//simulando JSON
const livros = [{
    id: 1,
    nome: "Persépolis",
    autor: "Marjane Satrapi",
    categoria: "Quadrinhos",
    paginas: 500,
    recomenda: true,
    leu: true
},
{
    id: 2,
    nome: "A Revolução dos Bichos",
    autor: "George Orwell",
    categoria: "Ficção",
    paginas: 96,
    recomenda: true,
    leu: true
},
{
    id: 3,
    nome: "1984",
    autor: "George Orwell",
    categoria: "Romance",
    paginas: 414,
    recomenda: false,
    leu: false
},
{
    id: 4,
    nome: "O Processo",
    autor: "Franz Kafka",
    categoria: "Ficção",
    paginas: 254,
    recomenda: false,
    leu: false
},
{
    id: 5,
    nome: "Educação Não Violenta",
    autor: "Elisama Santos",
    categoria: "Educação Infantil",
    paginas: 166,
    recomenda: true,
    leu: true
}
]

module.exports = livros
//exportar arquivos para que o NODE tenha acesso. 
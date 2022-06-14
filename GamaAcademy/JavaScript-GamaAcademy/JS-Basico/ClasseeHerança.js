//forma pra criar itens
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    }
    //função precisa declarar somente o nome
    read() {
        return `Estou lendo ${this.title}`

    }

}
   let book = new Book("Harry Potter", "Preconceituosa", "250")
//   let otherBook = new Book ("segundo livro", "outro autor", "100")
//   console.log (book.read())//.read() chama a função
//   console.log (otherBook.read())// chama a função 
//   console.log (book, otherBook)//imprime a lista

class ITBook extends Book {//estender todas as propriedades do pai
    constructor(title, author, pages, technology) {
        super(title, author, pages)//herdando atributos da classe anterior 
        this.technology = technology //incluindo o novo atributo
    }
}
let itBook = new ITBook("Harry Potter", "Preconceituosa", 250, "bruxaria")
console.log(itBook)//retorna lista incluindo o novo objeto
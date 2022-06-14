const listContainer = document.querySelector('[data-lists]') // seleciona o data do html
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

let lists = [] //array de lista de tarefas - Objeto

newListForm.addEventListener('submit', function (e) { //ficar escutando no formulario => botão funcionar -> parametros submit -> função sem nome -> (e) é o evento 
    //<form> tem um comportamento padrão do navegador, toda vez que o navegador recebe um submit, a página recarrega. Pra que isso não aconteça e apague a lista:
    e.preventDefault()
    const listName = newListInput.value //pegar o que foi digitado 
    if (listName === null || listName === '') return //caso o input esteja vazio, não acontecer nada. 

    const list = createList(listName) //criar a lista - cada item -- chama função
    newListInput.value = null //limpar o input apos clicar no botão
    lists.push(list)//item entrar no fim da array
    render() //chama função 
})

function createList(name){//incluir dados na array
    return {id: Date.now().toString(), name: name}//pegar a data atual - transformar em string
}

function clearElement(element){//limpar a lista para não repetir os itens 2x
    while(element.firstChild){//remove o primeiro elemento
        element.removeChild(element.firstChild)
    }
}
function render() {
    clearElement(listContainer)//chamar a função para limpar o container e nao repetir itens 
    lists.forEach(function (list) {//criar a lista na tela - jogar pro HTML
        const item = window.document.createElement('li') // criar elemento li
        item.classList.add('item')//adiciona uma classe ao elemento HTML - class="item"
        item.innerText = list.name //conteúdo que o elemento vai receber - objeto
        listContainer.appendChild(item)//qual elemento do HTML vai recebe-lo. onde o elemento vai ficar
    })
}




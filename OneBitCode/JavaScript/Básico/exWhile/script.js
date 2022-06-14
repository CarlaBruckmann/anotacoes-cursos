let selectOption = 0 
let score = ""

let nameSpaceship = prompt("Por favor, digite o nome da nave:")
selectOption = prompt("Deseja entrar em dobra espacial?\n1 - Sim\n2 - Não")

while (selectOption == "1"){
    score ++
    selectOption = prompt("Deseja entrar em dobra espacial?\n1 - Sim\n2 - Não")
}
alert(`Nave: ${nameSpaceship} \nQuantidade de dobras:  ${score}`)
let nameSpaceship = prompt("Por favor, digite o nome da espaçonave:")
let charReplace = prompt("Por favor, digite a letra que deseja substituir:")
let newChar = prompt("Por favor, informe a letra de substituição:") 
let newName = ""

for (let i = 0; i < nameSpaceship.length; i++){
    if(nameSpaceship[i] == charReplace){
        newName += newChar
    }else{
        newName += nameSpaceship[i]
    }
}
alert(`O novo nome da nave é: ${newName}`)

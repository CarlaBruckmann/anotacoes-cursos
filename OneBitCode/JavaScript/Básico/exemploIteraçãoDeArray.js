//forEach -> percorre o array e, para cada elemento,  vai chamar o callback  
let hitchedSpaceShips = ["Demeter","Darwin","Supernova","Fenix","Puller"]
hitchedSpaceShips.forEach(function(currentSpaceShip,index){
    console.log(`Nave: ${currentSpaceShip}\nIndice: ${index}`)
})

//map -> modifica os elementos do array, um por um, sem alterar o array original 
let upcasedSpaceShips = hitchedSpaceShips.map(function(currentSpaceShip){
    let upcased = currentSpaceShip.toUpperCase()
    return upcased
})
console.log(upcasedSpaceShips)

//filter -> filtrar os elementos da array -> aguarda um retorno booleano do callback para saber se o elemento passou no filtro ou não 
//True -> insere no novo arrau / false -> não insere -> retorna um novo array
let with7Chars = hitchedSpaceShips.filter(element => {return element.length >= 7})
console.log(with7Chars)

//find -> vai retornar o primeiro elemento que satisfazer a condição -> retorna o elemento
let findSpaceShipDarwin = hitchedSpaceShips.find(element => {return element == "Darwin"})
console.log(findSpaceShipDarwin)
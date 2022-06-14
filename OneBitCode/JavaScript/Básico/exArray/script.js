/* temos abaixo uma array bidimensional de naves que estão engatadas numa estação espacial 
Para cada sub-array, a primeira posição é o nome da nave, a segunda é a quantidade de tripulantes e a terceira informa se o processo de engate já foi concluido ou não
nesta lista, a plataforma de engate que a nave está parada é o [índice da nave no array +1]

1 -> Filtrar o nome das naves que tem mais de 9 tripulantes
2 -> Informar o número da plataforma que está a primeira nave que ainda esta com engate pendente (findIndex())
3 -> Destacar o nome de todas as naves colocando-as em caixa alta e exibindo 
4 -> exibir um alerta com todas as informações
*/

const hitchedSpaceships = [
    ['Fenix', 8, true],
    ['Golias', 10, true],
    ['Helmet', 5, false],
    ['Elemental', 3, true],
    ['Darwin', 15, false]
]
let crewGreaterThan9 = hitchedSpaceships.filter(spaceship => {
    return spaceship[1] > 9
}).map(spaceship => {
    return spaceship[0]
})

let ongoingHitchPlatform = hitchedSpaceships.findIndex(spaceship => { 
    return spaceship[2] == false 
})
let highlightedSpaceships = hitchedSpaceships.map(spaceship => {
    return spaceship[0].toUpperCase()
})

let message = "Espaçonaves com mais de 9 tripulantes: " + crewGreaterThan9.join(", ")
message += "\nPlataform com processo de engate: " + (ongoingHitchPlatform + 1)
message += "\nEspaçonaves destacadas: " + highlightedSpaceships.join(", ")

alert(message)
console.log(message)
//substituir todos os caracteres "e" por "a"
let spaceship = "Helmet"
let newSpaceship = ""

for (let i = 0; i < spaceship.length; i++) {
    if (spaceship[i] == "e") {
        newSpaceship += "a"
    } else {
        newSpaceship += spaceship[i]
    }
}
console.log(newSpaceship)
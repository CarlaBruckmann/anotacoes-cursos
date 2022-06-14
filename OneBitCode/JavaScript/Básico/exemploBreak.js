//break vai encerrar a execução quando for encontrado o "o". 
let spaceshipName = "Supernova"

for (let i = 0; i < spaceshipName.length; i++){
    if(spaceshipName[i] == "o"){
        break
    }
    console.log(spaceshipName[i])
}
//receber nome da nave
//velocidade inicial 0 
/*menu entre as seguintes opções: Acelerar a nave em 5kms
                                Desacelerar em 5km/s (não pode ficar com a velocidade negativa
                                Imprimir dados de bordo (nome da nave e velocidade atual
                                Sair do programa 
                                Caso escolha algo que não está na lista, exibir o menu novamente   */
// 1 - Criar uma função que exiba o menu e valide a opção escolhida
// 2 - Uma função para cada ação do menu de acelerar
// 3 - Encerrar o app somente quando digitar para sair 

//Nome da nave:
let spaceshipName = prompt("Olá! Por favor, digite abaixo o nome da nave:");
let velocity = 0
menuActive();

function spaceshipAccelerate(){
    velocity = velocity + 5 
    alert(`Acelerando a velocidade para ${velocity}km/s`)
    menuActive()
}

function spaceshipSlowDown(){
    velocity = velocity - 5
    if(velocity <0){
        alert(`A nave encontra-se parada neste momento!`)
        velocity = 0
    }else{
        alert(`Diminuindo a velocidade para ${velocity}Km/s`)
    }
    menuActive()
}

function printData(){
    alert(`Nave: ${spaceshipName}\nVelocidade atual: ${velocity}Km/s`)
    menuActive();
}

function menuActive(){ 
    let menuOptions = prompt(`Por favor, informe a opção desejada:\n1 - Acelerar a nave 5km/s\n2 - Desacelerar a nave 5km/s\n3 - Imprimir dados de bordo\n4 - Sair`); 
    switch (menuOptions) {
        case "1":
            spaceshipAccelerate()
            break;
        case "2":
            spaceshipSlowDown()
            break;
        case "3":
            printData()
            break;
        case "4":
            alert("Navegação encerrada!")
            break;4
        default:
            alert("Opção não identificada.")
            menuActive()
            break;
    }
}










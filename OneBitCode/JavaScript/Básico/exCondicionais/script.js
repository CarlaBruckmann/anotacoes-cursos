let nomePiloto = window.prompt('Bem vindo a Nave Millennium Falcon!\nPor favor, digite o seu nome!');

let velInicial = 0;

let velAcelerar = window.prompt('Por favor, informe a velocidade desejada (Km/s).')

let velConfirmar = window.confirm(`A velocidade desejada é ${velAcelerar} Km/s?`)

velConfirmar === true ? velInicial = velAcelerar : velInicial === 0; //atualiza a velocidade inicial para o valor digitado

if(velInicial <=0){
    window.alert('Nave esta parada. Considere partir e aumentar a velocidade.')
} else if (velInicial < 40){
    window.alert('Você está devagar. Podemos aumentar mais.')
} else if(velInicial < 80){
    window.alert('Parece uma boa velocidade para manter.')
} else if(velInicial < 100){
    window.alert('Velocidade alta. Considere diminuir.')
}else{
    window.alert('Velocidade perigosa. Controle automático forçado.')
}

window.alert(`Nome do Piloto: ${nomePiloto}. \nVelocidade Atual: ${velInicial} Km/s.`)
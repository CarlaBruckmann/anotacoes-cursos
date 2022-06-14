/*computador de bordo em uma espaçonave no momento em que ela inicia a parada até abrir as comportas para os pilotos saírem 
1 - a espaçonave está a 150km/s
2 - criar uma função para desacelerar 20km/s a cada segundo (para cada interação de um laço de repetição é 1s)
3 - será uma HOF e também deve imprimir cada atualização que houver na velocidade da nave (callback)
4 - Ao final, exiba a mensagem informando que a nave está parada e as comportas podem ser abertas
*/



function slowDown (velocity, printer){
    let deceleration = 20;
    while(velocity > 0){
        printer(velocity)//impressão
        velocity -= deceleration//decrementando
    }
    alert('Nave parada. Autorizada a abertura das comportas de acesso.')
}

let spaceshipVelocity = 150
slowDown(spaceshipVelocity, function(velocity){
    console.log(`Velocidade Atual ${velocity}`)
})
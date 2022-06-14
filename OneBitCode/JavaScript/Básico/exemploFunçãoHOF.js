function doubleVelocity(velocity, printer){
    let newVelocity = velocity * 2
    printer(newVelocity)
    return newVelocity
}

let printVelocity = velocity => {
    console.log(`Nova Velocidade ${velocity}km/s`)
}

let newVelocity = doubleVelocity(60, printVelocity)
console.log(newVelocity)
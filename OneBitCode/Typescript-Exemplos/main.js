const spaceship = {
    name: "X-Wing",
    speed: 0,
};
/*Se colocar o mouse em cima da variavel, aparece a tipagem -> VSCode consegue saber automáticamente
Sempre será esse tipo */
function accelerate(spaceship, speed) {
    /*Com o mouse em cima da função, clicar em Quick Fix -> if all types (vai completar os tipos automaticamente) */
    spaceship.speed = speed;
}
accelerate(spaceship, 50);
const setPilot = (newPilot, spaceship) => {
    spaceship.pilot = newPilot;
};
const accelerate = (targetSpeed, spaceship) => {
    spaceship.speed = targetSpeed;
};
const sendToMission = (spaceship) => {
    spaceship.inMission = true;
};
const spaceship = {
    name: '',
    pilot: '',
    speed: 0,
    inMission: false,
};
const pilot = "Han Solo";
spaceship.name = "Millennium Falcon";
setPilot(pilot, spaceship);
accelerate(50, spaceship);
sendToMission(spaceship);
console.log(spaceship);

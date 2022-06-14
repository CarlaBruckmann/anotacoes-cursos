const naves = {
  name: "X-Wing",
  speed: 0,
};
/*Se colocar o mouse em cima da variavel, aparece a tipagem -> VSCode consegue saber automáticamente 
Sempre será esse tipo */

function accelerate1(naves: { name: string; speed: number }, speed: number) {
  /*Com o mouse em cima da função, clicar em Quick Fix -> if all types (vai completar os tipos automaticamente) */
  naves.speed = speed;
}
accelerate1(naves, 50);

let spaceship = {
  name: "Fenix",
  crewQuantity: 7,
  type: "Batalha",
};
console.log(spaceship);

//acessar propriedade:
//-> notação de ponto:
console.log(spaceship.type);
// -> notação de colchetes:
console.log(spaceship["type"]);
// -> Destructuring -> como desestruturar objetos
const { name, crewQuantity, type } = spaceship;
console.log(name);

//Adicionar novas propriedades no objeto:
spaceship.nomeNovaPropriedade1 = false;
spaceship.nomeNovaPropriedade2 = 100;
console.log(spaceship);

//Objeto tambem pode ser criado vazio:
let nomeObjeto1 = {};
let nomeObjeto2 = new Object();

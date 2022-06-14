"use strict";
//Boolean
var contaPaga = false;
//Number 
var idade = 2;
// String 
var nome = 'Carla';
// Array
var idades = [23, 28, 45, 32]; //ou: 
var idades2 = [2, 5, 8, 10];
// Tuple -> parecido com array -> pouco utilizado -> limita a quantidade de elementos
var jogadoras;
jogadoras = ['carla', 2, 'helena'];
//Enum -> ajuda a fazer mapeamento de informações
var StatusAprovacao;
(function (StatusAprovacao) {
    StatusAprovacao["Aprovado"] = "001";
    StatusAprovacao["Pendente"] = "002";
    StatusAprovacao["Rejeitado"] = "003";
})(StatusAprovacao || (StatusAprovacao = {}));
var statusDaAprovacao = StatusAprovacao.Aprovado;
//Any -> pra qualquer coisa, quando não sabe o type -> anular a tipagem do typescript
var retornoDaApi = ['nome', 22, true];
var retornoDaApi2 = {
//objeto com várias coisas que você não sabe o type
};
//Void -> utilizado em funções -> pra dizer que uma função não retorna nada. 
function printarNaTela(msg) {
    console.log(msg);
}
//Null e Undefined 
var u = undefined;
var n = null;
//Object - quando preciso passar um objeto 
function criar(objeto) {
    //...
}
criar({
    propriedade: 1,
    valor: 5
}); //criar('carla') -> da erro, precisa ser objeto
// Never -> quase nunca utilizado -> coisas que nunca ocorrem -> nunca terminam -> ou pra erro
function loopInfinito() {
    while (true) { } //fica em loop infinito - nunca termina - never
}
function erro(mensagem) {
    throw new Error(mensagem); // excesão no código - nunca termina
}
function falha() {
    return erro('algo falhou');
}
//Union Types: um type OU outro type
function exibirNota(nota) {
    console.log("A nota \u00E9 " + nota);
}
exibirNota('10'); //pode ser string ou number :) 
var nota = 5;
var funcionarios = [{
        nome: 'Carla',
        sobrenome: 'Bruckmann',
        dataNascimento: new Date()
    }];
// ------------>  mais types: https://www.typescriptlang.org/docs/handbook/basic-types.html <---------
//valores nulos ou opcionais --> inferencia do typescript te obriga a usar type.
//let altura = 1.6 -> automaticamente define que é number
//altura = null --> não vai aceitar
//como fazer?
var altura = 1.6;
altura = null;
var contato = {
    nome: 'Carla',
    telefone1: '4258444',
    //telefone2: null 
};
//Type Assertion -> acertar/ informar o type à partir daquele momento - define esplecitamente qual é o type 
var minhaIdade = 23;
minhaIdade.toString(); //a partir do as number, será um type number. 
//(<number>minhaIdade).toString() // ou escrever assim.
var input = document.getElementById('numero1');
//const input = <HTMLInputElement>document.getElementById('numero1'); //ou escrever assim.
console.log(input.value);

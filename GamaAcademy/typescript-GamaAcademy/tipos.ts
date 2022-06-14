//Boolean
const contaPaga: boolean = false;


//Number 
const idade: number = 2;


// String 
const nome: string = 'Carla';


// Array
const idades: number[] = [23,28,45,32]; //ou: 
const idades2: Array<number> = [2,5,8,10];


// Tuple -> parecido com array -> pouco utilizado -> limita a quantidade de elementos
let jogadoras: [string,number,string];
jogadoras = ['carla',2,'helena'];


//Enum -> ajuda a fazer mapeamento de informações
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;


//Any -> pra qualquer coisa, quando não sabe o type -> anular a tipagem do typescript
const retornoDaApi: any[] = ['nome', 22, true];
const retornoDaApi2 : any = {
    //objeto com várias coisas que você não sabe o type
}


//Void -> utilizado em funções -> pra dizer que uma função não retorna nada. 
function printarNaTela(msg: string): void{
    console.log(msg);
}


//Null e Undefined 
const u: undefined = undefined;
const n: null = null;


//Object - quando preciso passar um objeto 
function criar(objeto: object){
    //...
}
criar({
    propriedade: 1,
    valor: 5
})   //criar('carla') -> da erro, precisa ser objeto


// Never -> quase nunca utilizado -> coisas que nunca ocorrem -> nunca terminam -> ou pra erro
function loopInfinito(): never{
    while (true) { } //fica em loop infinito - nunca termina - never
}

function erro(mensagem: string): never{
    throw new Error(mensagem); // excesão no código - nunca termina
}
function falha() :never{ //never porque retona a função anterior, que é never
    return erro('algo falhou')
}


//Union Types: um type OU outro type
function exibirNota(nota: number | string){
    console.log(`A nota é ${nota}`)
}
exibirNota('10')//pode ser string ou number :) 

const nota: number | string | boolean = 5;



//Alias -> atalho para os types -> criar um type

// type Funcionarios = string[] | number[] | boolean //quando tem muitos types, cria um específico e utiliza como type
// const funcionarios: Funcionarios = ['Victor', 'Manuel', 'Zéquinha']//posso utilizar esse Alias para outras operações

// function tratarFuncionarios( funcionarios: Funcionarios){
//     //...
// }


type funcionario = { //preferir usar Interface
    nome: string,
    sobrenome: string,
    dataNascimento: Date
} 

const funcionarios: funcionario[] = [{
    nome: 'Carla',
    sobrenome: 'Bruckmann',
    dataNascimento: new Date()
}] 


// ------------>  mais types: https://www.typescriptlang.org/docs/handbook/basic-types.html <---------

//valores nulos ou opcionais --> inferencia do typescript te obriga a usar type.

//let altura = 1.6 -> automaticamente define que é number
//altura = null --> não vai aceitar
//como fazer?
let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome:string,
    telefone1:string,
    //telefone2: string| null 
    telefone2?: string //? pode não ser nada - null - não é um campo obrigatório
}
const contato: Contato = {
    nome: 'Carla',
    telefone1: '4258444',
    //telefone2: null 
}


//Type Assertion -> acertar/ informar o type à partir daquele momento - define esplecitamente qual é o type 
const minhaIdade: any = 23;
(minhaIdade as number).toString()//a partir do as number, será um type number. 
//(<number>minhaIdade).toString() // ou escrever assim.

const input = document.getElementById('numero1') as HTMLInputElement;
//const input = <HTMLInputElement>document.getElementById('numero1'); //ou escrever assim.
console.log(input.value);
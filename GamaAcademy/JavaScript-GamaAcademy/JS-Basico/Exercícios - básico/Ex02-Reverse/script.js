//Reverse a string
let newStr = '';

function reverseAString(str){
    for(let i = str.length - 1; i >=0; i--){ //i => inicializador - str.length => comprimento da string  - i-- => decrementar
        newStr += str[i];
    }
    console.log(newStr)
}
let resultado = reverseAString('Hello Gamma Academy')

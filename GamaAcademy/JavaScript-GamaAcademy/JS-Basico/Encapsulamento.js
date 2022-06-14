class Person {
    constructor(name) {
        this._name = name // _encapsulamento - privado
    }

    get name() {
        //obter 
        return this._name
    }
    set name(value){
        this._name = value //permite definir  novos valores
    }
}
let person = new Person('james')
person.name = 'Ca' // novo valor definido 
console.log(person.name)
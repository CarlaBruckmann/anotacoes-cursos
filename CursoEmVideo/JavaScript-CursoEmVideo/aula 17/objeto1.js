let amigo = { nome : 'José' ,
sexo : 'M' ,
peso : 85.3 , 
engordar(p=0){
    this.peso += p //this -> auto referencia ao objeto peso
    console.log('Engordou')

} }
amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)
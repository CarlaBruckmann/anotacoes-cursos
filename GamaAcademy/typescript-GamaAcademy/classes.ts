 class Data{
     public dia: number;//vai incluir a typagem definida aqui no começo e no construtor 
     private mes: number; //privado - só poderá ser acessado dentro da própria classe
     ano: number;


     constructor (dia: number, mes: number, ano: number = 1970){ //vai utilizar o ano 1970 caso não seja informado 
         this.dia = dia;
         this.mes = mes;
         this.ano = ano;
     }
 }
 const data = new Data( 3,8,2017);
 console.log(data.dia);

 const data2 = new Data (3,8); //vai utilizar o ano 1970

 //-----> OU PODE SER DECLARADO DESTA FORMA: <----
 class Data3{
    /* exclui : public dia: number;
    private mes: number; 
    ano: number;*/

    constructor (public dia: number, public mes: number, public ano: number = 1970){ 
        /* exclui: this.dia = dia;
        this.mes = mes;
        this.ano = ano;*/
    }
}
const data3 = new Data3( 3,8,2017);
console.log(data3.dia);

//-----> playground: https://www.typescriptlang.org/play?#code/ <-------
"use strict";
var Data = /** @class */ (function () {
    function Data(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
    }
    return Data;
}());
var data = new Data(3, 8, 2017);
console.log(data.dia);
var data2 = new Data(3, 8); //vai utilizar o ano 1970
//-----> OU PODE SER DECLARADO DESTA FORMA: <----
var Data3 = /** @class */ (function () {
    /* exclui : public dia: number;
    private mes: number;
    ano: number;*/
    function Data3(dia, mes, ano) {
        if (ano === void 0) { ano = 1970; }
        this.dia = dia;
        this.mes = mes;
        this.ano = ano;
        /* exclui: this.dia = dia;
        this.mes = mes;
        this.ano = ano;*/
    }
    return Data3;
}());
var data3 = new Data3(3, 8, 2017);
console.log(data3.dia);
//-----> playground: https://www.typescriptlang.org/play?#code/ <-------

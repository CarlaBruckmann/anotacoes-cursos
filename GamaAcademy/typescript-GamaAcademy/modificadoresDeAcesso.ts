//Orientação a objetos
//CLASSES
class Carro {
    private velocidadeAtual: number = 0; //não poderá ser alterado 

    constructor(
        public marca: string,
        public modelo: string,
        private velocidadeMaxima: number = 220 //não poderá ser alterado 
    ) { }

    private alterarVelocidade(delta: number) {
        const novaVelocidade = this.velocidadeAtual + delta;

        if(novaVelocidade >=0 && novaVelocidade <= this.velocidadeMaxima){
            this.velocidadeAtual = novaVelocidade;
        }else{
            this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0
        }
    }

    acelerar() {
        this.alterarVelocidade(5);
    }

    frear() {
        this.alterarVelocidade(-5);
    }
}

const carro = new Carro('chevrolet', 'Prisma', 250)
carro.acelerar();




//HERANÇA - filho
class Camaro extends Carro {
   //vai herdar tudo do pai  -> herdou tudo o que tinha no Carro. 
   private turbo = false; //ganha novos itens
   constructor(){
       super('Chevrolet', 'Camaro', 500);//chamar as classes do  elemento pai -> passar todos os parâmetros exigidos no pai
   }
   ligarTurbo(){
       this.turbo = true;//acessar private
   }
}
const camaro = new Camaro();
camaro.acelerar();
camaro.ligarTurbo();
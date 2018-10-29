
/* description
@param {string} combustivel
@param {string} cor
@param {number} numero de rodas

 */

class Veiculo {
    constructor(combustivel, cor, numeroRodas = 2) {
        this.combustivel = combustivel;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
        this.contaQuilometros = 0;
    }


    andar(distancia) {
        this.contaQuilometros+=distancia;
        this.distancia=distancia;
        
        return "andou";
    }
}


var v1= new Veiculo('gasoleo', 'red', 4);
console.log(v1)
v1.andar();

console.log(v1)


class Automovel extends Veiculo{
constructor(combustivel, cor,numeroAssentos,numeroPortas){
super(combustivel,cor,4);
this.numeroAssentos=numeroAssentos;
this.numeroPortas=numeroPortas;
this.numeroVolantes=1;
this.litrosDeposito=10;
}

tirarCombustive(litros){

this.litrosDeposito=-litros;
}

porCombustivel(litros){
this.litrosDeposito+=litros;
}

andar(distancia=1){
    super.andar(distancia);
    this.litrosDeposito-=distancia;
    return 'Gastou'+distancia+"litros";
}
}
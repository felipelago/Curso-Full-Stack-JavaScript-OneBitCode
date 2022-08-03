class Nave {
    static get desaceleracao (){
        return 0.17 //Valor passado na questão
    }
    constructor(nome, tripulantes){
        this.nome = nome;
        this.tripulantes = tripulantes;
        this.velocidadeAtual = 0;
    }
    acelerar(aceleracao){
        this.velocidadeAtual += aceleracao * (1 - Nave.desaceleracao)
    }
}
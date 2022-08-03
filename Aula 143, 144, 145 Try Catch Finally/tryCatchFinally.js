class Carro {
    constructor(carro) {
        this.carro = carro;
        this.tanque = 5;
    }
    consumo() {
        if (this.tanque > 0) {
            console.log('Carro em movimento')
            this.tanque -= 1;
        } else {
            throw new Error('Tanque do ' + this.carro + ' sem combustível')
        }
    }
    abastecer() {
        this.tanque = 5;
    }
}

let ford = new Carro('Ka');

try {
    ford.consumo();
    ford.consumo();
    ford.consumo();
    ford.consumo();
    ford.consumo();
    ford.consumo();
} catch (e) {
    //só vai entrar no catch caso aconteça o erro
    console.log(e.message); //O catch recebe o erro instanciado pelo throw na variável posta, no caso e, dessa forma pode-se fazer muitas coisas como acessar a mensagem
    //Acessando a mensagem utilizando a varíavel, ponto uma função nátiva do sistema como e.message
    ford.abastecer()
}
finally {
    //o bloco finally irá executar mesmo que não entre no catch
    console.log('Carro andou bem')
}
console.log(ford)
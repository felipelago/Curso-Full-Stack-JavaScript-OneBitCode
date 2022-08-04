console.time('codigo')
class Nave {
    constructor(nome = [], qtdTripulantes) {
        this.nome = nome;
        this.qtdTripulantes = qtdTripulantes;
        this.engatada = false;
        this.portasAbertas = false;
    }
    security() {
        this.engatada = true;
        this.portasAbertas = true;
    }
}

function cadastro() {
    let nomeNave = prompt("Qual o nome da nave ?");
    let tripulates = prompt('Quantos tripulantes tem a nave ?')
    let nave = new Nave(nomeNave, tripulates);
    return nave;
}

function imprimirNaves(nave) {
    let spaceshipList = ""
    nave.forEach((nave, index) => {
        spaceshipList += (index + 1) + "- " + nave.nome +
            " (" + nave.qtdTripulantes + " tripulantes)\n"
    })
    alert(spaceshipList)
}

let listaNaves = [];

function menu() {
    let options
    do {
        options = prompt('Bem vindo, deseja fazer ?\n1- Para cadastrar uma nave\n2- Para Imprimir as naves\n3- Sair do programa')
        switch (options) {
            case '1':
                let adicionadoNaveLista = cadastro()
                adicionadoNaveLista.security();
                listaNaves.push(adicionadoNaveLista)
                break;

            case '2':
                imprimirNaves(listaNaves)
                break;

            case '3':
                break;

            default:
                alert('Opção inválida')
                break;
        }
    } while (options != '3');
}
menu();
console.timeEnd('codigo')
class App {
    constructor() {
        this.nave = null;
    }
    cadastroNaves() {
        let nomeNave = prompt("Qual o nome da nave ?")
        let qtdTripulantes = prompt("Qual a quantidade de tripulantes desta nave ?")
        let tipoDeNave = this.tipoNave()
        if (tipoDeNave == '1') {
            let armasQtd = prompt('Quantas armas esta nave possui ?')
            this.nave = new NaveBatalha(nomeNave, qtdTripulantes, armasQtd)
        } else if (tipoDeNave == '2') {
            let sits = prompt('Quantos assentos tem na nave ?')
            this.nave = new NaveTransporte(nomeNave, qtdTripulantes, sits)
        } else {
            alert('Opção inválida')
        }
    }
    tipoNave() {
        let chosenOption
        while (!['1', '2'].includes(chosenOption)) {
            chosenOption = prompt('Qual o tipo da nave ?\n1- Batalha\n2- Transporte')
        }
        return chosenOption
    }
    menu() {
        const promptMessage = "O que você deseja fazer?\n" +
            "1- Acelerar a nave\n" +
            "2- Trocar a nave\n" +
            "3- Imprimir e sair"
        let chosenOption = prompt(promptMessage)
        while (!["1", "2", "3"].includes(chosenOption)) {
            chosenOption = prompt(promptMessage)
        }
        return chosenOption
    }
}

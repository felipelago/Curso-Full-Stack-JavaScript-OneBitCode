let nave = {
    velocidade: 0,
    aceleracao: function (acelerando) {
        this.velocidade += acelerando;
    }
}

function menu() {
    nave.nome = prompt('Qual o nome da nave ?')
    nave.tipoNave = prompt('Qual o tipo da nave ?')
    nave.velocidadeMaxima = Number(prompt('Qual a velocidade máxima da nave ? (km/s)'))
}

function acelerar() {
    let acelerando = Number(prompt('Quanto você deseja acelerar ? (Km/s)'))
    if (acelerando > 0) {
        nave.aceleracao(acelerando)
    }
    if (nave.velocidade > nave.velocidadeMaxima) {
        alert('Velocidade máxima ultrapassada' + '\nVelocidade da nave: ' + nave.velocidade)
    }
}

function imprimirResultado() {
    alert('Informações atuais da nave:\nNome da nave: ' + nave.nome + '\nTipo da nave:  ' + nave.tipoNave + '\nVelocidade atual: ' +
        nave.velocidade + '\nVelocidade Máxima da nave: ' + nave.velocidadeMaxima)
}

function perguntarVelocidade() {
    let optionVel
    do {
        optionVel = prompt('O deseja fazer ?\n1- Para acelerar a nave\n 2- Para parar a nave')
        switch (optionVel) {
            case '1':
                acelerar();
                break;
            case '2':
                imprimirResultado();
                break;

            default:
                alert('Opção inválida')
                break;
        }
    } while (optionVel != '2');
}

menu();
perguntarVelocidade();


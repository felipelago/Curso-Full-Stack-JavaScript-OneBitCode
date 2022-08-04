import * as moment from './moment.min.js';
    moment = require('./moment.min.js');

let dataPartidaEntrada = prompt("Digite a data de partida (formato DD/MM/YYYY)");

let partida = moment(dataPartidaEntrada, "DD/MM/YYYY"); //Utilizando a biblioteca moment converte a data em forma de string para modo data no formato DD/MM/YYYY

let today = moment(); //Retorna a data de hoje

//Diferença entre a data de hoje e data de partida
let dateDiff = today - dataPartidaEntrada //O javascript transforma em milisegundos, calcula e te da a resposta em milisegundos.

let escolha = prompt('Escola como gostaria de exibir o tempo de partida\n1- Segundos\n2- Minutos\n3- Horas\n4- Dias');

if (escolha == 1) {
    let partidaEmSegundos = Math.round(dateDiff / 1000)
    alert('Tempo de vôo: ' + partidaEmSegundos + ' segundos')
} else if (escolha == 2) {
    let partidaEmMinutos = Math.round(dateDiff / 1000 / 60);
    alert('Tempo de vôo: ' + partidaEmMinutos + ' minutos')
} else if (escolha == 3) {
    let partidaEmHoras = Math.round(dateDiff / 1000 / 3600);
    alert('Tempo de vôo: ' + partidaEmHoras + ' horas')
} else if (escolha == 4) {
    let partidaEmDias = Math.round(dateDiff / 1000 / 3600 / 24);
    alert('Tempo de vôo: ' + partidaEmDias + ' dias')
} else {
    alert('Escolha inválida')
}


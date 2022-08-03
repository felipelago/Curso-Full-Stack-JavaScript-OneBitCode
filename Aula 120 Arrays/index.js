/*
Temos uma array abaixo bidimensional, para cada sub-array, a primeira posição é o nome da nave, a segunda é a quantidade de tripulantes e a terceira informa
 se o processo de engate já foi concluído ou não
Nesta lista, a plataforma de engate que a nave está parada é o [índice da nave array+1]
const hitchedSpaceShips = [
    ['Fenix', 8, true],
    ['Golias', 10, true],
    ['Helmet', 5, false],
    ['Elemental', 3, true],
    ['Darwin', 15, false]
]
Com base nisso faça:
1- Filtrar o nome das naves que tem mais de 9 tripulantes
2- Informar o número da plataforma em que está a primeira nave que ainda está com engate pendente
    Utilize a função findIndex, que é bem parecida com o find, mas retorna o índice de um filtro em vez do elemento do array
3- Destacar o nome de todas as naves colando-as em caixa alta e exibindo
4- Exibir um alerta com todas estas informações
*/

const hitchedSpaceShips = [
    ['Fenix', 8, true],
    ['Golias', 10, true],
    ['Helmet', 5, false],
    ['Elemental', 3, true],
    ['Darwin', 15, false]
]

let tripulacao = hitchedSpaceShips.filter(nave => {
    return nave[1] > 9
//O filter vai filtrar e irá retornar os arrays com mais de 9 tripulantes, então irá retornar da seguinte forma 
/*[
    ['Golias', 10, true]
    ['Darwin', 15, false]
]*/
}).map (nave => {
    return nave [0]
})
/*Após filtrar as arrays com mais de 9 tripulantes o map vai retornar apenas o nome dessas naves, assim completando a primeira questão -> ['Golias', 'Darwin'] */

let plataforma = hitchedSpaceShips.findIndex(nave => {
    return nave[2] == false;
})/* com o findIndex vai retornar o índice do PRIMEIRO elemento que satisfaz a condição, no caso false*/

let nomesDestaque = hitchedSpaceShips.map(nave => {
    return nave[0].toUpperCase();
})
/*Nessa função ele vai retornar todos os nomes das arrays em maiusculo */

let message = 'Espaçonaves com mais de 9 tripulantes: ' + tripulacao.join(', '); //Ele vai pegar as arrays e transformar em uma string separadas por ,
message += '\nPlataforma com processo de engate: ' + (plataforma + 1) //Pois no exercicio diz que o número da plataforma é o indice + 1
message += '\nEspaçonaves destacadas: ' + nomesDestaque.join(', ')
alert (message);

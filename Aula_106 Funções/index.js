let nomeNave = prompt('Qual o nome da nave ?');
let velocidade = 0;
let aceleracao = prompt('Escolha uma das opções abaixo:\n 1- Acelerar a nave em 5km/s\n2- Desacelerar em 5km/s\n3- Mostrar resultados\n4- Sair do programa')


if (aceleracao == 1){
    velocidade +=5;
}
if (aceleracao == 2 && velocidade >0){
    velocidade -=5;
}
if (aceleracao == 3){
    alert ('O nome da nave é: ' + nomeNave + ' com velocidade atual de: ' + velocidade)
}
if (aceleracao == 4){
    
}
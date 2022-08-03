let nomeNave = prompt('Qual o nome da nave ?');
let caracter = prompt('Qual caracter deseja substituir ?')
let novoCaracter = prompt('Por qual caracter deseja substituir ?')
let novoNome = '';

//O for vai popular a variável novoNome letra por letra substituindo apenas a letra selecionada antes.
for (let i = 0; i < nomeNave.length; i++) {
    if(nomeNave[i] == caracter){
        novoNome += novoCaracter
    }else{
        novoNome += nomeNave[i]
    }
}

alert('O novo nome da nave é: ' + novoNome)
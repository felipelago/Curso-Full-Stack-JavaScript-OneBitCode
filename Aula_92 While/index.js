let nomeNave = prompt('Qual o nome da nave ?');
let option = prompt('Deseja entrar na dobra especial ?\n1- Sim\n2- Não')

let dobra = 0;
while (option == '1') {
    dobra += 1;
    option = prompt('Deseja realizar a próxima dobra ?\n1- Sim\n2- Não')
}

alert('A nave: ' + nomeNave + ' realizou ' + dobra + ' dobras')
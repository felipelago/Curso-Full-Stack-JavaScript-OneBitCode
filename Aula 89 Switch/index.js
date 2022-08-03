let anosLuz = prompt("Qual a distância em anos-luz ? ");
let lista = prompt("Escolha o número da opção que deseja:\n1- Parsec(pc)\n2- Unidade astronômica(AU)\n3- Quilômetros(km)");

switch (lista) {
    case '1':
        let Parsec = anosLuz * 0.306601;
        alert('Distância em anos luz: ' + anosLuz + ' em unidade Parsec: ' + Parsec + ' pc');
        break;

    case '2':
        let atronomica = anosLuz * 63241.1;
        alert('Distância em anos luz: ' + anosLuz + ' em unidade astronômica: ' + atronomica + ' AU');
        break;

    case '3':
        let quilometros = anosLuz * 9.5 * Math.pow(10,12);
        alert('Distância em anos luz: ' + anosLuz + ' em unidade Quilômetros: ' + quilometros + ' Km');
        break;

    default:
        alert('Distância em Anos-Luz: ' + anosLuz + ' Unidade não identificada: Conversão fora do escopo');
}

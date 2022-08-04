let cora = {
    nick: 'pedroNoob',
    classe: 'templar',
    ataque: 5000,
    elemental: 5
}

const hdh = (ataque, elemental) => {
    return new Promise(function (resolve, reject) { //o return na promise só é preciso caso queira usar o "then"
        setTimeout(() => { //setTimeout ele vai executar essa função após um contagem em milisegundos como segundo parametro da função, 1000 = 1s
            if (elemental > 0) {
                ataque += ataque * elemental / 100
                console.log(`Ataque com elemental de ${elemental}% Equipado, Ataque: ${ataque}`)
                resolve(ataque)
            } else {
                //console.log("Não tem elemental equipado, você é noob")
                reject("Não tem elemental equipado, você é noob")//Quando utilizado uma Promise e cai no reject ele estoura erro no console
            }
        }, 1000)
    })
}

hdh(cora.ataque, cora.elemental).then((ataque) => {//O then vai executar após a Promise, nesse caso vai imprimir o objeto com a alteração do elemental
    cora.ataque = ataque
    console.log("Char com elemental equipado:\n", cora)
}).catch(e => { //para filtrar o erro, utiliza o catch na chamada dessa função, assim em vez de estourar o erro ele vai salvar no catch
    console.log(`Cora Alliance: ${e}`)
})

//esse é um código assincrono, ele não para de executar mesmo se uma função demorar mais que a outra, então este console log abaixo vai executar primeiro que a função hdh que tem timeout de 1000
console.log("Executando primeiro")
console.log(cora)
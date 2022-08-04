export default class {
    constructor(spaceship) {
        this.spaceship = spaceship;
    }
    ligarNave() {
        this.checkCargaAtual().then((cargaAtual)=> {
            console.log(`${this.spaceship.name}, partida autorizada\nCarga atual em: ${cargaAtual}`)
        }).catch(e => {
            console.log(`${this.spaceship.name}, partida não autorizada\nCarga atual em: ${cargaAtual}`)
        })
    }
    checkCargaAtual() {
        return new Promise((resolve, reject) => {
            let cargaAtual = this.spaceship.percentCarga()
            if (cargaAtual >= 30) {
                resolve(cargaAtual);
            } else {
                reject(cargaAtual);
            }
        })
    }
}
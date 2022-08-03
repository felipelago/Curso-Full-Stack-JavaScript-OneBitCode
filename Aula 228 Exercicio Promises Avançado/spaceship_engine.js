export default class {
    constructor(spaceship) {
        this.spaceship = spaceship;
    }
    ligarNave() {
        let checkingCargaAtual = this.checkCargaAtual()
        let shieldChecking = this.testShield()
        Promise.all([checkingCargaAtual, shieldChecking]).then(results => {
           return this.shieldNormalizer(results[1])
        }).then(newShield => {
            this.spaceship.shield = newShield;
            console.log(`${this.spaceship.name} Partida autorizada: escudo ${this.spaceship.shield}`)
        }).catch((error) => {
            console.log(`${this.spaceship.name}, partida não autorizada\nCarga atual em: ${error}`)
        })
    }
    checkCargaAtual() {
        return new Promise((resolve, reject) => {
            let cargaAtual = this.spaceship.percentCarga()
            if (cargaAtual >= 30) {
                resolve(cargaAtual);
            } else {
                reject(`Carga em apenas ${cargaAtual}GJ`);
            }
        })
    }
    testShield() {
        return new Promise((resolve, reject) => {
            let doubledShield = this.spaceship.shield * 2
            if (doubledShield >= 100) {
                resolve(doubledShield);
            } else {
                reject("Escudo em sobrecarga")
            }
        })
    }
    shieldNormalizer(shield) {
        return new Promise((resolve, reject) => {
            let normalizedShield = shield * 0.7
            if (normalizedShield >= 120) {
                reject("Escudo em sobrecarga")
            } else {
                resolve(normalizedShield)
            }
        })
    }
}
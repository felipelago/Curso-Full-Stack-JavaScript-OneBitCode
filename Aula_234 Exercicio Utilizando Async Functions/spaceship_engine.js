export default class {
    constructor(spaceship) {
        this.spaceship = spaceship;
    }
    async ligarNave() {
        try {
            let checkingCargaAtual = this.checkCargaAtual()
            let shieldChecking = this.testShield()
            let results = await Promise.all([checkingCargaAtual, shieldChecking])//vai esperar as duas promises executar
            this.spaceship.shield = await this.shieldNormalizer(results[1]) //vai esperar a async function shieldNormalizer executar e salvar o retorno em shield
            console.log(`${this.spaceship.name} Partida autorizada: escudo ${this.spaceship.shield}`)
        } catch (error) {
            console.log(`${this.spaceship.name}, partida não autorizada\nCarga atual em: ${error}`)
        }
    }
    async checkCargaAtual() {
        let cargaAtual = this.spaceship.percentCarga()
        if (cargaAtual < 30) {
            return Promise.reject(`Carga em apenas ${cargaAtual}GJ`);
        }
        return cargaAtual;
    }
    async testShield() {
        let doubledShield = this.spaceship.shield * 2
        if (doubledShield < 100) {
            return Promise.reject("Escudo em sobrecarga")
        }
        return doubledShield
    }
    async shieldNormalizer(shield) {
        let normalizedShield = shield * 0.7
        if (normalizedShield >= 120) {
            return Promise.reject("Escudo em sobrecarga")
        }
        return normalizedShield
    }
}
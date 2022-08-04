class SpaceShip {
    constructor(name, capacidadeMax, cargaAtual, shield) {
        this.name = name;
        this.capacidadeMax = capacidadeMax;
        this.cargaAtual = cargaAtual;
        this.shield = shield;
    }
    percentCarga() {
        return this.cargaAtual * 100 / this.capacidadeMax;

    }
}

export default SpaceShip;

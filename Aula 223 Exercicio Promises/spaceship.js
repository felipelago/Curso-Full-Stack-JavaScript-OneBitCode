class SpaceShip {
    constructor(name, capacidadeMax, cargaAtual) {
        this.name = name;
        this.capacidadeMax = capacidadeMax;
        this.cargaAtual = cargaAtual;
    }
    percentCarga() {
        return this.cargaAtual * 100 / this.capacidadeMax;

    }
}

export default SpaceShip;

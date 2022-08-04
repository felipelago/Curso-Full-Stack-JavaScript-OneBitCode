import SpaceShip from './SpaceShip'
import SpaceShipEngine from './spaceship_engine'

const sophia = new SpaceShip("Sophia", 10, 5)
const amsterda = new SpaceShip("Amesterdã", 14, 10)
const dwarfStart = new SpaceShip("Estrela-Anã", 20, 4)

const sophiaEngine = new SpaceShipEngine(sophia)
const amsterdaEnegine = new SpaceShipEngine(amsterda)
const dwarfStartEngine = new SpaceShipEngine(dwarfStart)

sophiaEngine.ligarNave()
amsterdaEnegine.ligarNave()
dwarfStartEngine.ligarNave()

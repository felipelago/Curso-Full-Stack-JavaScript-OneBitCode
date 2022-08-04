import Spaceship from "./spaceship";
import Armaments from "./armaments";
import {laserDefenses, steelDefenses} from "./defenses"; //Para importar coisas especificas precisa usar chaves e utilizar o mesmo nome da variável ou função
import basicDefense from "./defenses"

const spaceship = new Spaceship("Uss", "James", Armaments.laser, laserDefenses)
console.log (spaceship)

const basicSpaceShip = new Spaceship("Basica", "Hel", Armaments.laser, basicDefense)
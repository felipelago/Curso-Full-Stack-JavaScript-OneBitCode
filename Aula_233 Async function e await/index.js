import "core-js"
import "regenerator-runtime/runtime"

let laserGun = {
  shotsPerSecond: 30,
  currentPosition: [30, 45, 70],
  firing: false
}

async function adjustPosition(x, y, z) {
  if(z > 90) {
    return Promise.reject("Angulo Z inválido para arma")
  }
  laserGun.currentPosition = [x, y, z]
  return [x, y, z]
}

async function fire(x, y, z) {
  laserGun.firing = true
  return [x, y, z]
}

function loadAmmo(){
  return new Promise((resolve)=> {
    setTimeout(() => {
      resolve("Arma carregada")
    },2000)
  })
}

async function moveAndFire(x, y, z) {
  try {
    const adjustPositionPromise = adjustPosition(x, y, z)
    const loadAmmoPromise = loadAmmo()
    let promiseResult = await Promise.all([adjustPositionPromise,loadAmmoPromise]) // promise em modo atomico, só vai passar caso as duas promises deem OK, o await vai receber o retorno de ambas as Funções
    //O await vai fazer com que o código espere as promises executar para dar continuidade ao código
    let newCoordinates = promiseResult[0]
    console.log(`Arma ajustada para as coordenadas (${newCoordinates[0]}, ${newCoordinates[1]}, ${newCoordinates[2]})`)
    let fireCoord = await fire(...newCoordinates)
    console.log(`Começando a atirar nas coordenadas (${fireCoord[0]}, ${fireCoord[1]}, ${fireCoord[2]})`)
  } catch(error) {
    console.log(error)
  }
}

moveAndFire(20, 40, 90)

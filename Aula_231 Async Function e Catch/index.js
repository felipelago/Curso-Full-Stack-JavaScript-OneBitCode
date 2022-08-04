import "core-js"
import "regenerator-runtime/runtime"

let laserGun = {
    shotsPerSecond: 30,
    currentPosition: [30, 45, 70],
    firing: false
}

async function adjustPosition(x, y, z) {
    if (z > 90) {
        return Promise.reject("Angulo Z inválido para arma")//Quando utilizado async function essa é a forma de utilizar o reject
    }
    laserGun.currentPosition = [x, y, z]
    return [x, y, z] //o retorno da função já é o "resolve"
}

async function fire(x, y, z) { //async function é o mesmo de declarar uma promise, exemplo abaixo
    laserGun.firing = true
    return [x, y, z]
}
// function fire(x, y, z) { //Usando async function é o mesmo que fazer dessa forma
//     return new Promise(resolve => {
//       laserGun.firing = true
//       resolve([x, y, z])
//     })
//   }

function moveAndFire(x, y, z) {
    adjustPosition(x, y, z).then(coord => {
        console.log(`Arma ajustada para as coordenadas (${coord[0]}, ${coord[1]}, ${coord[2]})`)
        return fire(...coord)
    }).then(coord => {
        console.log(`Começando a atirar nas coordenadas (${coord[0]}, ${coord[1]}, ${coord[2]})`)
    }).catch(error => {
        console.log(error) //ele vai imprimir o erro do reject
    })
}

moveAndFire(20, 40, 10)
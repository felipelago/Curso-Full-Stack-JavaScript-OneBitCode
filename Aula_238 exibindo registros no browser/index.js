// import "core-js"
// import "regenerator-runtime/runtime"

import Neo from "./neo.js"
import { getNeos } from "./neo_service.js"

async function loadNeos() {
    let neos = []
    let neosJSON = await getNeos() //Utilizando await pois a função getNeos é async e também só interessa o retorno da função
    neosJSON.forEach((neo) => {
        const minDiameter = neo["estimated_diameter"]["kilometers"]["estimated_diameter_min"]
        const maxDiameter = neo["estimated_diameter"]["kilometers"]["estimated_diameter_max"]
        const averageDiameter = (minDiameter - maxDiameter) / 2
        const newNeo = new Neo(neo["id"], neo["name"], averageDiameter, neo["is_sentry_object"])
        neos.push(newNeo)
    })
    console.log(neos)
    renderNEO(neos)
}
loadNeos()

function renderNEO(neos) {
    const ulElement = document.getElementById("neos-list")
    neos.forEach((neo) => {
        const liElement = document.createElement("li")
        const isSentry = neo.isSentry ? "Perigo de colisão" : "Sem perigo de colisão"
        const text = `${neo.id} | ${neo.name} | ${neo.averageEstimatedDiameter} | ${isSentry}`
        liElement.innerText = text
        ulElement.appendChild(liElement)
    })
}
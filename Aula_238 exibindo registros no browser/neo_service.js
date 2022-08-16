export async function getNeos() {
    const response = await fetch("https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=DEMO_KEY")
    const result = await response.json(); //aqui está recebendo o retorno da API e convertendo para JSON, await na frente é pelo fato de estar lidando com uma promise
    return result["near_earth_objects"] //near_earth_objects é uma parte do retorno da API onde tem as informações dos objetos que estão próximos da terra (informação que queremos do retorno dessa API)
}

//o fetch retorna uma promise, com o await ele pega direto o retorno da promise, então vai retornar um objeto fetch
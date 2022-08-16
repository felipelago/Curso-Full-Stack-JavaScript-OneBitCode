export async function getSentry() {
    const response = await fetch("https://api.nasa.gov/neo/rest/v1/neo/sentry?api_key=DEMO_KEY")
    const result = await response.json();
    return result["sentry_objects"] //sentry objects é uma parte do retorno da API, como a API retorna muitas informações, nesse caso está filtrando para retornar
    //somente os resultados de sentry_objects, por exemplo, se eu quisesse retornar só os nomes eu utilizaria sentry_names (Exemplo)
}
function doChange(){
    alert(event.target.value)
}
let sampleInput = document.querySelector("input[name='sample-input']")
sampleInput.addEventListener("change", doChange)//Não precisa colocar () na função pois você passa como parametro o objeto da função

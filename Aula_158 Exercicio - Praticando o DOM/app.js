class App {
    addProperty() {
        event.preventDefault();
        let tipo = document.querySelector("select[name='tipo']").value
        let area = document.querySelector("input[name='area']").value
        let alugado = document.querySelector("input[name='alugado']").checked
        let property = new Property(tipo, area, alugado)
        this.addOnPropertiesList(property)
        this.cleanForm()
    }

    addOnPropertiesList(property) {
        let listElement = document.createElement("li")
        let propertyInfo = " Tipo: " + property.tipo + " (Área: " + property.area + "m²) "
        if (property.alugado) {
            let alugadoMark = this.createRentedMark()
            listElement.appendChild(alugadoMark)
        }
        listElement.innerHTML += propertyInfo;
        let buttonToRemove = this.createRemoveButton();
        listElement.appendChild(buttonToRemove)
        document.getElementById("properties").appendChild(listElement)
    }
    createRentedMark() {
        let alugadoMark = document.createElement("span")
        alugadoMark.style.color = "white"
        alugadoMark.style.backgroundColor = "red"
        alugadoMark.innerHTML = "ALUGADO"
        return alugadoMark;
    }
    createRemoveButton() {
        let buttonToRemove = document.createElement("button")
        buttonToRemove.setAttribute("onclick", "app.remove()")
        buttonToRemove.innerText = "Remover"
        return buttonToRemove;
    }
    cleanForm() {
        document.querySelector("input[name='area']").value = ""
        document.querySelector("input[name='alugado']").checked = false
    }
    remove() {
        let liToRemove = event.target.parentNode
        document.getElementById("properties").removeChild(liToRemove)
    }
}
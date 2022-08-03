function adicionar() {
    let area = document.querySelector("input[name='area']").value;
    let cidade = document.querySelector("input[name='city']").value;
    let bairro = document.querySelector("input[name='bairro']").value;
    let numero = document.querySelector("input[name='numero-casa']").value;

    let newListValue = document.createElement("li") //creatElement vai criar um novo objeto do DOM ->li é linha na lista
    newListValue.innerText = "Área da casa: " + area + "m², " + "Cidade: " + cidade + ", Bairro: " + bairro + ", número: " + numero + " ";

    //Essas linhas do removeButton é o mesmo que criar uma tag no html de um botão com seus atributos e texto, mas nesse caso está sendo criado dinamicamente aqui pelo JS
    let removeButton = document.createElement("button")
    removeButton.type = "button"
    removeButton.innerText = "Remover"
    removeButton.setAttribute("onclick", "removeHouse(this)")

    newListValue.appendChild(removeButton)//Adicionando um novo filho que é o botão de remover

    //adicionando na árvore do DOM, a tag com id lista vai receber o elemento newListValue com todas as informações e o botão de remover que já foi adicionado na linha anterior
    document.getElementById("lista").appendChild(newListValue)
}

function removeHouse(button) {
    let linhaParaRemover = button.parentNode //Apartir do botão está buscando o "pai" que no caso é a linha inteira (li)
    document.getElementById("lista").removeChild(linhaParaRemover)

}
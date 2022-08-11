function showInfo() {
    let name = document.querySelector("input[name='name']").value
    let favoriteColor = document.querySelector("select[name='color'] option:checked").text
    //option:checked vai pegar a opção que foi marcada ou está marcada, no fim .text é parar pegar o texto dentro da tag (amarelo, azul...)

    let likeProgram = document.querySelector("input[name='like-programming']:checked").value
    let developerOptions = document.querySelectorAll("input[name='developer-options']:checked") //Como é uma check box e pode ter mais de 1 selecionado, é preciso usar o querySelectorAll, onde vai retornar todos
    let optionsValue = [];
    developerOptions.forEach((element) => {
        optionsValue.push(element.value)//Vai percorrer a variável e salvar na array todos os valores dos elementos contidos em developerOptions (vai pegar o valor de cada checkbox que foi checado)
    })
    let optionsChecked = optionsValue.join(", ") //Para pegar a informação como texto é utilizado o join, separando as informações por virgula
    alert("Nome: " + name + "\nCor primária: " + favoriteColor + "\nGosta de programar ? " + likeProgram + "\nConhecimentos em programação web: " + optionsChecked)
}
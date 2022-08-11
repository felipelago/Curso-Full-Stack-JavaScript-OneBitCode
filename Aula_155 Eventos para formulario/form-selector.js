function save() {
    event.preventDefault();//Previne do código fazer seu comportamento padrão do submit no qual ele recarrega a página ao fazer submit, então não mostraria o alert
    let name = document.querySelector("input[name='name']")
    let programming = document.querySelector("select[name='programming-lang']").value//utilizar .value no final seria o mesmo que utilizar option:checked, ele vai pegar o valor das opções marcadas
    alert("Nome: " + name + "\nLinguagem de programação: " + programming)
}
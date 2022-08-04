function show(){
    let element = document.getElementById("name")//Retorna a lista de elementos igual ao id definido
    console.log(element)
}
function show2(){
    let element = document.getElementsByTagName("input")//Vai retornar todos os elementos do tipo input
    console.log(element)
}
function show3(){
    let element = document.getElementsByName("phone")//Vai retornar todos os elementos que estiverem com a tag name "phone"
    console.log(element)
}
function show4(){
    let element = document.querySelectorAll("div#phones input[name= 'phone']")//Ele vai pegar todos os campos input com o nome phone que estão DENTRO da div de ID phones
    console.log(element)
}
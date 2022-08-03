function setBlueBackground() {
    let element = document.getElementById("style-text")
    element.style.backgroundColor = "blue"
}

function setTransparentBackground(){
    document.getElementById("style-text").style.backgroundColor = "transparent"
    //Faz o mesmo que a função acima mas tudo em uma linha só
}

function setRedColor(){
    let element = getElementById("style-text")
    element.ClassList.add("red-color")
}

function removeRedColor(){
    document.getElementById("style-text").classList.remove("red-color")
}
function addNewPhone() {
    const phoneForm = document.querySelector('form#phones') //A diferença deste para o querySelectorAll, é que este seleciona somente o primeiro elemento
    const newPhone = phoneForm.children[0].cloneNode(true)//função cloneNode é do JS onde vai clonar todos os filhos por ser true, ou seja clone deep
    const phonePosition = phoneForm.children.length + 1;
    newPhone.querySelector("label").innerText = "Telefone " + phonePosition + ": "
    phoneForm.appendChild(newPhone) //O appendChild acrescenta ao elemento selecionado o que for declarado na sequência entre parênteses.
    console.log(phoneForm.children)
}

function printNewPhone() {
    let message = '';
    const phones = document.querySelectorAll("input[name ='phone']") //Vai selecionar todos os inputs com name phone
    phones.forEach((phone,index)=> {
        message += "Telefone " + (index+1) + ": " + phone.value + "\n";
    })
    alert(message)
}
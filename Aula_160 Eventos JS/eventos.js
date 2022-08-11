document.querySelector("select[name='select-option']").addEventListener("change", function () {
    alert(event.target.value)
})
//o método addEventListener vai mapear o evento do meu select para uma função
//o primeiro parametro do eventlistener é o nome do evento e o segundo parametro é a função que queira executar
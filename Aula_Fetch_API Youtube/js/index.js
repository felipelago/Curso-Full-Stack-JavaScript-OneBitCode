const url = "https://jsonplaceholder.typicode.com/posts"

const loadingElement = document.querySelector("#loading")
const postsContainer = document.querySelector("#posts-container")

const postPage = document.querySelector("#post")
const postContainer = document.querySelector("#post-container")
const commentsContainer = document.querySelector("#comments-container")

//Get id from URL
const urlSearchParams = new URLSearchParams(window.location.search)
const postId = urlSearchParams.get("id")

//Get all posts
async function getAllPosts() {
    const response = await fetch(url)
    const result = await response.json()
    console.log(result)
    loadingElement.classList.add("hide") //vai esconder o "carregando" após receber os dados
    result.map((post) => {
        const div = document.createElement("div")
        const tittle = document.createElement("h2")
        const body = document.createElement("p")
        const link = document.createElement("a")

        tittle.innerText = post.tittle //tittle é uma das propriedades do retorno da API
        body.innerText = post.body
        link.innerText = "Ler"
        link.setAttribute("href", `/post.html?id=${post.id}`)

        div.appendChild(tittle)
        div.appendChild(body)
        div.appendChild(link)

        postsContainer.appendChild(div)
    })
}

//Get individual post
async function getPost(id) {
    const [responsePost, responseComments] = await Promise.all([ //Vai executar os dois requests ao mesmo tempo para melhorar a performance do código
        fetch(`${url}/${id}`),
        fetch(`${url}/${id}/comments`)
    ])

    const dataPost = await responsePost.json()
    const dataComments = await responseComments.json()

    loadingElement.classList.add("hide")//Isso vai fazer com que seja adicionado a classe hide neste elemento, ou seja, o loading vai sumir após o carregamento
    postPage.classList.remove("hide")
}

if (!postId) {
    getAllPosts()
} else {
    getPost(postId)
}

let nomeVetor = []

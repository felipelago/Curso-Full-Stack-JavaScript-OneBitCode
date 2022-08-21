const url = "https://jsonplaceholder.typicode.com/posts"

//tags index html
const loadingElement = document.querySelector("#loading")
const postsContainer = document.querySelector("#posts-container")

//tags post html
const postPage = document.querySelector("#post")
const postContainer = document.querySelector("#post-container")
const commentsContainer = document.querySelector("#comments-container")
const commentForm = document.querySelector("#comment-form")
const emailInput = document.querySelector("#email")
const bodyInput = document.querySelector("#body")

//Get id from URL
const urlSearchParams = new URLSearchParams(window.location.search)
const postId = urlSearchParams.get("id") //vai pegar o ID da api e salvar em postId

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

        tittle.innerText = post.tittle
        body.innerText = post.body
        link.innerText = "Ler"
        link.setAttribute("href",`http://localhost:5500/Aula_Fetch_API%20Youtube/post.html?id=${post.id}`)//atributo para entrar em um topico do blog de acordo com a id

        div.appendChild(tittle)
        div.appendChild(body)
        div.appendChild(link)

        postsContainer.appendChild(div)
    })
}

//Post a comment
async function postComment(comment) {
    const response = await fetch(`${url}/${postId}/comments`, { //o segundo parametro do fetch permite configurar totalmente a requisição sendo POST PATCH DELETE GET
        method: "POST",
        body: comment,//dados que vão na requisição
        headers:{
            "Content-type": "application/json"
        }
    })
    const data = await response.json()
    createComment(data)
}

//Get individual post
async function getPost(id) {
    console.log(url)
    const [responsePost, responseComments] = await Promise.all([ //Vai executar os dois requests ao mesmo tempo para melhorar a performance do código
        fetch(`${url}/${id}`),
        fetch(`${url}/${id}/comments`)
    ])

    const dataPost = await responsePost.json()
    const dataComments = await responseComments.json()

    loadingElement.classList.add("hide")//Isso vai fazer com que seja adicionado a classe hide neste elemento, ou seja, o loading vai sumir após o carregamento
    postPage.classList.remove("hide")//Para aparecer o conteudo -> remove o hide

    const title = document.createElement("h1")
    const body = document.createElement("p")

    title.innerText = dataPost.title;
    body.innerText = dataComments.body;

    postContainer.appendChild(title);
    postContainer.appendChild(body)

    console.log(dataComments)

    dataComments.map((comment) => {
        createComment(comment)
    })
}

function createComment(comment) {

    const div = document.createElement("div")
    const email = document.createElement("h3")
    const commentBody = document.createElement("p")

    email.innerText = comment.email
    commentBody.innerText = comment.body

    div.appendChild(email)
    div.appendChild(commentBody)

    commentsContainer.appendChild(div)
    //Montei uma div com os dados do comentário e no fim insiro essa div no container de comentários

}

if (!postId) {
    getAllPosts()
} else {
    getPost(postId)

    //add event to comment form
    commentForm.addEventListener("submit", (e) => {
        e.preventDefault()//impede que ocorra o submit default

        let comment = {
            email: emailInput.value,
            body: bodyInput.value
        }
        comment = JSON.stringify(comment)//isso retorna o texto em formato JSON válido

        postComment(comment)//Essa função vai ser responsável pela requisição assincrona que vai inserir um comentário no sistema
    })
}

//Link repositório do criador do tutorial: https://github.com/matheusbattisti/fetch_api_tutorial/blob/main/js/scripts.js
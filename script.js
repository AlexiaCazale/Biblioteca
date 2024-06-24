// fetch("livros.json").then((response) => {

//     response.json().then((infos) => {

//         exibirLivros(infos)

//     })

// })

let id = 0
let livro;

document.addEventListener("DOMContentLoaded", () => {

    let page = window.location.href

    let domain = 'localhost'
    let url = `http://${domain}/Biblioteca`
    if (page == 'http://localhost/Biblioteca/' || page == 'http://localhost/Biblioteca') {
        fetch("livros.json").then((response) => {

            response.json().then((infos) => {
                exibirLivros(infos)


            })

        })

    }
    else if (page == 'http://localhost/Biblioteca/livro.html/' || page == 'http://localhost/Biblioteca/livro.html') {

        fetch("livros.json").then((response) => {

            response.json().then((infos) => {

                consultarLivro()

            })

        })

    }

})


function exibirLivros(infos) {

    sessionStorage.setItem('id', ``)
    sessionStorage.setItem('titulo', ``)
    sessionStorage.setItem('categoria', ``)
    sessionStorage.setItem('desc', ``)
    sessionStorage.setItem('autor', ``)
    sessionStorage.setItem('capa', ``)

    infos.biblioteca.forEach((info) => {

        id = id + 1

        // console.log(info)

        let div = document.getElementById('livraria')
        let image = document.createElement('img')

        image.src = info.Capa
        image.className = 'box'
        image.id = id
        image.style.boxShadow = '5px 10px 5px 10px rgba(0, 0, 0, 0.717 )';

        //let image = document.body.innerHTML += `<img src = '${info.Capa}' id = '${id}'>`;

        let a = document.createElement('a')

        a.setAttribute("href", "livro.html")
        //image.setAttribute('onclick', `consultarLivro(${image.id})`)
        image.setAttribute('onclick', `idLivro(${info.Id}, '${info.Título}', '${info.Categoria}', '${info.Descrição}', '${info.Autor}', '${info.Capa}')`)

        console.log(info.Título)

        a.appendChild(image)
        div.appendChild(a)

    })
}

function idLivro(id, titulo, categoria, desc, autor, capa) {
    sessionStorage.setItem('id', `${id}`)
    sessionStorage.setItem('titulo', `${titulo}`)
    sessionStorage.setItem('categoria', `${categoria}`)
    sessionStorage.setItem('desc', `${desc}`)
    sessionStorage.setItem('autor', `${autor}`)
    sessionStorage.setItem('capa', `${capa}`)

}


function consultarLivro(infos) {
    
    console.log(sessionStorage.length)
    console.log(sessionStorage)
    // console.log(infos)

    let id = sessionStorage.getItem('id')
    let titulo = sessionStorage.getItem('titulo')
    let categoria = sessionStorage.getItem('categoria')
    let desc = sessionStorage.getItem('desc')
    let autor = sessionStorage.getItem('autor')
    let capa = sessionStorage.getItem('capa')
    
    console.log(titulo)
    document.getElementById('titulo').innerText = titulo

    document.getElementById('categoria').innerText = categoria
    document.getElementById('desc').innerText = desc
    document.getElementById('autor').innerText = autor
    document.getElementById('capa').src = capa

}

function voltar(){
    let voltar = document.getElementById('voltar')
    voltar = history.back()
}
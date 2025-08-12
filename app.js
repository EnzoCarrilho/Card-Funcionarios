'use strict'

import funcionarios from "./funcionarios.json" with {type: "json"}

const container = document.getElementById('container')

function criarCard(funcionario){
    const div = document.createElement('div')
    const imagem = document.createElement('img')
    const nome = document.createElement('h2')
    const cargo = document.createElement('p')

    imagem.src = `./img/${funcionario.imagem}`
    nome.textContent = funcionario.nome
    cargo.textContent = funcionario.cargo

    container.appendChild(div)
    div.appendChild(imagem)
    div.append(nome)
    div.append(cargo)

    
}

function carregarCards(){
    funcionarios.forEach(criarCard)
}

carregarCards()
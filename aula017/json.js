const pessoa = {
    nome: 'samuel',
    idade: '40',
    sexo: 'M',
    profissao: 'front-end'
}

// Conversao...
let p = JSON.stringify([pessoa.sexo, pessoa.nome, pessoa.idade])

let txtTexto = document.getElementById('texto')
let txtTexto2 = document.getElementById('textodois')

txtTexto.innerHTML = p

let p2 = JSON.parse(p)

console.log(pessoa)
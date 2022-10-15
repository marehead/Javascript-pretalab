let nome = "Nath"

fetch('https://cep.awesomeapi.com.br/02226010').then(resposta => resposta.json()).then(dados => console.log(dados.address_name))

console.log(nome)

function qualquer () {
    return 2
}

console.log(qualquer())

const curso = 'Pretalab'

const alunas = [
	{
  	nome: 'Nath',
    nota: 5.5
  },
  {
  	nome: 'Joyce',
    nota: 9,
    cidade: 'Rio de Janeiro'
  },
  {
  	nome: 'Vera',
    nota: 9,
    curso: 'Pretalab'
  },
  {
    nome: 'Lary',
    nome: 7,
    curso: 'S.I'
  }

]

function Alunas(notas) {
    if (notas >= 9 && notas <= 10) {
        console.log('Aprovada')
    } else if (notas >= 2 && notas <= 6) {
        console.log('Em recuperação')
    } else {
        console.log('Reprovada')
    }
}

console.log(alunas[0],[1],[2].nota)
console.log(alunas[0].nota) // nota inferior a 7  
console.log(alunas[1],[2].nota) //notas superior a 7 


alunas.filter((aluna) => {
    if (aluna.nota >= 7) {
        console.log(aluna.nome + 'Aprovada')
    } else {
        console.log(aluna.nome + 'Reprovado')
    }
    })





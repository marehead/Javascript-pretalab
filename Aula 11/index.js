function votar(idade) {

    if (idade >= 18 && idade < 70) {
        console.log('Voce deve votar e o voto é obrigatorio')
    } else if (idade >= 16 && idade < 18 || idade >= 70) {
        console.log('Voce pode votar, mas nao é obrigatorio')
    } else {
        console.log('Voce nao pode votar')
    }
}

votar(15)
votar(18)
votar(21)
votar(70)




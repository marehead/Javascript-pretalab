function escreverMensagem() {
    const textoDigitado = document.getElementById('nome').value

    document.getElementById('mensagem').innerHTML = textoDigitado
    const bemvinda = document.getElementById('bemvinda').innerHTML
    console.log(bemvinda)
    if (bemvinda.split(':')[1].length > 1) {
        console.log(bemvinda.split(':'))
        document.getElelmentById('bemvinda').innerHTML = `Bem vinda`
    } else {
        document.getElelementById('bemvinda').innerHTML += textoDigitado
    }
}
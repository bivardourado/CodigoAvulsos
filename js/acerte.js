var segredo = Math.round(Math.random() * 10)
var input = document.querySelector('input')

function verificado() {
    if (input.value == segredo) {
        alert('Acertou, muito bem!')
    } else {
        alert(' Xiii voce ERROU, KKKK! vai tentando até acertar, kkk')
    }
    input.value = ' '
    input.focus()
}

var button = document.querySelector('button')
button.onclick = verificado
document.write(
    '<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br'
)
document.write('<footer>Meu portifolio - Versão 0.002</footer>')
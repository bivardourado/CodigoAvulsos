var cadastreLogin = prompt('Cadastre seu login')
var cadastreSenha = prompt('Cadastre sua senha')

var loginCadastrado = cadastreLogin
var senhaCadastrada = cadastreSenha

maximoTentativas = 3
numeroTentativas = 1

while (numeroTentativas <= maximoTentativas) {
    var loginInformado = prompt('Informe seu login')
    var senhainformada = prompt('Informe sua senha')

    if (loginCadastrado == loginInformado && senhaCadastrada == senhainformada) {
        alert('Bem-vindo ao sistema ' + ' ' + loginInformado)
        document.write(' <h1>Olá jovem!</h1>')
        document.write(
            '<h3>Se voce chegou até aqui lhe agradeço. <p align=”Justify”>Quero aproveitar e reinterar meus agradecimentos a <a href="https://www.alura.com.br">Alura </a> e a <a href="https://www.oracle.com">Oracle</a> pela oportunidade de participar do fantástico curso  One Next Education. <p align=”Justify”> Com base nas aulas fiz um código de login, deu pra perceber, né ? kkk. Em breve teremos mais, MUITO MAIS!! </h3>'
        )
        document.write(
            '<h5> Voce gostou? Gostou mesmo? <p> Prove! Envia um pix pra mim, kkk , o pix é bivardourado@gmail.com. Vai aparecer o nome Jailde , que é minha esposa.</h5>'
        )
        document.write('Vamos continuar?')
        maximoTentativas = numeroTentativas
    } else {
        if (numeroTentativas == 3)
            alert(
                'ACESSO BLOQUEDO!! VOCE EXCEDEU O NUMERO DE TENTATIVAS!! Cadastre novos login e senha'
            )
        else {
            alert('Login inválido. Tente novamente')
        }
    }

    numeroTentativas = numeroTentativas + 1
    document.write('<br><br> ')
}
console.log("welcome the game\n")

//NICK DE USUARIO
console.log("Informe o NickName")
let nick = nickName("adalberto")
console.log("Nick " + nick)

let result = matchGame(80, 2)

//FUNÇÃO MAIN
function matchGame(win, loss) {

    let match = win + loss;

    let percent = porcentagem(win, match)
    console.log("Win: " + win + "\nLoss: " + loss + "\nPorcent: " + percent.toFixed(2) + "% de Vitória")

    let resto = diferencaVitoria(win, loss)

    return match

}

//DEFINIÇÃO DE RANK 
function diferencaVitoria(win, loss) {

    let diferenca = win - loss

    if (diferenca <= 10) {

        console.log("Rank Ferro")
    } else if (diferenca > 10 && diferenca <= 20) {
        console.log("Rank Bronze")
    } else if (diferenca > 20 && diferenca <= 50) {
        console.log("Rank Ouro")
    } else if (diferenca > 50 && diferenca <= 80) {
        console.log("Rank Esmeralda")
    } else if (diferenca > 80 && diferenca <= 90) {
        console.log("Rank Diamante")
    } else {
        console.log("Rank Imortal")
    }

    return diferenca

}

//PORCENTAGEM DO USUARIO
function porcentagem(win, match) {

    let percentOfGame = (win / match) * 100;

    return percentOfGame

}
//FUNÇÃO USER
function nickName(name) {

    let user = name;
    return user
}

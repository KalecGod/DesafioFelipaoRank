console.log("welcome the game\n")




let result = matchGame(10 , 13)

console.log(result)


function matchGame(win,loss){

    let match = win + loss;
   
   let percent = porcentagem (win , match)
        console.log("Win: "+win+"\nLoss: "+loss+"\nPorcent: "+percent.toFixed(2)+"%" )
   
        return match



}
function porcentagem(win , match){

    let percentOfGame = (win / match)*100;

    return percentOfGame

}

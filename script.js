const availabaleChoices=["rock","scissors","paper"];
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
   
    return availabaleChoices[computerChoice];
}
function playerSelection(playerChoice,computerChoice){
    let playerIndex = transferPlayerChoiceToIndex(playerChoice);
    let computerIndex = transferPlayerChoiceToIndex(computerChoice);
    if(playerIndex == computerIndex) return "draw";
    if(playerIndex == 2 || computerIndex == 2){
        if(computerIndex == 2) {
            if(playerIndex == 1) return "player win ";
            if(playerIndex == 0) return "computer win";
        }
        if(playerIndex == 2){
            if(computerIndex == 1) return "computer win";
            if(computerIndex == 0) return "player win";
        }


    }
    else {
        if(playerIndex < computerIndex)
            return "player win ";
        else return "computer win";
    }
}
function transferPlayerChoiceToIndex(stringChoice){
    for(let i=0;i<availabaleChoices.length;i++){
        if(availabaleChoices[i]==stringChoice.toLowerCase()){
            return i ;
        }
    }
}
function playGame(){
    let playerChoice;
    let computerChoice;
    for(let i = 0;i<5;i++){
        playerChoice = prompt("enter your choice ?");
        computerChoice = getComputerChoice();
        console.log(playerChoice);
        console.log(computerChoice);
        console.log(playerSelection(playerChoice,computerChoice));
    }
}
playGame();
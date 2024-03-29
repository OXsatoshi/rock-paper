const availabaleChoices=["rock","scissors","paper"];
//the first index is the score of player 
//seconde index is the score of computer
const score = [0,0];
function getComputerChoice(){
    let computerChoice = Math.floor(Math.random()*3);
   
    return availabaleChoices[computerChoice];
}
//this function return 1 when player win 
//return 2 when computer win 
//return 0 if Draw
function playRound(playerChoice){
    const computerChoice = getComputerChoice();
    console.log(computerChoice);
    let playerIndex = transferPlayerChoiceToIndex(playerChoice);
    let computerIndex = transferPlayerChoiceToIndex(computerChoice);
    if(playerIndex == computerIndex) return 0;
    if(playerIndex == 2 || computerIndex == 2){
        if(computerIndex == 2) {
            if(playerIndex == 1) return 1;
            if(playerIndex == 0) return 2;
        }
        if(playerIndex == 2){
            if(computerIndex == 1) return 2;
            if(computerIndex == 0) return 1;
        }


    }
    else {
        if(playerIndex < computerIndex)
            return 1;
        else return 2;
    }
}
function transferPlayerChoiceToIndex(stringChoice){
    for(let i=0;i<availabaleChoices.length;i++){
        if(availabaleChoices[i]==stringChoice.toLowerCase()){
            return i ;
        }
    }
}
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
const winner = document.querySelector(".winner");
rockBtn.addEventListener("click",()=>{
    let winnerOfAround = playRound("rock");
    if(winnerOfAround !==0){
        score[winnerOfAround-1]++;
        playerScore.textContent = score[0];
        computerScore.textContent = score[1];
        if(score[0] == 5) winner.textContent = "Player";
        if(score[1] == 5) winner.textContent = "Computer";
    
    }
}
);
paperBtn.addEventListener("click",()=>{
    let winnerOfAround = playRound("paper");
    if(winnerOfAround !==0){
        score[winnerOfAround-1]++;
        playerScore.textContent = score[0];
        computerScore.textContent = score[1];
        if(score[0] == 5) winner.textContent = "Player";
        if(score[1] == 5) winner.textContent = "Computer";
    
    }
});
scissorsBtn.addEventListener("click",()=>{
    let winnerOfAround = playRound("scissors");
    if(winnerOfAround !==0){
        score[winnerOfAround-1]++;
        playerScore.textContent = score[0];
        computerScore.textContent = score[1];
        if(score[0] == 5) winner.textContent = "Player";
        if(score[1] == 5) winner.textContent = "Computer";
    
    }
})
function handleClick(playerChoice){
    console.log("hi");
    
}    


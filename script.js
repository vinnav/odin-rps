console.log("test")

function getComputerChoice(){
    let computerSelection = ""
    let randomNum = Math.random()
    if (randomNum < 0.33){
        computerSelection = "rock";
    } else if (randomNum >= 0.33 && randomNum < 0.66){
        computerSelection = "paper";
    } else {
        computerSelection = "scissor";
    }
    return computerSelection;
}

function playRound(){

    let computerSelection = getComputerChoice()

    let playerSelection = prompt("Choose rock, paper or scissor: ").toLowerCase();

    switch (computerSelection){
        case "rock":
            if(playerSelection == "rock"){
                console.log("CPU: Rock, Player: Rock - DRAW")
            }
            if(playerSelection == "paper"){
                console.log("CPU: Rock, Player: Paper - PLAYER WIN")
            } 
            if(playerSelection == "scissor"){
                console.log("CPU: Rock, Player: Scissor - CPU WIN")
            } 
        case "paper":
            if(playerSelection == "rock"){
                console.log("CPU: Paper, Player: Rock - CPU WIN")
            }
            if(playerSelection == "paper"){
                console.log("CPU: Paper, Player: Paper - DRAW")
            } 
            if(playerSelection == "scissor"){
                console.log("CPU: Paper, Player: Scissor - PLAYER WIN")
            } 
        case "scissor":
            if(playerSelection == "rock"){
                console.log("CPU: Scissor, Player: Rock - PLAYER WIN")
            }
            if(playerSelection == "paper"){
                console.log("CPU: Scissor, Player: Paper - CPU WIN")
            } 
            if(playerSelection == "scissor"){
                console.log("CPU: Scissor, Player: Scissor - DRAW")
            } 
    }
}

function game(){
    for(let i = 0; i <= 5; i++){
        playRound()
    }
}

function getChoice(num) {
    if (num == 1) {return "rock";}
    else if (num == 2) {return "paper";}
    else {return "scissors";}
}

function getComputerChoice() {
    const computerNum = Math.floor(Math.random() * 3) + 1;
    return getChoice(computerNum);
}

function getHumanChoice() {
    const humanNum = prompt("Enter 1 for Rock, 2 for Paper, and 3 for Scissors");
    return getChoice(humanNum);
}

function playRound(humanChoice, computerChoice) {
    if ((computerChoice == "rock" && humanChoice == "scissors") 
    || (computerChoice == "paper" && humanChoice == "rock") 
    || (computerChoice == "scissors" && humanChoice == "paper")) {
        return 1;
    } 
    //conditions for human to win
    else if ((humanChoice == "rock" && computerChoice == "scissors") 
        || (humanChoice == "paper" && computerChoice == "rock")
        || (humanChoice == "scissors" && computerChoice == "paper")) {
        return 2;
    }
    //conditions for draw
    else {
        return 3;
    }
}
function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    //running 5 rounds
    for (let i = 1; i < 6; i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        let returnedValue = playRound(humanChoice, computerChoice);
        if (returnedValue == 1) {
            computerScore += 1;
        }
        else if (returnedValue == 2) {
            humanScore += 1;
        }
        //if 3 is returned, nothing will happen (no one gets a score in draw)
    }
    //declaring a winner
    if (computerScore > humanScore) {
        console.log("Computer Wins! The Singularity is nigh upon us :(");
    }
    else if (humanScore > computerScore) {
        console.log("You win!! stupid comPOOter!");
    }
    else {
        console.log("No one won :(");
    }
}

playGame();

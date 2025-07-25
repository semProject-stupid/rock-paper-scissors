let humanScore = 0;
let computerScore = 0;
let rounds = 0;

const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorButton = document.querySelector('#scissors');

const compScoreP = document.querySelector('.computer-score');
const humanScoreP = document.querySelector('.human-score');
const roundsPlayed = document.querySelector('.rounds');

const compChoiceP = document.querySelector(".computer-choice");
const humanChoiceP = document.querySelector(".human-choice");
const finalResultP = document.querySelector(".final-result");

rockButton.addEventListener("click", () => playRound('rock'));
paperButton.addEventListener("click", () => playRound('paper'));
scissorButton.addEventListener("click", () => playRound('scissors'));

function getComputerChoice() {
    const num = Math.floor(Math.random() * 3) + 1;
    if (num == 1) {return "rock";}
    else if (num == 2) {return "paper";}
    else {return "scissors";}
}

function playRound(humanChoice) {
    if (rounds == 5) {
        rounds = 0;
        humanScore = 0;
        computerScore = 0;
        finalResultP.textContent = "";
    }
    let computerChoice = getComputerChoice();
    compChoiceP.textContent =  `Computer choice: ${computerChoice}`;
    humanChoiceP.textContent = `Human choice: ${humanChoice}`;

    if ((computerChoice == "rock" && humanChoice == "scissors") 
    || (computerChoice == "paper" && humanChoice == "rock") 
    || (computerChoice == "scissors" && humanChoice == "paper")) {
        computerScore++;
    } 
    //conditions for human to win
    else if ((humanChoice == "rock" && computerChoice == "scissors") 
        || (humanChoice == "paper" && computerChoice == "rock")
        || (humanChoice == "scissors" && computerChoice == "paper")) {
        humanScore++;
    }
    rounds++;
    roundsPlayed.textContent = `Rounds Played: ${rounds}`;
    compScoreP.textContent = `Computer: ${computerScore}`;
    humanScoreP.textContent = `You: ${humanScore}`;
    
    //displaying results when 5 ronds are completed
     if (rounds === 5) {
        if (humanScore > computerScore) {
            finalResultP.textContent = "You win!! stupid comPOOter!";
        } else if (computerScore > humanScore) {
            finalResultP.textContent = "Computer Wins! The Singularity is nigh upon us :(";
        } else {
            finalResultP.textContent = "No one won :(";
        }
        return;
    }
}

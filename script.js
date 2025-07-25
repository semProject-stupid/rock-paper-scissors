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

//from gpt - for left
const images = document.querySelector(".left-images");
const imagesFrames = ["./images/rock-gesture.png", "./images/paper-gesture.png", "./images/scissors-gesture.png"];
let frameIndex = 0;
let intervalID;
//self prac - for right
const rightImages = document.querySelector(".right-images");
const imagesFrames2 = ["./images/rock-gesture - comp.png", "./images/paper-gesture - comp.png", "./images/scissors-gesture - comp.png"];
let indexVal = 0;
let intervalID2;

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
    clearInterval(intervalID);
    clearInterval(intervalID2);
    //for left
    intervalID = setInterval( () => {
        images.src = imagesFrames[frameIndex];
        frameIndex = (frameIndex + 1) % imagesFrames.length;
    }, 100);
    //for right
    intervalID2 = setInterval( () => {
        rightImages.src = imagesFrames2[frameIndex];
        frameIndex = (frameIndex + 1) % imagesFrames2.length;
    }, 100);

    //to stop loop
    //for left
    setTimeout(() => {
    clearInterval(intervalID);
    if (humanChoice == "rock") {
        images.src = "./images/rock-gesture.png";
    } 
    else if (humanChoice == "paper") {
        images.src = "./images/paper-gesture.png";
    }
    else {
        images.src = "./images/scissors-gesture.png";
    }}, 1000); 
    //for right
    setTimeout(() => {
        clearInterval(intervalID2);
        if (computerChoice == "rock") {
            rightImages.src = "./images/rock-gesture - comp.png";
        } 
        else if (computerChoice == "paper") {
            rightImages.src = "./images/paper-gesture - comp.png";
        }
        else {
            rightImages.src = "./images/scissors-gesture - comp.png";
        }
    }, 1000);
    
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
        finalResultP.textContent = "Computer wins this round!\nPlay another move.";
    } 
    //conditions for human to win
    else if ((humanChoice == "rock" && computerChoice == "scissors") 
        || (humanChoice == "paper" && computerChoice == "rock")
        || (humanChoice == "scissors" && computerChoice == "paper")) {
        humanScore++;
        finalResultP.textContent = "You win this round!\nPlay another move.";
    }
    //conditions for draw
    else {
        finalResultP.textContent = "Draw.\nPlay another move.";
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

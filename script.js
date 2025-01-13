console.log("Hello World");

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    return (choice === 1 ? "rock" : (choice === 2 ? "paper" : "scissors"));   
}

function getHumanChoice(){
    let userChoice = prompt("Enter either of three choices\nrock\npaper\nscissors");
    return userChoice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice === 'rock'){
        if(computerChoice === 'paper') computerScore++;
        else if(computerChoice === 'scissors') humanScore++;
    }
    else if(humanChoice === 'paper'){
        if(computerChoice === 'rock') humanScore++;
        else if(computerChoice === 'scissors') computerScore++;
    }
    else{
        if(computerChoice === 'rock') computerScore++;
        else if(computerChoice === 'paper') humanScore++;
    }
}

const container = document.querySelector(".container");
let result = document.querySelector(".result");
let final = document.querySelector(".final");

container.addEventListener("click", (event) => {
    let target = event.target.getAttribute("class");
    let computerChoice = getComputerChoice();
    playRound(target,computerChoice);
    result.textContent =  "Your Score - " + humanScore + " Computer Score - " + computerScore;
    if(humanScore === 5 || computerScore === 5){
        let str = humanScore > computerScore ? "You Win" :
            (humanScore < computerScore ? "You Loose" : "You Tie");
        final.textContent = "Game Over : " + str; 
    }
});
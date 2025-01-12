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

function playGame(){
    for(let i=0;i<5;i++){
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
    }
    if(humanScore > computerScore) alert("You Win");
    else if(humanScore < computerScore) alert("You Loose");
    else alert("Tie");
    alert("Your Score : " + humanScore + " and Computer Score : " + computerScore);
}

playGame();
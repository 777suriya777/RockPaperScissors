console.log("Hello World");

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1;
    return (choice === 1 ? "rock" : (choice === 2 ? "paper" : "scissors"));   
}

function getHumanChoice(){
    let userChoice = prompt("Enter either of three choices\nrock\npaper\nscissors");
    console.log("You've entered " + userChoice);
}
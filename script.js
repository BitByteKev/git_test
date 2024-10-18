// Making an array of the choices of the game and setting starting score variables of 0
const arr = ["Rock", "Paper", "Scissors"];
let humanScore = 0;
let computerScore = 0;

// This function makes a random choice and returns the choice
function getComputerChoice() {
    let randomChoice = Math.floor(Math.random() * arr.length);
    return arr[randomChoice]; // Return the computer's choice
}



// This function gets a choice from the human and returns the choice
function getHumanChoice(capitalzeInput) {
    let input = prompt("Rock Paper or Scissors");

    // Convert the user's input to a choice based on the prompt
    if (input === "Rock") {
        return "Rock";
    } else if (input === "Paper") {
        return "Paper";
    } else if (input === "Scissors") {
        return "Scissors";
    } else {
        console.log("Invalid choice. Please select 1, 2, or 3.");
        return null; // Return null for invalid input
    }

}

// Function checks the choice from human and computer and checks who wins or if there is a tie.
function playRound(humanChoice, computerChoice) {
    
    if (humanChoice === computerChoice) {
        result = `Tie`
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        result = `${humanChoice} beats ${computerChoice} Human wins`
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        result = `${humanChoice} beats ${computerChoice} Human wins`
        humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        result = `${humanChoice} beats ${computerChoice} Human wins`
        humanScore++;
    } else {
        result = `Computer wins with ${computerChoice}`;
        computerScore++;
    }
    // Print the current score
    document.getElementById('title').innerText = result;
}

// Run the game
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection))

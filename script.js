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
function getHumanChoice() {
    let input = prompt("What is your choice? 1. Rock 2. Paper 3. Scissors");
    let num = Number(input);

    // Convert the user's input to a choice based on the prompt
    if (num === 1) {
        return "Rock";
    } else if (num === 2) {
        return "Paper";
    } else if (num === 3) {
        return "Scissors";
    } else {
        console.log("Invalid choice. Please select 1, 2, or 3.");
        return null; // Return null for invalid input
    }
}

// Function checks the choice from human and computer and checks who wins or if there is a tie.
function playRound(humanChoice, computerChoice) {
    if (!humanChoice) {
        console.log("Game cancelled due to invalid human choice.");
        return; // Exit if the human choice was invalid
    }

    if (humanChoice === computerChoice) {
        console.log("Tie");
    } else if (humanChoice === "Rock" && computerChoice === "Scissors") {
        console.log(`${humanChoice} beats ${computerChoice} Human wins`)
        humanScore++;
    } else if (humanChoice === "Paper" && computerChoice === "Rock") {
        console.log(`${humanChoice} beats ${computerChoice} Human wins`)
        humanScore++;
    } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
        console.log(`${humanChoice} beats ${computerChoice} Human wins`)
        humanScore++;
    } else {
        console.log("Computer wins");
        computerScore++;
    }
    // Print the current score
    console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
}

// Run the game
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

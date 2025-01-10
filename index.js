console.log("Hello world!")

// Declare variables with let 
let humanScore = 0;
let computerScore = 0;

// Function get the CP choice based on random numbers
function getComputerChoice() {
    CP_choice = ((Math.random() * 100) + 1) 
        if (CP_choice >= 1 && CP_choice <= 34) {
            CP_choice = 'Rock';
        } else if (CP_choice >= 35 && CP_choice <= 67){
            CP_choice = 'Paper';
        } else {
            CP_choice = 'Scissors';
}
return CP_choice
}

// Function get user choice
function getHumanChoice() {
    H_choice = prompt("Select your choice (Rock | Paper | Scissors): ")
    H_choice = H_choice.trim().toLowerCase() // Trim spaces and convert in lower case
    H_choice = H_choice.charAt(0).toUpperCase() + H_choice.slice(1) // Capitalize the first letter
    if (H_choice == 'Rock' || H_choice == 'Paper' || H_choice == 'Scissors' ) {
        return H_choice
    }
}

// Function for comparison of the choices
function playRound(computerChoice, humanChoice) {
    if (computerChoice == humanChoice) {
        console.log("It's a draw!")
    } else if (
        (computerChoice == 'Rock' && humanChoice == 'Scissors') ||
        (computerChoice == 'Paper' && humanChoice == 'Rock') ||
        (computerChoice == 'Scissors' && humanChoice == 'Paper')
    ){
        computerScore += 1; // Sums a victory if CP wins
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    } else if (
        (humanChoice == 'Rock' && computerChoice == 'Scissors') ||
        (humanChoice == 'Paper' && computerChoice == 'Rock') ||
        (humanChoice == 'Scissors' && computerChoice == 'Paper')
    ){
        humanScore += 1; // Sums a victory if human wins
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    }
}


// Function to play the game and declare the final winner
function playGame() {
    for (let i = 1; i <= 5; i++){ // Iteration until 5 rounds
        console.log(`Round ${i}`);
        let computerChoice = getHumanChoice();
        let humanChoice = getComputerChoice();

        console.log(`You chose: ${humanChoice}`);
        console.log(`Computer chose: ${computerChoice}`);

        playRound(computerChoice, humanChoice);
        console.log(`Current Scores -> Human: ${humanScore}, Computer: ${computerScore}`);
    }

    console.log("Game Over!");

    if (humanScore == computerScore) {
        console.log("It's a draw!");
    } else if (humanScore < computerScore) {
        console.log("You lose!");
    } else {
        console.log("You win!");
    }
}

playGame();
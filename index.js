console.log("Hello world!")
let humanScore = 0;
let computerScore = 0;

// Function get the CP choice
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
    H_choice = prompt("Select your choice: ")
    H_choice = H_choice.toLowerCase()
    H_choice = H_choice.charAt(0).toUpperCase() + H_choice.slice(1)
return H_choice
}

// Function for comparison of the choices
function playRound(computerChoice, humanChoice) {
    if (computerChoice == humanChoice) {
        console.log("It's a draw!")
    } else if (computerChoice == 'Rock' && humanChoice == 'Scissors'){
        computerScore += 1
        console.log('You lose! Rock beats Scissors')
    } else if (computerChoice == 'Paper' && humanChoice == 'Rock'){
        console.log('You lose! Paper beats Rock');
    } else if (computerChoice == 'Scissors' && humanChoice == 'Paper'){
        console.log('You lose! Scissors beats Paper');
    } else console.log('You win!');
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// Function keep track of the scores and declares a winner at the end
function playGame() {
    playRound(humanSelection, computerSelection); // Calls function 
    for (var i = 1; i < 6; i++) playRound(i); // Iteration

    if (playRound(5)) {

    }
}